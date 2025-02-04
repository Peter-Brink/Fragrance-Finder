export default async function handler(req, res) {

  if (req.method === "OPTIONS") {
    res.setHeader(
      "Access-Control-Allow-Origin",
      process.env.NODE_ENV === "production"
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NEXT_PUBLIC_API_BASE_URL
    );
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  } else {
    try {
      const response = await fetch(
        `https://api.openai.com/v1/chat/completions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
          },
          body: JSON.stringify({
            messages: [
              {
                role: "developer",
                content:
                  'You are a helpful fragrance finding assistant. You should take the information provided to you and suggest the top 5 fragrances that you think would be a good fit for the user. Start with a brief overview where you refer to the user as "you" and say something like "We have collected the 5 best fragrances for..." and then talk about the details that the user gave. Do not mention their age or gender. With each option, you should give the name, a description, a general price range, and a link to where it can be bought. Remember, you should return exactly 5 fragrances.',
              },
              {
                role: "user",
                content: req.body.message,
              },
            ],
            model: "gpt-4o",
            store: false,
            response_format: {
              type: "json_schema",
              json_schema: {
                name: "fragrance-finder-response",
                strict: true,
                schema: {
                  type: "object",
                  properties: {
                    overview: {
                      type: "string",
                      description:
                        "A brief summary that introduces the fragrance recommendations based on user preferences and criteria",
                    },
                    fragrances: {
                      type: "array",
                      min_items: 5,
                      max_items: 5,
                      items: {
                        type: "object",
                        properties: {
                          name: {
                            type: "string",
                            description: "The name of the fragrance",
                          },
                          description: {
                            type: "string",
                            description:
                              "A detailed description of the fragrance's notes and character",
                          },
                          price_range: {
                            type: "object",
                            properties: {
                              min: {
                                type: "number",
                                description: "Minimum price in USD",
                              },
                              max: {
                                type: "number",
                                description: "Maximum price in USD",
                              },
                            },
                            additionalProperties: false,
                            required: ["min", "max"],
                          },
                          where_to_buy: {
                            type: "string",
                            description:
                              "Official website link to purchase the fragrance",
                          },
                        },
                        additionalProperties: false,
                        required: [
                          "name",
                          "description",
                          "price_range",
                          "where_to_buy",
                        ],
                      },
                    },
                  },
                  additionalProperties: false,
                  required: ["overview", "fragrances"],
                },
              },
            },
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json({
          message: "Non-200 response from external API",
        });
      }

      const refusal = data.choices[0].message.refusal;

      if (refusal) {
        return res.status(400).json({
          message: "LLM refused response",
          details:
            "The llm refused to respond, this could mean that the user input was considered invalid or offensive.\nSystem message: " +
            data.choices[0].message.content,
        });
      }

      return res.status(200).json(data.choices[0].message.content);
    } catch (e) {
      return res.status(502).json({
        message: "Failed to reach the external API",
        details: e.message,
      });
    }
  }
}

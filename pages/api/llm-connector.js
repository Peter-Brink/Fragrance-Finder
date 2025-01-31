export default async function handler(req, res) {
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
                  "You are a helpful fragrance finding assistant. You should take the information provided to you and suggest the top 5 fragrances that you think would be a good fit for the user. With each option, you should give the name, a description, a a general price range, and a link to where it can be bought.",
              },
              {
                role: "user",
                content: req.body.message,
              },
            ],
            model: "gpt-4o-mini",
            store: false,
          }),
        }
      );

      if (!response.ok) {
        return res.status(response.status).json({
          message: "External API error occurred",
          details: await response.json(),
        });
      }

      const data = await response.json();
      res.status(200).json(data.choices[0].message.content);
    } catch (e) {
      console.error("Error fetching external API:", e);
      res.status(502).json({
        message: "Failed to reach the external API",
        error: e.message,
      });
    }
  }
}

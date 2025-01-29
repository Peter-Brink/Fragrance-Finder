import FadingDiv from "@/components/visual/fading-div";
import HeadingText from "@/components/visual/heading-text";
import ManEmoji from "../../public/emojis/man-raising-hand.svg";
import WomanEmoji from "../../public/emojis/woman.svg";

const Section2 = () => {
  return (
    <section className="section bg-gradient-to-b from-mylightBlue to-myPurple text-white snap-start">
      <HeadingText text={"What is your gender?"} />
      <div className="flex items-center justify-center space-x-20 w-[70vw] h-[60vh]">
        <div className="w-[25vw] h-[25vw] bg-white rounded-[50px] flex items-center justify-center hover:border-2 hover:border-myNavy">
          <ManEmoji className="w-[60%] h-auto" />
        </div>
        <div className="w-[25vw] h-[25vw] bg-white rounded-[50px] flex items-center justify-center hover:border-2 hover:border-myNavy">
          <WomanEmoji className="w-[55%] h-auto ml-10" />
        </div>
      </div>
      <FadingDiv section={2} />
    </section>
  );
};

export default Section2;

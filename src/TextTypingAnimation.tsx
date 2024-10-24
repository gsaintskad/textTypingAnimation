import { useEffect, useState } from "react";

interface TextTypingAnimationProps {
  children?: string;
  typingSpeed?: number;
}

// const isDarkTheme=true;
// const circleChar=isDarkTheme?'⚪':'⚫';
const circleChar='⚪';
const randomTimeGap = (): number => {
  return (
    Math.floor(Math.random() + 0.5) * 25 + Math.floor(Math.random() + 0.1) * 50
  ); // random time between 100ms and 500ms
};

const TextTypingAnimation = (props: TextTypingAnimationProps) => {
  const children = props.children;
  const [actualText, setActualText] = useState("");
  let i = 0;
  const splittedText = props.children!.split("");
  useEffect(() => {
    i=0;
    // Reset actualText when the children (the text to animate) changes
    setActualText("");



    const typeNextChar = () => {

      let c: string;
      if (i < splittedText.length) {
        c = splittedText[i] ?? "";

        // Append the current character and then move to the next one
        setActualText((prevText) => {
          return prevText.slice(0,i>1?i-1:i) + c+(i!==splittedText.length-2?circleChar:'');
        });

        i += 1;

        setTimeout(typeNextChar, randomTimeGap()); // Continue after a random delay
      }
      else{
        setActualText((text)=>text.slice(0,i));
      }
    };

    typeNextChar();


    return () => {

      i = splittedText.length;

      // Stop typing when the component is unmounted
    };
  }, [children]);

  return (
    <>
      <span className="text-blue-400 font-bold ms-10">
        {actualText}
      </span>
    </>
  );
};

export { TextTypingAnimation };

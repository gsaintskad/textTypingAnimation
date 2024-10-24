import { useEffect, useState } from "react";

interface TextTypingAnimationProps {
  children?: string;
  typingSpeed?: number;
}

const randomTimeGap = (): number => {
  return Math.floor(Math.random() + 0.5) * 150+Math.floor(Math.random() + 0.1) * 100; // random time between 100ms and 500ms
};

const TextTypingAnimation = (props: TextTypingAnimationProps) => {
  const children = props.children;
  const [actualText, setActualText] = useState("");

  useEffect(() => {
    // Reset actualText when the children (the text to animate) changes
    setActualText("");
    let i = 0;
    const splittedText = props.children!.split("");

    const typeNextChar = () => {
      let c: string;
      if (i < splittedText.length) {
        c = splittedText[i] ?? "";
        // Append the current character and then move to the next one
        setActualText((prevText) => prevText + c);
        console.log(c);
        i += 1;
        setTimeout(typeNextChar, randomTimeGap()); // Continue after a random delay
      }
    };

    typeNextChar(); // Start typing the text

    // Cleanup function to avoid memory leaks if component is unmounted
    return () => {
      i = splittedText.length; // Stop typing when the component is unmounted
    };
  }, [children]); // Only run when `children` changes

  return (
    <>
      <h1>{actualText}</h1>
    </>
  );
};

export { TextTypingAnimation };

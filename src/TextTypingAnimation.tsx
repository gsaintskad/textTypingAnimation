import { useEffect, useState } from "react";

interface TextTypingAnimationProps {
  children?: string;
  typingSpeed?: number;
}

const randomTimeGap = (): number => {
  return 500;
};

const TextTypingAnimation = (props: TextTypingAnimationProps) => {
  const [actualText, setActualText] = useState("");
  const splittedText = props.children!.split("");
  let i=0;
  useEffect(() => {
    // props.children?.split("").forEach((char) => {
    //  setTimeout(()=>setActualText(actualText+ char), randomTimeGap());
    // })

    const interval=()=> setTimeout(() => {
      setActualText(actualText+splittedText[i]);
      i+=1;
      console.log(splittedText[i]);
      if(i<splittedText.length){
        interval()
      }
    }, randomTimeGap());
    interval();
    // setTimeout(() => setActualText(props.children!), randomTimeGap());
  },[i]);
  return (
    <>
      <h1>{actualText}</h1>
    </>
  );
};

export { TextTypingAnimation };

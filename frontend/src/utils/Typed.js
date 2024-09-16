import { useEffect } from "react";

function Typed(text, element) {
  useEffect(() => {
    let i = 0;
    element.current.innerHTML = "";
    let intervalId = setInterval(() => {
      if (i <= text.length - 1) {
        element.current.innerHTML += text[i];
        console.log(text[i], text);
        i++;
      } else {
        clearTimeout(intervalId);
      }
    }, 100);

    return () => clearTimeout(intervalId);
  }, [text]);
}

export default Typed;

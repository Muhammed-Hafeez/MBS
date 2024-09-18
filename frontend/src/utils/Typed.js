import { useEffect } from "react";

function Typed(text, element) {
  useEffect(() => {
    let i = 0;
    element.current.innerHTML = "";
    let intervalId = setInterval(() => {
      if (i <= text.length - 1) {
        element.current.innerHTML += text[i];
        i++;
      } else {
        clearTimeout(intervalId);
      }
    }, 50);

    return () => clearTimeout(intervalId);
    // eslint-disable-next-line
  }, [element]);
}

export default Typed;

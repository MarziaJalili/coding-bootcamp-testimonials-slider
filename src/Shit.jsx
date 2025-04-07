import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Shit = () => {
  const button =
    "Shit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat";

  const chars = button.split("").map((char, index) => {
    return (
      <span key={index} className="char">
        {char}
      </span>
    );
  });

  useGSAP(() => {
    gsap.from(".char", {
      duration: 0.8,
      opacity: 0,
    });
  });

  return <div className="button">{chars}</div>;
};

export default Shit;

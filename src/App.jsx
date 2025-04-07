import { useState } from "react";
import data from "./data.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  // determining the user...
  const [count, setCount] = useState(0);
  const item = data[count];

  const toggleUsers = (button) => {
    button === "next" ? setCount(1) : setCount(0);
  };

  const chars = item.paragraph.split("").map((char, index) => {
    return (
      <span key={index} className="char">
        {char}
      </span>
    );
  });

  // GSAP animation...
  useGSAP(() => {
    gsap.from(".char", {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
    });
  }, [count]);

  return (
    <main
      className="font-Inter text-Dark-Blue bg-[url(../public/pattern-curve.svg)] h-[100vh] bg-no-repeat bg-position-[bottom_0_left_0] bg-size-[80%] grid place-items-center md:bg-size-[60%]
    "
    >
      <article className="flex flex-col space-y-12 container mx-auto px-6 md:flex-row-reverse items-center lg:max-w-5xl">
        <section className="relative bg-[url(../public/pattern-bg.svg)] p-10 bg-no-repeat bg-position-[center] bg-size-[100%] md:-ml-22 lg:-ml-30 lg:p-20">
          {/* user image */}

          <img
            className="rounded-lg shadow-[0_30px_80px_-40px_hsl(245,50%,49%)]"
            src={item.img.src}
            alt={item.img.alt}
          />

          {/* toggle buttons... */}
          <div className="flex justify-between space-x-12 absolute py-4 px-6 bg-white bottom-4 translate-x-[-50%] left-[50%] rounded-full  md:left-[32%] lg:bottom-14">
            <button
              id="prev"
              onClick={() => toggleUsers("prev")}
              aria-label="switches the slides"
              className="cursor-pointer hover:scale-120  transition-all duration-300 "
            >
              <img src="./icon-prev.svg" alt="icon-prev" />
            </button>
            <button
              id="next"
              onClick={() => toggleUsers("next")}
              aria-label="switches the slides"
              className="cursor-pointer hover:scale-120 transition-all duration-300 "
            >
              <img className="" src="./icon-next.svg" alt="icon-next" />
            </button>
          </div>
        </section>

        <div className="flex flex-col py-6 items-center text-center space-y-6 container mx-auto bg-[url(../public/pattern-quotes.svg)] bg-no-repeat bg-position-[center_top] bg-size-[20%] md:text-left md:items-start md:z-10 md:bg-position-[left_75px_top_10px] lg:bg-position-[left_75px_top_0] md:bg-size-[18%] md:py-10 md:max-w-sm lg:max-w-md">
          <p className="text-xl font-light lg:text-2xl md:leading-10">
            {chars}
          </p>

          <strong className="text-lg ">
            {item.name}
            <span className="position max-md:block md:ml-2 text-Grayish-Blue font-normal">
              {item.position}
            </span>
          </strong>
        </div>
      </article>
    </main>
  );
}

export default App;

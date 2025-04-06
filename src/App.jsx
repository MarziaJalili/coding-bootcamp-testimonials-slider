import { useState } from "react";
import data from "./data.js";

function App() {
  // determining the user...
  const [count, setCount] = useState(0);
  const item = data[count];

  const toggleUsers = (button) => {
    button === "next" ? setCount(1) : setCount(0);
  };

  return (
    <main className="font-Inter text-Dark-Blue bg-[url(../public/pattern-curve.svg)] h-[100vh] bg-no-repeat bg-position-[bottom_0_left_0] bg-size-[80%] grid place-items-center">
      <article className="flex flex-col space-y-12 container mx-auto px-6">
        <section className="relative bg-[url(../public/pattern-bg.svg)] p-10 bg-no-repeat bg-position-[center] bg-size-[100%]">
          {/* user image */}

          <img
            className="rounded-lg shadow-[0_30px_80px_-40px_hsl(245,50%,49%)]"
            src={item.img.src}
            alt={item.img.alt}
          />

          {/* toggle buttons... */}
          <div className="flex justify-between space-x-12 absolute py-4 px-6 bg-white bottom-4 translate-x-[-50%] left-[50%] rounded-full">
            <button
              id="prev"
              onClick={() => toggleUsers("prev")}
              aria-label="switches the slides"
              className="cursor-pointer hover:scale-120  transition-all duration-300 "
            >
              <img className="" src="./icon-prev.svg" alt="icon-prev" />
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

        <div className="flex flex-col py-6 items-center text-center space-y-6 container mx-auto bg-[url(../public/pattern-quotes.svg)] bg-no-repeat bg-position-[center_top] bg-size-[20%]">
          <p className="text-xl font-light">{item.paragraph}</p>

          <strong className="text-lg">
            {item.name}
            <span className="block text-Grayish-Blue font-light">
              {item.position}
            </span>
          </strong>
        </div>
      </article>
    </main>
  );
}

export default App;

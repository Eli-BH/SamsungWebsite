import React from "react";
import { chipImg, frameImg, frameVideo, snapDragonImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const HowItWorks = () => {
  const videoRef = React.useRef(null);
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  const FIRST_IMAGE = {
    imageUrl:
      "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-gaming-arena-off.jpg?imbypass=true",
  };
  const SECOND_IMAGE = {
    imageUrl:
      "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-gaming-arena-on.jpg?imbypass=true",
  };

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={snapDragonImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Speed and power, a
            <br />
            game-changing combo
          </h2>

          <p className="hiw-subtitle">
            Victory can be yours with the new Snapdragon® 8
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <ReactBeforeSliderComponent
              firstImage={FIRST_IMAGE}
              secondImage={SECOND_IMAGE}
              className="w-full h-full"
            />
          </div>

          <p className="text-gray font-semibold text-center mt-3">
            Arena Breakout
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              Victory can be yours with the new Snapdragon® 8 Gen 3 for Galaxy.{" "}
              <span className="text-white">
                Graphics render in real time with ray tracing for
                hyper-realistic shadows and reflections.
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">All-day battery to play on and on</p>
            <p className="hiw-text">with 8 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

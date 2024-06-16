import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo, samsungVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 768 ? heroVideo : smallHeroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
      duration: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2.5,
      duration: 1,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Samsung Galaxy S24 Ultra
        </p>

        <div className="md:w-10/12 w-9/12  flex-center">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={samsungVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 "
      >
        <a
          href="#highlights"
          className="btn font-bold tracking-wider w-36 text-center"
        >
          Buy Now
        </a>
        <p className="font-normal text-xl">From $296/month or $1299</p>
      </div>
    </section>
  );
};

export default Hero;

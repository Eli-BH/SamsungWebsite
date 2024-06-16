import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start  items-start">
        <div className="w-[10rem] h-[10vw] rounded-full">
          <p>
            It's not a phone, it's a <strong>Galaxy</strong>
          </p>
        </div>
      </div>
    </Html>
  );
};

export default Loader;

import React from "react";
//import { SiSpinrilla } from "react-icons/si";
import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <p className=" font-semibold  animate-spin text-white">
        {/*<SiSpinrilla className="text-8xl" />*/}
        <BounceLoader
          color="#f389eb"
          size={120}
        />
      </p>
    </div>
  );
};

export default Loading;

import React from "react";
import Lottie from "react-lottie";
import "./LottyAnimations.css";
import animationData from "../../../public/animation_1.json"; // Adjust path as necessary

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} className="lottie" />;
};

export default LottieAnimation;

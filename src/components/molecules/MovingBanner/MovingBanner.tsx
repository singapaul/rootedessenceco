import React, { ReactNode } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

type Props = {
  children?: ReactNode;
};

const MovingBanner = ({ children }: Props) => {
  return (
    <ParallaxBanner
      layers={[{ image: "/women.png", speed: 20 }]}
      className="aspect-[2/1]"
    />
  );
};

export default MovingBanner;

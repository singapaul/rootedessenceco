import React  from "react";
import { ParallaxBanner } from "react-scroll-parallax";

type Props = {
  imageURL: string;
};

export const MovingBanner = ({ imageURL }: Props) => {
  return (
    <ParallaxBanner
      layers={[{ image: imageURL, speed: -20 }]}
      className="aspect-[2/1] max-h-96"
    />
  );
};
 

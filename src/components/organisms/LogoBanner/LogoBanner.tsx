import { TypographyH3, TypographyP } from "@/components/molecules/typography";
import React from "react";
import Image from "next/image";
import fairwild from '@/lib/assets/images/fairwild_logo.png'
type Props = {};

export const LogoBanner = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-evenly text-center min-h-32 bg-orange-50 py-8 gap-2 border-t-2 border-b-2 border-black px-4">
      <TypographyH3 className="text-black text-5xl">
        FairWild Certified
      </TypographyH3>
      <Image className="max-w-36" src={fairwild} alt="fairwild logo" />
      <TypographyP>
        Certification is an excellent way to implement the FairWild Standard.
        FairWild certification means that buyers - from ingredient traders up to
        consumers - know they are dealing with legally, ethically and
        sustainably harvested products. They are fair traded, meaning that the
        benefits are felt by all those involved, right down to the local
        communities harvesting the wild plants.
      </TypographyP>
    </div>
  );
};

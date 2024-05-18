import { TypographyH1, TypographyH2 } from "@/components/molecules/typography";
import { Button } from "@/components/ui/button";
import stockImage from "@/lib/assets/images/rsz_1stockfrank-removebg-preview.png";
import Image from "next/image";

type HeroProps = {
  title?: string;
};

export const Hero = ({ title }: HeroProps) => {
  return (
    <section className="flex flex-col w-full p-4 sm:flex-row items-center bg-green-600 justify-between">
      <div className="flex flex-col gap-4">
        <TypographyH1>{"Rooted Essence Co"}</TypographyH1>
        <TypographyH2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </TypographyH2>
        <div className="flex gap-3">
          <Button variant={'outline'}>Learn more</Button>
          <Button variant={'secondary'}>Contact</Button>
        </div>
      </div>
      <Image alt="Hero logo" src={stockImage} />
    </section>
  );
};

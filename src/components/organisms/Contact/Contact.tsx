import React from "react";
import { ContactForm } from "./ContactForm";
import { TypographyH2, TypographyP, amatic } from "@/components/molecules/typography";

export const Contact = () => {
  return (
    <div className="bg-orange-50 w-full p-8 flex flex-col items-center gap-8" id='contact'>
      <TypographyH2>Contact us</TypographyH2>
      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center sm:w-1/2">
          <p className={`font-extrabold text-5xl ${amatic.className}`}>
            Embark on a bespoke buying journey tailored to your business needs
            through our enquiry form
          </p>
        </div>
        <div className="sm:w-1/2">
          <div className="w-full max-w-[700px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { ContactForm } from "./ContactForm";
import { TypographyH2 , amatic } from "@/components/molecules/typography";
 
export const Contact = () => {
  return (
    <div className="bg-orange-50 w-full p-8 flex flex-col items-center gap-8" id='contact'>
      <TypographyH2 className="text-5xl">Contact us</TypographyH2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-start sm:w-1/2 sm:pt-3">
          <p className={`font-extrabold text-5xl ${amatic.className}`}>
          Start Your Bespoke Ethical Sourcing Journey for Premium Frankincense and Myrrh with Our Enquiry Form
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

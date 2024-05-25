import React from "react";
import Image from "next/image";
import logo from '@/lib/assets/images/logo-med.png'

export const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-green-900 text-white">
      <aside>
        {/* @todo insert logo */}
        <Image className="object-scale-down h-32 sm:h-40" src={logo} alt='logo'/>
        {/* <p className="font-bold">
          Rooted Essence Co.<br />
          Providing Frankincensesince products since 2023
        </p> */}
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  );
};

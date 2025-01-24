import { Mail, Phone } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-around w-full h-[216px] py-10 justify-center bg-[#4338CA] mt-[51px] text-white">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 ">
          <img src="./Logo.svg" alt="" className="" />
        </div>
        <p>© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex flex-col gap-3">
        <p>Contact Information</p>
        <div className="flex items-center gap-3">
          <Mail />
          <div>
            <p>Email:</p>
            <p>susupport@movieZ.com</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Phone />
            <div>
              <p>Phone:</p>
              <p>+976 11123-4567</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>Follow us</p>
        <div className="flex gap-3">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
};

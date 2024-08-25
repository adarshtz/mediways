import { FooterCol } from "../components";
import { BsYoutube, BsLinkedin, BsTwitterX } from "react-icons/bs";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <div className="flex w-full flex-col bg-extraDark md:flex-row md:px-12 py-12 md:py-4">
      <div className="flex flex-col md:items-start gap-4 items-center justify-center w-full md:w-1/3 px-6">
        <img
          src={logo}
          className="w-[8rem]"
        />
        <p className="family-inter text-center text-[1rem] font-normal text-white/60 md:text-left">
          Treatment With Unmatched Personal Care
        </p>
        <div className="socials flex space-x-4 text-white">
          <BsYoutube size={22} className="" />
          <BsLinkedin size={18} />
          <BsTwitterX size={18} />
        </div>
      </div>
      <FooterCol />
    </div>
  );
};

export default Footer;

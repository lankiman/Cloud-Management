import React from "react";
import FooterItems from "./FooterItems";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch
} from "react-icons/fa";

const Footer = () => {
    const listOne=["Marketing", "Analytics", "Commerce", "Data", "Cloud"];
    const listTwo=["Pricing", "Documentation", "Guides", "API Status"];
    const listThree=["About", "Blog", "Jobs", "Press", "Partners"];
    const listFour=["Claims", "Privacy", "Terms", "Policies", "Conditions"];
    const style="cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
    const openLink = (url: string) => {
      window.open(url, "_blank");
    };

  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240] mx-auto grid grid-cols-2
      md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <FooterItems heading="Solutions" items={listOne}/>
        <FooterItems heading="Support" items={listTwo}/>
        <FooterItems heading="company" items={listThree}/>
        <FooterItems heading="legal" items={listFour}/>
        <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">Subscribe to our newsletter</p>
            <p className="py-4"> The Latest news, articles, and resources, send to your imbox weekly</p>
            <form className="flex flex-col sm:flex-row">
                <input type="email" className="w-full p-2 mr-4 rounded-md mb-4 text-slate-950" placeholder="Enter Email"/>
                 <button className="p-2 mb-4">Subscribe</button>
            </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="mb-3">2023 Contributions, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] text-2xl">
            <FaFacebook className={style}/>
            <FaGithub className={style} onClick={()=>openLink("https://github.com/lankiman")}/>
            <FaTwitch className={style}/>
            <FaInstagram className={style}/>
            <FaTwitter className={style}/>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;

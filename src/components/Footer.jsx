import React from "react";
// Images
import logo from "/logo-colored.svg";
import apple from "/apple.png";
import google from "/google.png";
// Icons
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import FooterBottom from "./FooterBottom";
const Footer = () => {
  const footer = [
    {
      title:
        "Follow us on social media for the latest updates and exclusive deals. Shop smart, shop Brandify.",
      links: (
        <div className="flex gap-4">
          <FaFacebook size={24} className="text-icons-2" />
          <FaLinkedin size={24} className="text-icons-2" />
          <FaYoutube size={24} className="text-icons-2" />
          <AiFillInstagram size={24} className="text-icons-2" />
        </div>
      ),
    },
    {
      title: "About",
      links: ["About Us", "Find store", "Categories", "Blogs"],
    },
    {
      title: "Partnership",
      links: ["Contact Us", "Returns", "Shipping Info", "FAQs"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
    {
      title: "For users",
      links: ["Login", "Register", "Settings", "My Orders"],
    },
    {
      title: "Get app",
      links: (
        <div className="flex flex-col gap-2">
          <img src={apple} alt="Apple Store" className="w-42" />
          <img src={apple} alt="Google Play" className="w-42" />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="container py-10">
          <div className="grid grid-cols-6 gap-20">
            {footer.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                {" "}
                {index === 0 && (
                  <img src={logo} alt="Logo" className="mb-2 w-32" />
                )}
                <p
                  className={`font-light ${
                    index === 0 ? "text-desc" : "text-black"
                  }`}
                >
                  {item.title}
                </p>
                {Array.isArray(item.links) ? (
                  <div className="flex flex-col gap-2">
                    {item.links.map((link, i) => (
                      <p key={i} className="text-desc font-light">
                        {link}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="text-desc font-light">{item.links}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <FooterBottom />
      </div>
    </>
  );
};

export default Footer;

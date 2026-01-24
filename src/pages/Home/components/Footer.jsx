import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-5">
      <div className="flex justify-evenly">
        <FaGithub size={35} />
        <FaInstagram size={35} />
        <FaTwitter size={35} />
        <FaLinkedin size={35} />
      </div>
      <p className="text-center mt-4">Copyright ©2026 All rights reserved </p>
    </div>
  );
};

export default Footer;

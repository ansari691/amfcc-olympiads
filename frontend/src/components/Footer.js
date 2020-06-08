import React from "react";
import { MdEmail, MdPhone, MdFavorite } from "react-icons/md";
import { FaTeamspeak } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center p-2 mt-5" style={{backgroundColor : "whitesmoke"}}>
      <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
        <FaTeamspeak />
        <span className="ml-3">Contact us</span>
      </div>
      <MdEmail />{" "}
      <a
        href="mailto:amfccentre@gmail.com"
        className="mr-3 text-decoration-none text-secondary"
      >
        amfccentre@gmail.com
      </a>
      <MdPhone />{" "}
      <a href="tel:7378899165" className="text-decoration-none text-secondary">
      +91 7378899165
      </a>
      <p>Rais High School Campus, Thana Road, Bhiwandi-421302, Thane.</p>
      <span>
        Made with <MdFavorite /> by AMFCCENTRE
      </span>
      <p className="mt-3 mb-0">AMFCC OLYMPIADS &copy;2020</p>
    </div>
  );
};

export default Footer;

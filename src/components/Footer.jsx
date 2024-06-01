import React from "react";
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-md-start text-center">
            <div className="mt-lg-3 mt-md-4 mt-0">
              <h5 className="site-h">Site Map</h5>
              <ul>
                <li className="mt-3 site-list">
                  <a href="#" className="site-li">
                    About us
                  </a>
                </li>
                <li className="">
                  <a href="#" className="site-li">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="site-li">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="site-li">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="mt-lg-3 mt-md-4 mt-0">
              <h5 className="site-h">Site Map</h5>
              <ul>
                <li className="mt-3 policy-list">
                  <a href="#" className="site-li">
                  Privacy policy
      
                  </a>
                </li>
                <li className="">
                  <a href ="#" className="site-li">
                  Terms & Conditions - Website

                  </a>
                </li>
                <li>
                  <a href="#" className="site-li">
                  Terms & Conditions - Members
                  </a>
                </li>
                <li>
                  <a href="#" className="site-li">
                  Labour Compliance Documents
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 text-md-start text-center">
            <div className="icons-div">
              <p className="footer-l-h">&copy; 2024 MMA Matrix</p>
              <a href="#" className="me-2 iconss">
                <Instagram />
              </a>
              <a href="#" className="me-2 iconss">
                <Facebook />
              </a>
              <a href="#" className="me-3 iconss">
                <Linkedin />
              </a>
              <a href="#" className="me-3 iconss">
                <Youtube />
              </a>
              <a href="#" className="me-3 iconss">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 text-secondary">
        Designed And Developed By Karans
      </div>
    </footer>
  );
};

export default Footer;

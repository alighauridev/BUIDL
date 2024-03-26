import React from "react";
import "../scss/footer.scss";
import instagram from "../assests/instagram.png"
import logo from "../assests/Logo3-newwht.png"
const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="container">
          <div className="top">

            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="icons">
              <a href="https://t.me/BUIDL" target="_blank">
                <img src="https://static.wixstatic.com/media/1f3f2b_af942b4585dd4bf9baaa6e151c02f1b4~mv2.png/v1/fill/w_57,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twttttee2.png" alt="" />
              </a>
              <a href="https://x.com/BUIDL" target="_blank">
                <img src="https://static.wixstatic.com/media/1f3f2b_f59a557a4c72456581fa206a9247dcac~mv2.png/v1/fill/w_57,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twtttt.png" alt="" />
              </a>

            </div>
            <p>
              <a href="mailto:contact@buidl.com">contact@buidl.com </a>
            </p>

          </div>
        </div>
      </footer>
      <div className="bottom">
        © 2024 by BUIDL. All rights reserved!
      </div>
    </>
  );
};

export default Footer;

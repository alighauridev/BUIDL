import React from "react";
import { partners } from "../assests/data";
import '../scss/partner.scss'
const Partnered = () => {
  return (
    <>
      <section id="partner">
        <div className="heading">
          <h2>Find Us On!</h2>
        </div>

        <div className="container">
          {
            partners.map((item, index) => {
              return (
                <div className="img" style={{ cursor: 'pointer' }}>
                  <img src={item.src} alt="" />
                </div>
              )
            })
          }

        </div>
      </section>
    </>
  );
};

export default Partnered;

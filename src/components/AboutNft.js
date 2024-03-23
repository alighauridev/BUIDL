import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/aboutnft.scss";
// import img from "./layer2.png";

import Marquee from "react-fast-marquee";
const AboutNft = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Marquee>
        <h2>     $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;
          $BUIDL&nbsp;&nbsp;</h2>

      </Marquee>
      <section id="about" className="about">
        <div className="container">
          <div className="about-content one">
            <div className="about-img">
              <img
                src={"https://www.trumpbull.lol/assets/image%2012-DfmgqL7e.png"}
                alt=""
              />
            </div>
            <div className="about-h">

              <h3>About Heading </h3>

              <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, vel nobis dolor eum dicta nisi dolorem saepe placeat, corrupti rem exercitationem tempore repudiandae qui accusamus hic quasi labore voluptate. Corrupti voluptatem ipsam accusantium, unde animi repudiandae sint possimus tenetur facere, amet, a maiores commodi reiciendis. Deleniti, reprehenderit. Sint, explicabo! Reiciendis sit cum at odio eum nulla accusamus nihil eligendi dolores. Deserunt, labore id, aspernatur voluptatem voluptatum assumenda odio sint repudiandae quaerat modi pariatur veniam voluptatibus placeat nobis dicta vero maxime voluptate error perferendis libero. Adipisci eos culpa earum nostrum harum enim molestiae possimus reprehenderit odit numquam consequatur quia, nobis quam.</p>





              <div className="join-btn">
                <a href="https://t.me/buidl" target="_blank">
                  <div className="btn">
                    <div className="text">Join Community!</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="about-content two">

            <div className="about-h">

              <h3>About Heading </h3>

              <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, vel nobis dolor eum dicta nisi dolorem saepe placeat, corrupti rem exercitationem tempore repudiandae qui accusamus hic quasi labore voluptate. Corrupti voluptatem ipsam accusantium, unde animi repudiandae sint possimus tenetur facere, amet, a maiores commodi reiciendis. Deleniti, reprehenderit. Sint, explicabo! Reiciendis sit cum at odio eum nulla accusamus nihil eligendi dolores. Deserunt, labore id, aspernatur voluptatem voluptatum assumenda odio sint repudiandae quaerat modi pariatur veniam voluptatibus placeat nobis dicta vero maxime voluptate error perferendis libero. Adipisci eos culpa earum nostrum harum enim molestiae possimus reprehenderit odit numquam consequatur quia, nobis quam.</p>




              <div className="join-btn">
                <a href="https://t.me/buidl" target="_blank">
                  <div className="btn">
                    <div className="text">Join Now</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="about-img">
              <img
                src={"https://www.trumpbull.lol/assets/image%2012-DfmgqL7e.png"}
                alt=""
              />
            </div>
          </div>

        </div>
      </section>
      <div style={{ position: "fixed" }} className="sidebtn">
        <div className="grid">

        </div>
      </div>
    </>
  );
};

export default AboutNft;

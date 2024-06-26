import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components


// import required modules

import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/team.scss";
import { team } from "../assests/data";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { FaPaperPlane } from 'react-icons/fa'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa'
gsap.registerPlugin(ScrollTrigger);
const Teams = ({ timeline, ease }) => {

  window.addEventListener("resize", () => {
    // sliderResponsive();
  });
  function iconMaker(ico) {
    if (ico === "Twitter") {
      return <AiOutlineTwitter />;
    } else if (ico === "Instagram") {
      return <AiFillInstagram />;
    } else if (ico === "Website") {
      return <BiGlobe />;
    } else if (ico === "Linkedin") {
      return <FaLinkedinIn />;
    }
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section id="team" className="team">
        <div className="roadmap-heading">

          <div className="road-h">
            <h2 className="heading"
              data-aos="zoom-out"
              data-aos-easing="ease-out">
              Our Holders
            </h2>
          </div>

        </div>
        <div className="container">

          <div className="team__grid">
            {team.map((item, index) => {
              return (
                <div key={index} className={"item"}>
                  <div className="img">
                    <img src={item.path} alt="" />
                    {/* <p>{item.desc}</p> */}


                  </div>
                  <div className="detail">
                    <div className="top">
                      <div className="detial-h">
                        <h4 className="name">{item.name}</h4>
                      </div>


                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* {window.innerWidth > 768 ? (
            <div className="team__grid">
              <Swiper
                spaceBetween={30}
                navigation={false}
                effect={"fade"}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                rewind={true}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                {team.map((ite, ind) => {
                  return (
                    <SwiperSlide>
                      <div key={ind} className={"item"}>
                        <div className="img">
                          <img src={ite.path} alt="" />
                        </div>
                        <div className="detail">
                          <div className="top">
                            <h2 className="name">{ite.name}</h2>
                            <h4>{ite.position}</h4>
                            <p>{ite.desc}</p>
                          </div>
                          <div className="icons">
                            {ite.social?.map((soc, iin) => {
                              return (
                                <a href={soc.link} target="_blank">
                                  {iconMaker(soc.name)}
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          ) : (
            <section className="team__grid">
              {team.map((ite, ind) => {
                return (
                  <div key={ind} className={"item"}>
                    <div className="img">
                      <img src={ite.path} alt="" />
                    </div>
                    <div className="detail">
                      <div className="top">
                        <h2 className="name">{ite.name}</h2>
                        <h4>{ite.position}</h4>
                        <p>{ite.desc}</p>
                      </div>
                      <div className="icons">
                        {ite.social?.map((soc, iin) => {
                          return (
                            <a href={soc.link} target="_blank">
                              {iconMaker(soc.name)}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          )} */}
        </div>
      </section>
    </>
  );
};

export default Teams;

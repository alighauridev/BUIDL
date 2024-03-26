import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/banner.scss";
import Navigation from "./Navigation";
import img1 from "../assests/Logo3-newwht.png";
import img2 from "../assests/Logo3.png";

const Banner = ({ timeline, ease }) => {
  const contractAddressRef = useRef(null);
  const [showImage, setShowImage] = useState(true);

  const handleCopy = () => {
    const contractAddress = contractAddressRef.current.textContent.trim();
    navigator.clipboard.writeText(contractAddress);
    alert("address copied!");
  };

  useEffect(() => {
    AOS.init({});
  }, []);

  useEffect(() => {
    // Start interval for toggling between images
    const interval = setInterval(() => {
      setShowImage((prevShowImage) => !prevShowImage);
    }, 500); // Change image every 1 second (1000 milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="banner">
        <Navigation timeline={timeline} ease={ease} />
        <div className="container">
          <div className="banner-h">
            <div className="banner-main-h">
              <h2>$BUIDL </h2>
            </div>
            <div className="banner-btn">
              <div className="btn-main">
                <a target="_blank" href="#">
                  <div>BUY NOW </div>
                </a>
              </div>
              <div className="btn-main">
                <a target="_blank" href="#">
                  <div>CHART </div>
                </a>
              </div>
            </div>
            <div className="contract">
              <span ref={contractAddressRef}>
                11111111111111111111111111111111111
              </span>
              <button onClick={handleCopy}>COPY</button>
            </div>
          </div>
          <div className="banner-img">
            {showImage ? (
              <img src={img1} alt="" />
            ) : (
              <img src={img2} alt="" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

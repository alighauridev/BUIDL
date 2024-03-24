import React, { useState, useEffect, useRef } from "react";
import "./scss/normalize.css";
import Banner from "./components/Banner";
// import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./scss/reset.css";
import AboutNft from "./components/AboutNft";
import Tokenomics from "./components/Tokenomics";
import Partnered from "./components/Partnered";
import Teams from "./components/Teams";
import News from "./components/News";
import Loader from "./components/Loader";
import gif from "./assests//trim.D4810438-C4A7-42BE-8A8F-F8020FBC130B-ezgif.com-video-to-gif-converter.gif"
import video from "./assests/WhatsApp Video 2024-03-25 at 1.04.44 AM.mp4"
// import bottom2 from "./components/companion-bg.2c17497b.jpg";
function App() {
  let [loading, setLoading] = useState(true);



  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <main>
            <main>
              <Banner />

              <AboutNft />
              {/* <Join /> */}
              {/* <Collection /> */}

              {/* <Roadmap /> */}
              <Tokenomics />
              {/* <Info /> */}
              {/* <Teams /> */}
              <div className="big_gif">
                <div className="con">
                  <div className="img">
                    <video src={video} muted autoPlay loop />
                    {/* <img src={gif} alt="" /> */}
                  </div>
                </div>

              </div>
              <News />
              <div className="footer_bg" style={{ position: 'relative' }}>
                <Partnered />

                <Footer />
              </div>
            </main>
          </main>
        </>
      )}

    </>
  );
}

export default App;

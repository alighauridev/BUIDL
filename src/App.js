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


// import bottom2 from "./components/companion-bg.2c17497b.jpg";
function App() {
  let [loading, setLoading] = useState(true);



  return (
    <>
      <main>
        <Banner />

        <AboutNft />
        {/* <Join /> */}
        {/* <Collection /> */}

        {/* <Roadmap /> */}
        <Tokenomics />
        {/* <Info /> */}
        <Teams />
        <div className="footer_bg" style={{ position: 'relative' }}>
          <Partnered />

          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";

import logo from "../assests/Logo3-newwht.png"
import "../scss/loader.scss";
import img1 from "../assests/3.png"
const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setLoading(false);
          return 0;
        }
        const diff = Math.random() * 80;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="loader">
      <img src={logo} style={{ maxWidth: '300px' }} className="loader__logo" alt="" />

    </section>
  );
};
export default Loader;

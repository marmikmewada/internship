import React, { useState, useEffect } from "react";
import "./styles/Home.css";
import { MdOutlineNetworkCell } from "react-icons/md";
import { MdNetworkWifi } from "react-icons/md";
import { IoBatteryFullOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoArrowUp } from "react-icons/io5";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 5000); // Update interval (1 minute)

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  // Use formattedTime directly without useCallback
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className="Home">
      <header className="Home-header">
        <div className="header-background"></div>
        <div className="mobile-topbar">
          <div className="time">{formattedTime}</div>{" "}
          {/* Display the time directly */}
          <div className="utils">
            <MdOutlineNetworkCell />
            <MdNetworkWifi />
            <IoBatteryFullOutline />
          </div>
        </div>
        {/* mobiletopbar ends  */}
        <div className="profile">
          <div className="pfp"></div>
          <div className="profile-details">
            <p>Ayush Sharma</p>
            <p>+91-9925081704</p>
          </div>
          <div className="button">
            <button>
              USD <MdOutlineKeyboardArrowDown />
            </button>
          </div>
        </div>
        {/* profile ends  */}
        <div className="portfolio">
          <div className="data">
            <p>Portfolio</p>
            <h3>$20,000</h3>
          </div>
          <div className="chart">
            <IoArrowUp />
            <div className="graph"></div>
          </div>
        </div>
        {/* portfolio ends  */}
      </header>
      <div className="content">
        <div className="carousel">

        </div>
        {/* carousel ends  */}
        <div className="content-utils">

        </div>
        {/* content utils ends  */}
        <div className="content-portfolio">
            
        </div>
      </div>
      {/* content ends  */}
    </div>
    // component ends 
  );
};

export default Home;

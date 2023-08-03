import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgPic from "../images/Hero.jpg";
import styles from "./hero.css";

const Hero = () => {
  return (
    <div className="d-flex flex-column" style={{ height: "600px" }}>
      <div className="p-5 text-center bg-image d-flex align-items-end" style={{ backgroundImage: `url(${bgPic})`, flex: "1", backgroundSize: "cover", backgroundPosition: "left", backgroundRepeat: "no-repeat" }}>
        <div className="p-3" style={{ width: "100%" }}>
          <h1 className={styles.h1}>Bringing Ice Creamy Happiness To The World!</h1>
          <form className="d-flex justify-content-center mt-3" role="search">
            <input className="form-control-lg" type="search" aria-label="Search" placeholder="Give us your e-mail and join our mailer" style={{ width: "500px", height: "50px", border: "0", borderRadius: "0", outline: "none" }} />
            <button className={styles.btn} style={{ width: "200px", color: "#ffffff", backgroundColor: "#e18ed4", borderRadius: "0" }} type="submit">
              GO!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;

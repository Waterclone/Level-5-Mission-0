import React from "react";
import Logo from "../images/logo.png";

export default function Footer() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="pt-5 pb-3">
        <img width="20" src={Logo} alt="Logo" />
        <a className="footer px-2" style={{ fontFamily: "Borel", fontSize: "14px", color: "#e18ed4", textDecoration: "none" }} href="#">
          © THE ICECREAM TRUCK LTD
        </a>
        <a className="facebook px-2" style={{ color: "#e18ed4" }} href="https://facebook.com">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a className="instagram px-2" style={{ color: "#e18ed4" }} href="https://instagram.com">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a className="twitter px-2" style={{ color: "#e18ed4" }} href="https://twitter.com">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

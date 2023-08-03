import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cards.css";
import orangechocchip from "../images/orangechocchip.png";
import boysenberry from "../images/boysenberry.png";
import chocolate from "../images/chocolate.png";
import cookiesncream from "../images/cookiesandcream.png";
import goldrush from "../images/goldrush.png";
import hokeypokey from "../images/hokeypokey.png";
import mintchoc from "../images/mintchocchip.png";
import rainbow from "../images/rainbow.png";
import vanilla from "../images/vanilla.png";

const Cards = () => {
  const topFlavours = [
    {
      imgSrc: `${goldrush}`,
      title: "Gold Rush",
      content: "Card 1 Content",
    },
    {
      imgSrc: `${mintchoc}`,
      title: "Mint Choc",
      content: "Card 2 Content",
    },
    {
      imgSrc: `${rainbow}`,
      title: "Rainbow",
      content: "Card 2 Content",
    },
  ];

  const classics = [
    {
      imgSrc: `${vanilla}`,
      title: "Vanilla",
      content: "Vanilla",
    },
    {
      imgSrc: `${hokeypokey}`,
      title: "Hokey Pokey",
      content: "Hokey Pokey",
    },
    {
      imgSrc: `${chocolate}`,
      title: "Chocolate",
      content: "Chocolate",
    },
    {
      imgSrc: `${cookiesncream}`,
      title: "Cookies 'n Cream",
      content: "Card 1 Content",
    },
    {
      imgSrc: `${orangechocchip}`,
      title: "Orange Chocolate Chip",
      content: "Card 2 Content",
    },
    {
      imgSrc: `${boysenberry}`,
      title: "Boysenberry",
      content: "Card 2 Content",
    },
  ];

  return (
    <div>
      <h2 className="pt-4 d-flex justify-content-center">TOP FLAVOURS</h2>
      <div className="container">
        <div className="row">
          {topFlavours.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card card-hover" style={{ border: "none", boxShadow: "3px 3px 10px #e18ed4" }}>
                <img src={card.imgSrc} className="card-img-top" alt={`Card ${index + 1}`} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="pt-4">CLASSICS</h2>
      <div className="container">
        <div className="row">
          {classics.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card card-hover" style={{ border: "none", boxShadow: "3px 3px 10px #e18ed4" }}>
                <img src={card.imgSrc} className="card-img-top" alt={`Card ${index + 1}`} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  {/* <p className="card-text">{card.content}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

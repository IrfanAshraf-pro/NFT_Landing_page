import React from "react";
import HeroImg from "../../../assests/heroimg.png";
import { monkeyData } from "../../../data";
import MonkeyCard from "./MonkeyCard";
const HeroCard = () => {
  return (
    <div className="text-white">
      <div className="hero__card__bg">
        <img src={HeroImg} className="img-fluid" />
        <div className="d-flex flex-column gap-4 mt-3 ">
          <div className="d-flex justify-content-between">
            <h4 className="text-14">Monkey Apes</h4>
            <div className="" style={{width:'90px'}}>
              <div className="monkey__container">
                <MonkeyCard />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex  flex-column">
              <p className="monkeycard__footer__title">Current Bid</p>
              <p className="monkeycard__footer__subtitle">0.45 ETH</p>
            </div>
            <div className="d-flex  flex-column">
              <p className="monkeycard__footer__title">Current Bid</p>
              <p className="monkeycard__footer__subtitle">900 Authors</p>
            </div>
            <div className="d-flex  flex-column">
              <p className="monkeycard__footer__title">Ending In</p>
              <p className="monkeycard__footer__subtitle">10h 43m 26s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

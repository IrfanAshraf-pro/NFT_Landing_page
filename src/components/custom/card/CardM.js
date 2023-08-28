import React from "react";
import HeroImg from "../../../assests/heroimg.png";
import Avatar from '../../../assests/avatar.png'
import { monkeyData } from "../../../data";
import MonkeyCard from "./MonkeyCard";
const CardM = ({item}) => {
  return (
    <div className="text-white mb-3">
      <div className="hero__card__bg mx-auto">
        <img src={item.image} className="img-fluid img__card" />
        <div className="d-flex flex-column gap-2 mt-3 ">
          <div className="d-flex justify-content-between">
           <div>
           <h4 className="text-14">Monkey Apes</h4>
            <p>Created By <span>{item.author}</span></p>
           </div>
            <div className="">
              <div className="monkey__container w-100">
                <img src={Avatar } className="img-fluid"/>
              </div> 
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex  flex-column">
              <p className="monkeycard__footer__title">Current Bid</p>
              <p className="monkeycard__footer__subtitle">0.45 ETH</p>
            </div>
            <div className="d-flex flex-column">
              <p className="monkeycard__footer__title">Ending In</p>
              <p className="monkeycard__footer__subtitle">10h 43m 26s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardM;

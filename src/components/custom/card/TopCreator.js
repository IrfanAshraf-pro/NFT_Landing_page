import React from "react";
import Creator1 from "../../../assests/creator1.png";
import { ThreeDots } from "react-bootstrap-icons";

const TopCreator = ({item}) => {
  return (
    <div className="top__creator__card mx-auto font__space__grotesk mb-3 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center justify-content-start">
        <img src={item.image} className="img-fluid" />
        <div className="d-flex flex-column ms-3">
          <span className="text-10">{item.name}</span>
          <span className="text-10 ">{item.price} eth</span>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <ThreeDots className="h2" />
      </div>
    </div>
  );
};

export default TopCreator;

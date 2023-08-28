import React from "react";
import NftLogo from "../../../assests/nft.png";

const CreatorCard = ({item}) => {
  return (
    <div className="creator__card__bg mb-3 text-center d-flex align-items-center justify-content-center flex-column gap-3 p-5">
      <img src={NftLogo} className="img-fluid" />
      <span className="text-20 font-weight-light">{item}</span>
      <div>
        <p className="text-12">Create your collection, Add social</p>
        <p className="text-12">links, profile & banner images, and</p>
        <p className="text-12">set a secondary sales fee</p>
      </div>
    </div>
  );
};

export default CreatorCard;

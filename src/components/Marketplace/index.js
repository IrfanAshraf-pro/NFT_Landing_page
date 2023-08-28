import React from "react";
import Tabs from "../custom/Tabs";
import { CardM } from "../custom";
import { Col, Row } from "react-bootstrap";
import { NFT_data } from "../../data";

const MarketPlace = () => {
  return (
    <div className="text-white">
      <div className="mb-5">
        <h5 className="marketplace__title text-center">NFT MARKETPLACE</h5>
        <h3 className="text-20 text-center">Super Hot Drops</h3>
      </div>
      <div className="my-5">
        <Tabs />
      </div>
      <div>
        <Row xs={1} sm={2} md={4} className="">
          {NFT_data.map((item, indx) => (
            <Col>
              <div className="mx-auto">
                <CardM item={item} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="my-3 d-flex align-items-center justify-content-center  w-100">
        <button className="marketplace__btn">View More</button>
      </div>
    </div>
  );
};

export default MarketPlace;

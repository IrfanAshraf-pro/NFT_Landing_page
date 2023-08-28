import React from "react";
import { CreatorCard } from "../custom";
import { Button, Col, Row } from "react-bootstrap";

const Creators = () => {
  const nftTitle = ["Create Artwork", "Upload", "Listing"];
  return (
    <div className="text-white my-5">
      <h2 className="marketplace__title font__space__grotesk text-center mb-4">
        Be An Nft Creator
      </h2>
      <h2 className="font__space__grotesk text-center mb-5">
        Create & Sell Your NFTs
      </h2>
      <Row xs={1} sm={2} md={3} className="">
        {nftTitle.map((item, index) => (
          <Col>
            <CreatorCard item={item} key={index} />
          </Col>
        ))}
      </Row>
      <div className="my-5 d-flex align-items-center justify-content-center gap-2 flex-column flex-md-row">
        <button className="btn__custom">Create Now</button>
        <Button variant="outline-danger" className="text-white border-white px-4 ">Watch Video</Button>
      </div>
    </div>
  );
};

export default Creators;

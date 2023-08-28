import React from "react";
import { HeroCard } from "../custom";
import { Col, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Row md={2} className="my-5">
      <Col
        className="text-white me-auto d-flex flex-column justify-content-between gap-4 gap-md-0"
        md={5}
      >
        <div>
          <h1 className="hero_heading">Discover, Sell & Collect Rare NFTs</h1>
          <p>
            Digital marketplace for crypto collections and non-fungible tokens
            (NFTs)
          </p>
          <button className="btn__custom font__space__grotesk">
            Discover Now
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h2>35k+</h2>
            <span className="text-14">Artworks</span>
          </div>
          <div>
            <h2>15k+</h2>
            <span className="text-14">Auctions</span>
          </div>
          <div>
            <h2>25k+</h2>
            <span className="text-14">Artists</span>
          </div>
        </div>
      </Col>
      <Col md={6} className=" d-flex align-items-center justify-content-end">
        <HeroCard />
      </Col>
    </Row>
  );
};

export default Hero;

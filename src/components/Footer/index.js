import React from "react";
import { Col, Row } from "react-bootstrap";
import Youtube from "../../assests/youtube.svg";
import Facebook from "../../assests/facebook.svg";
import Instagram from "../../assests/instagram.svg";
import Whatsapp from "../../assests/whatsapp.svg";

const Footer = () => {
  return (
    <div className="text-white mt-5 font__space__grotesk">
      <Row xs={1} sm={2} md={4}>
        <Col md={4} className="mx-md-auto">
          <h1 className="hero_heading">Sapphire</h1>
          <p className="text-20">
            Amazing NFTs marketplace, Authentic and unique digital creation.
          </p>
          <div className="d-flex align-items-center my-4 justify-content-between w-50">
            <img src={Whatsapp} />
            <img src={Youtube} />
            <img src={Instagram} />
            <img src={Facebook} />
          </div>
          <p className="text-secondary">
            Copyright 2022 sapphire, All right reserved.
          </p>
        </Col>
        <Col md={2} className="mx-md-auto">
          <h1 className="text-30">Marketplace</h1>
          <p className="text-14">Explore</p>
          <p className="text-14">NFTs</p>
          <p className="text-14">Collectibles</p>
          <p className="text-14">Virtual Reality</p>
        </Col>
        <Col md={2} className="mx-md-auto">
          <h1 className="text-30">Resources</h1>
          <p className="text-14">Help Center</p>
          <p className="text-14">Partners</p>
          <p className="text-14">Blog</p>
          <p className="text-14">Newsletter</p>
          <p  className="text-secondary mt-5">Privacy Policy</p>
        </Col>
        <Col md={2} className="mx-md-auto">
          <h1 className="text-30">Company</h1>
          <p className="text-14">About us</p>
          <p className="text-14">Careers</p>
          <p className="text-14">SUpport</p>
          <p className="text-14">Newsletter</p>
          <p className="text-secondary mt-5">Terms & Conditions</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

import React from "react";
import Coinbase from "../../assests/coinbase.png";
import Exodus from "../../assests/Exodus.png";
import Bitgo from "../../assests/bitgo.png";
import Trezor from "../../assests/Trezor.png";
import { Col, Row } from "react-bootstrap";
const Companies = () => {
  return (
    <Row className="my-5">
      <Col xs={1} sm={3} md={3} className="me-auto"></Col>
      <Col xs={5} sm={2}>
        <img src={Coinbase} className="" />
      </Col>
      <Col xs={6} sm={2}>
        <img src={Exodus} className="" />
      </Col>
      <Col xs={6} sm={2}>
        <img src={Bitgo} className="" />
      </Col>
      <Col
        xs={6}
        sm={2}
        className=" d-md-flex align-items-center justify-content-end"
      >
        <img src={Trezor} className="" />
      </Col>
    </Row>
  );
};

export default Companies;

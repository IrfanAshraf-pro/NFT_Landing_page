import React from "react";
import { TopCreator } from "../custom";
import { Row, Col, Button } from "react-bootstrap";
import { TopCreators_data } from "../../data";
const TopCreators = () => {
  return (
    <div className="text-white my-5">
      <h2 className="marketplace__title font__space__grotesk text-center mb-4">
        NFT Creators
      </h2>
      <h2 className="font__space__grotesk text-center mb-5">
        Top Creators of the week
      </h2>
      <Row xs={1} sm={2} md={3} className="">
        {TopCreators_data.map((item, index) => (
          <Col xs={12} sm={6} md={4}>
            <TopCreator item={item} key={index} />
          </Col>
        ))}
      </Row>
      <div className="col-sm-3 col-md-2 mx-auto mt-5 ">
      <Button variant="outline-danger" className="text-white w-100 border-white px-4 ">Watch Video</Button>

      </div>
    </div>
  );
};

export default TopCreators;

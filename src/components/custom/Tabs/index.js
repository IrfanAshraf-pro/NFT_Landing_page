import React from "react";
import Nav from "react-bootstrap/Nav";
import { Tabs,Tab } from "react-bootstrap";

const TabsE = () => {
  const TabData=[
    {
      title:'Music',
      content:''
    },
    {
      title:'Art',
      content:''
    },
    {
      title:'Sport',
      content:''
    },
    {
      title:'Photography',
      content:''
    },
    {
      title:'Virtual Reality',
      content:''
    },
    {
      title:'Videos',
      content:''
    },
    {
      title:'More',
      content:''
    },
  ]
  return (
    <div className="container mt-4 font__space__grotesk">
    <Tabs defaultActiveKey="art" variant="pills" id="tab-nft">
     {
      TabData.map((item)=>(
        <Tab eventKey={item.title} title={item.title} className="mb-2 mx-auto">
        {/* <p>Home Tab Content</p> */}
      </Tab>
      ))
     }
    </Tabs>
  </div>
  );
};

export default TabsE;

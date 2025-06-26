"use client";
import React from "react";
// import "./rvm-eco.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Overview from "@/components/tab-components/overview-component/Overview";
import TechnicalComponent from "@/components/tab-components/technical-component/TechnicalComponent";

ContactForm;

import {
  RvmEcoEvenOddImagesData,
  rvmEco,
  rvmEcoDetails,
  rvmEcoVideo,
} from "../../../../data/products/reverse-vending-machines/rvm-eco";
import Head from "next/head";
import ContactForm from "../../../../components/contact-us-form/ContactForm";
import ContactUsEmail from "../../../../components/contact-us-email/ContactUsEmail";
import WhatsAppButton from "@/components/WhatsAppButton"

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const page = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: "#FF7722",
    },
  });
  return (
    <>
      <Head>
        <title>Boost Recycling Efforts with RVM ECO Machines</title>
        <meta
          name="description"
          content="Explore the RVM Eco, featuring easy mobility and dual processing options to meet your unique recycling needs. Join the movement towards a greener future!"
        />
        <meta
          name="keywords"
          content="Endlos Innovative RVM: Compact, eco-friendly, and cost-effective, ideal for all sectors. Recycle plastic and aluminum containers effortlessly with RVM Eco RVM machines"
        />
      </Head>
      <div className="rvm-eco-product-container ">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="position-relative">
              <img
                src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_eco/RVM_eco_1440x678_2.jpg"
                alt="Product Image"
                className="w-100 h-50"
              />
              <div className="card-position">
                <div className=" p-4">
                  <h1 className="font-bold ">
                    <strong className=" m-0 p-0 fs-1">RVM ECO</strong>
                  </h1>
                </div>
              </div>
            </div>

            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="container"
              >
                <Tabs
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#FF7722",
                    },
                  }}
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <StyledTab label="Overview" {...a11yProps(0)} />
                  <StyledTab label="Technical Data" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Overview
                  productVideos={rvmEcoVideo}
                  Details={rvmEcoDetails}
                  EvenOddImagesData={RvmEcoEvenOddImagesData}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TechnicalComponent tableData={rvmEco} />
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
      {/* <WhatsAppButton /> */}
      {/* Render the WhatsApp button here */}
    </>
  );
};

export default page;

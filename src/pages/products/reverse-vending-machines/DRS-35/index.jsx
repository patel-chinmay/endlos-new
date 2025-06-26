"use client";
import React from "react";
// import "./drs-35.css";
import { AiOutlineRight } from "react-icons/ai";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Overview from "@/components/tab-components/overview-component/Overview";

import Equipment from "@/components/tab-components/equipment-component/Equipment";
import TechnicalComponent from "@/components/tab-components/technical-component/TechnicalComponent";
import { usePathname } from "next/navigation";
import ImageCardContainer from "@/components/page-components/image-card-container/ImageCardContainer";
import NewProductCarousel from "@/components/feature/product-carousel/NewProductCarousel";
import { FaSquare } from "react-icons/fa";
import ContactBrochure from "@/components/contact-brochure/ContactBrochure";
import {
  rvmDRS35Details,
  rvmDRS35EvenOddImageData,
  rvmDRS35Video,
  rvmDRSNEW35,
} from "../../../../data/products/reverse-vending-machines/rvm-drs35";
import Head from "next/head";
import ContactForm from "../../../../components/contact-us-form/ContactForm";
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
        <title> DRS-35 Reverse Vending Machines Technology Revolution</title>
        <meta
          name="description"
          content="The RVM DRS 35 is built by Endlos Innovation that offers a Reverse Vending Machine for Public Places that handles large volumes of refundable containers,"
        />
        <meta
          name="keywords"
          content="Reverse Vending Machine for Public Places"
        />
      </Head>
      <div className="final-product-page-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative">
              <img
                src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_DRS_35/RVM_DRS_35_1440x678.jpg"
                alt="Product Image"
                className="w-100 h-50"
              />
              <div className="card-position">
                <div className=" p-4">
                  <h1 className="font-bold ">
                    <strong className=" m-0 p-0">RVM DRS 35</strong>
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
                  productVideos={rvmDRS35Video}
                  Details={rvmDRS35Details}
                  EvenOddImagesData={rvmDRS35EvenOddImageData}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TechnicalComponent tableData={rvmDRSNEW35} />
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-2">
        <ContactForm />
      </div>
      {/* <WhatsAppButton /> */}
      {/* Render the WhatsApp button here */}
    </>
  );
};

export default page;

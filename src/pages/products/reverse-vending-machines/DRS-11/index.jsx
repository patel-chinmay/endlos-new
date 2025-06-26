"use client";
import React from "react";
// import "./drs-11.css";
import {
  AiOutlineRight,
  AiOutlineDownload,
  AiOutlineRead,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Overview from "@/components/tab-components/overview-component/Overview";

import Equipment from "@/components/tab-components/equipment-component/Equipment";
import TechnicalComponent from "@/components/tab-components/technical-component/TechnicalComponent";
import { usePathname } from "next/navigation";
import ImageCardContainer from "@/components/page-components/image-card-container/ImageCardContainer";
import NewProductCarousel from "@/components/feature/product-carousel/NewProductCarousel";
import { FaSquare } from "react-icons/fa";

import ContactBrochure from "@/components/contact-brochure/ContactBrochure";
import {
  rvmDRS11,
  rvmDRS11Details,
  rvmDRS11EvenOddImageData,
  rvmDRS11Video,
} from "../../../../data/products/reverse-vending-machines/rvm-drs11";
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
  const path = usePathname();
  const splittedPath = path.split("/");
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
        <title>DRS -11 Recycling Solutions for Reverse Vending Machines</title>

        <meta
          name="description"
          content="RVM DRS 11 is a Reverse Vending Machine provided by Endlos Innovation that offers a convenient solution for the disposal of refundable containers."
        />
        <meta name="keywords" content="Reverse Vending Machine" />
      </Head>
      <div className="final-product-page-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative">
              <img
                src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_pro/RVM_prem_1440x678_5.jpg"
                alt="Product Image"
                className="w-100 h-50"
              />
              <div className="card-position">
                <div className=" p-4">
                  <h1 className="font-bold ">
                    <strong className=" m-0 p-0">RVM DRS 11</strong>
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
                  productVideos={rvmDRS11Video}
                  Details={rvmDRS11Details}
                  EvenOddImagesData={rvmDRS11EvenOddImageData}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TechnicalComponent tableData={rvmDRS11} />
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

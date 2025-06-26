"use client";
import React from "react";
// import "./rvm-premium.css";
import { AiOutlineRight } from "react-icons/ai";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Overview from "@/components/tab-components/overview-component/Overview";
import TechnicalComponent from "@/components/tab-components/technical-component/TechnicalComponent";
import { usePathname } from "next/navigation";

import {
  RvmPremiumEvenOddImagesData,
  rvmPremium,
  rvmPremiumDetails,
  rvmPremiumVideo,
} from "../../../../data/products/reverse-vending-machines/rvm-premium";
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
        <title>Easy Recycling Solutions with RVM Premium Machines</title>
        <meta
          name="description"
          content="Revolutionize recycling with RVM Premium. Earn rewards for returning bottles and cans. Take action for a cleaner future start your journey today!"
        />
        <meta
          name="keywords"
          content="RVM Premium is a high-end, sophisticated reverse vending machine in India that provides upmarket establishments with an unparalleled recycling experience."
        />
      </Head>
      <div className="final-product-page-container">
        <div className="row m-0 p-0">
          <div className="col-lg-12 ">
            <div className="position-relative">
              <img
                src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_premium/RVM_premium_1440x678_3.jpg"
                alt="Product Image"
                className="w-100 h-50"
              />
              <div className="card-position">
                <div className=" p-sm-4">
                  <h1 className="font-bold ">
                    <strong className=" m-0 p-0 fs-1  pl-5">RVM PREMIUM</strong>
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
                  productVideos={rvmPremiumVideo}
                  Details={rvmPremiumDetails}
                  EvenOddImagesData={RvmPremiumEvenOddImagesData}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TechnicalComponent tableData={rvmPremium} />
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

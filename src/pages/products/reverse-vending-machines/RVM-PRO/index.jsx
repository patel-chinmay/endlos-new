"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Overview from "@/components/tab-components/overview-component/Overview";
import TechnicalComponent from "@/components/tab-components/technical-component/TechnicalComponent";
import { usePathname } from "next/navigation";
import {
  RvmProEvenOddImagesData,
  rvmPro,
  rvmProDetails,
  rvmProVideo,
} from "../../../../data/products/reverse-vending-machines/rvm-pro";
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
        <title> Improve Recycling with RVM PRO Reverse Vending Machines.</title>
        <meta
          name="description"
          content="Upgrade your recycling game with the RVM Pro! This advanced Reverse Vending Machine featuring anti-jamming technology and a bin-full notification system."
        />
        <meta
          name="keywords"
          content="RVM Pro is a reverse vending machine designed by Endlos Innovative for Non-Deposit Return Scheme that can accept empty plastic and metal containers. reverse vending machine  "
        />
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
                    <strong className=" m-0 p-0">RVM PRO</strong>
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
                  productVideos={rvmProVideo}
                  Details={rvmProDetails}
                  EvenOddImagesData={RvmProEvenOddImagesData}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TechnicalComponent tableData={rvmPro} />
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-2">
        <ContactForm />
      </div>
    </>
  );
};

export default page;

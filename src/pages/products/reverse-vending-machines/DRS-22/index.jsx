"use client";
import React from "react";
// import "./drs-22.css";
import { AiOutlineRight } from "react-icons/ai";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Overview from "@/components/tab-components/overview-component/Overview";
import TechnicalComponent from "@/components/tab-components/technical-component/TechnicalComponent";
import { usePathname } from "next/navigation";
import ContactBrochure from "@/components/contact-brochure/ContactBrochure";
import {
  rvmDRS22,
  rvmDRS22Details,
  rvmDRS22EvenOddImageData,
  rvmDRS22Video,
} from "../../../../data/products/reverse-vending-machines/rvm-drs22";
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
        <title>RVM Machine where DRS-22 Transform Waste into Resources</title>
        <meta
          name="description"
          content="Get a unique RVM machine with an increased storage capacity. Endlos Innovative offers RMS DRS 22  for accepting plastic, aluminum & glass containers "
        />
        <meta name="keywords" content="RVM machine" />
      </Head>
      <div className="final-product-page-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative">
              <img
                src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_DRS_22/RVM_DRS_22_1440x678.jpg"
                alt="Product Image"
                className="w-100"
              />
              <div className="card-position">
                <div className=" p-4">
                  <h1 className="font-bold ">
                    <strong className=" m-0 p-0">RVM DRS 22</strong>
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
                  productVideos={rvmDRS22Video}
                  Details={rvmDRS22Details}
                  EvenOddImagesData={rvmDRS22EvenOddImageData}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TechnicalComponent tableData={rvmDRS22} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <TechnicalComponent />
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

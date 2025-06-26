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
  owc1000Details,
  owc1000EvenOddImageData,
  owc1000TechnicalData,
} from "@/data/products/organic-waste-composter/owc1000EvenOddImageData";
import Head from "next/head";
import ContactForm from "../../../../components/contact-us-form/ContactForm";

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
        <title>END OWC 1000: The Role of Organic Waste Composters</title>
        <meta
          name="description"
          content="Check out END OWC 1000 by Endlos Innovative a high-capacity organic waste composter that converts organic waste into nutrient-rich compost."
        />
        <meta name="keywords" content="organic waste composter" />
      </Head>
      <div className="final-product-page-container">
        <div className="row">
          <div className="">
            <div className="position-relative">
              <img
                src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/owc/OWC_1000/OWC_1000_1440x678.jpg"
                alt="Product Image"
                className="w-100 h-50"
              />
              <div className="card-position">
                <div className=" p-4">
                  <h1 className="font-bold ">
                    <strong className=" m-0 p-0">END OWC 1000</strong>
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
                  Details={owc1000Details}
                  EvenOddImagesData={owc1000EvenOddImageData}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TechnicalComponent tableData={owc1000TechnicalData} />
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
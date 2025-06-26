"use client";
import React from "react";
// import "./mask-vending-machine.css";
import { AiOutlineRight } from "react-icons/ai";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Overview from "@/components/tab-components/overview-component/Overview";

import TechnicalComponent from "@/components/tab-components/technical-component/TechnicalComponent";
import { usePathname } from "next/navigation";
import ContactBrochure from "../../../../components/contact-brochure/ContactBrochure";

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
      <div className="final-product-page-container">
        <div className="d-flex align-items-center gap-2 flex-wrap px-5 py-5">
          <div className="d-flex justify-between align-items-center">
            <div>Home</div>{" "}
            <div>
              <AiOutlineRight />
            </div>
          </div>
          <div className="d-flex justify-between align-items-center">
            <div>Products</div>{" "}
            <div>
              <AiOutlineRight />
            </div>
          </div>
          <div className="d-flex justify-between align-items-center">
            <div>Custom Vending Machine</div>{" "}
            <div>
              <AiOutlineRight />
            </div>
          </div>
          <div className="d-flex justify-between align-items-center">
            <div>Mask Vending Machine</div>{" "}
            <div>
              <AiOutlineRight />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 py-5">
            <div className="position-relative">
              <img
                src="https://www.trumpf.com/filestorage/TRUMPF_Processed/_processed_/1/1/csm_TruLaser-3030-L20-product-picture_071755114c_37d7b79484.jpg"
                alt="Product Image"
                className="img-fluid"
              />
              <div className="card-position">
                <div className=" p-4">
                  <strong className=" m-0 p-0 fs-2">
                    Mask Vending Machine
                  </strong>
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
                <Overview />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TechnicalComponent />
              </TabPanel>
            </Box>
          </div>

          <ContactBrochure />
        </div>
      </div>
    </>
  );
};

export default page;

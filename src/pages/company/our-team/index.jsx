// "use client";
// import React, { useEffect, useState } from "react";
// // import "./our-teams.css";
// import Image from "next/image";
// import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
// import { ImMail4 } from "react-icons/im";
// import { Divider } from "@mui/material";
// import OurTeam from "@/components/our-team-container/OurTeam";
// import { OurTeamMembers } from "@/data/our-team";
// import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";

// const page = () => {
//   const [position, setPosition] = useState(0);
//   const [visible, setVisible] = useState(true);
//   useEffect(() => {
//     const handleScroll = () => {
//       let moving = scrollY;

//       setVisible(position > moving);
//       setPosition(moving);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   });
//   const cls = visible ? "visible-page" : "hidden-page";
//   return (
//     <>
//       <div
//         className="bg-image d-flex align-items-center"
//         style={{
//           backgroundImage: `url('https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/other/our-team.png')`,
//         }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h1 className="text-color font-weight-bold fs-1">Our Team</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="row">
//         <div className="col-sm-10 offset-sm-1"></div>
//       </div> */}
//       <div className="row">
//         <div className="col-sm-12">
//           <div className="container pt-5 responsive-container  px-md-5">
//             <div className="d-flex align-items-center gap-2 flex-wrap">
//               <div className="d-flex justify-between align-items-center">
//                 <div>Home</div>{" "}
//                 <div>
//                   <AiOutlineRight />
//                 </div>
//               </div>
//               <div className="d-flex justify-between align-items-center">
//                 <div>Company</div>{" "}
//                 <div>
//                   <AiOutlineRight />
//                 </div>
//               </div>
//               <div className="d-flex justify-between align-items-center">
//                 <div>Managing Board</div>{" "}
//                 <div>
//                   <AiOutlineRight />
//                 </div>
//               </div>
//             </div>
//             <div className="container my-3 py-md-3">
//               <p className="lead text-center text-dark fw-bold">
//                 Managing Board of Endlos
//               </p>
//             </div>
//             <div className="row ">
//               <OurTeam team={OurTeamMembers} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <ContactUsEmail />
//     </>
//   );
// };

// export default page;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { OurTeamMembers } from "@/data/our-team";
import OurTeam from "@/components/our-team-container/OurTeam";
import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";
import Head from "next/head";

const Page = () => {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible-page" : "hidden-page";

  return (
    <>
      <Head>
        <title>Get to Know Our Talented Endlos Team Members</title>

        <link rel="canonical" href="https://www.endlos.in/company/our-team/" />

        <meta
          name="description"
          content="Meet the leadership team at Endlos Innovations. Discover the expertise of our co-founders and see how we can help tackle your biggest challenges."
        />

        <meta
          name="keywords"
          content="Endlos team, leadership, co-founders, Endlos Innovations, team members, company leaders, management, recycling tech experts"
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="Endlos Innovations Pvt. Ltd." />
        <meta name="publisher" content="Endlos Innovations Pvt. Ltd." />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0b3d91" />

        <meta
          property="og:title"
          content="Get to Know Our Talented Endlos Team Members"
        />
        <meta
          property="og:description"
          content="Meet the leadership team at Endlos Innovations! Explore their expertise and how they contribute to solving environmental challenges."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.endlos.in/company/our-team/"
        />
        <meta property="og:site_name" content="Endlos Innovations" />
        <meta
          property="og:image"
          content="https://www.endlos.in/assets/images/our-team.jpg"
        />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Get to Know Our Talented Endlos Team Members"
        />
        <meta
          name="twitter:description"
          content="Meet the minds behind Endlos Innovations. Discover the skilled team leading the charge in recycling innovation."
        />
        <meta
          name="twitter:image"
          content="https://www.endlos.in/assets/images/our-team.jpg"
        />
        <meta
          name="twitter:url"
          content="https://www.endlos.in/company/our-team/"
        />
      </Head>

      <div
        className="bg-image d-flex align-items-center"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/other/our-team.png')`,
        }}
      >
        <div className="container text-center">
          <h1 className="text-color font-weight-bold fs-1">Our Team</h1>
        </div>
      </div>

      <div className="container pt-5 px-md-5">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <div className="d-flex justify-between align-items-center">
            <div>Home</div>{" "}
            <div>
              <AiOutlineRight />
            </div>
          </div>
          <div className="d-flex justify-between align-items-center">
            <div>Company</div>{" "}
            <div>
              <AiOutlineRight />
            </div>
          </div>
          <div className="d-flex justify-between align-items-center">
            <div>Managing Board</div>{" "}
            <div>
              <AiOutlineRight />
            </div>
          </div>
        </div>

        <div className="container my-3 py-md-3">
          <p className="lead text-center text-dark fw-bold">
            Managing Board of Endlos
          </p>
        </div>
        <div className="row my-md-5 pb-md-5">
          <OurTeam team={OurTeamMembers} />
        </div>
      </div>

      <ContactUsEmail />
    </>
  );
};

export default Page;

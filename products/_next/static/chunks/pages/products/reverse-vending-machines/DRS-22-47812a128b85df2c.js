(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [947],
  {
    6422: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/reverse-vending-machines/DRS-22",
        function () {
          return t(535);
        },
      ]);
    },
    9185: function (e, a, t) {
      "use strict";
      var n = t(5893);
      t(7294);
      var i = t(3750);
      a.Z = () =>
        (0, n.jsx)("div", {
          className: "col-lg-3 mt-4 mt-lg-0",
          children: (0, n.jsxs)("div", {
            className: "p-5",
            children: [
              (0, n.jsx)("p", { className: "fs-4", children: " Contact Us" }),
              (0, n.jsx)("div", {
                className:
                  "d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center",
                children: (0, n.jsx)("hr", { style: { width: "500px" } }),
              }),
              (0, n.jsxs)("p", {
                children: [
                  " ",
                  "Phone",
                  " ",
                  (0, n.jsx)("a", {
                    href: "https://api.whatsapp.com/send?phone=919327777854",
                    target: "_blank",
                    children: "+91 9327777854",
                  }),
                ],
              }),
              (0, n.jsxs)("span", {
                className: "text-success pointer",
                children: [
                  "Email ",
                  (0, n.jsx)(i.lzl, {}),
                  " ",
                  (0, n.jsx)("a", {
                    href: "mailto:info@endlos.in",
                    children: "info@endlos.in",
                  }),
                ],
              }),
            ],
          }),
        });
    },
    4457: function (e, a, t) {
      "use strict";
      var n = t(5893),
        i = t(7294),
        s = t(4876),
        o = t(9946),
        l = t(9033),
        r = t(1903),
        c = t(6886),
        d = t(913),
        u = t(7312),
        m = t(6195),
        v = t(3599),
        h = t(3457),
        g = t(9368),
        p = t(476),
        y = t(6501);
      a.Z = () => {
        let [e, a] = (0, i.useState)({
            first_name: "",
            last_name: "",
            company: "",
            interested: "",
            country: "",
            city: "",
            email: "",
            message: "",
            phone_number: "",
            agreed: !1,
          }),
          t = (t) => {
            let { name: n, value: i } = t.target;
            a({ ...e, [n]: i });
          },
          f = async (e) => {},
          x = () => {
            try {
              let t = Object.values(e)
                .filter((e) => "string" == typeof e)
                .every((e) => "" !== e.trim());
              if (e.agreed) {
                if (t) {
                  f(e), y.ZP.success("Thanks For Choosing us!!");
                  let t = Object.fromEntries(
                    Object.entries(e).map((e) => {
                      let [a] = e;
                      return [a, ""];
                    })
                  );
                  (t.agreed = !1), a(t);
                } else throw Error("Please fill in all fields");
              } else throw Error("Please agree to the terms and conditions");
            } catch (e) {
              y.ZP.error(
                e.message ? e.message : "Something went wrong pls retry"
              );
            }
          };
        return (0, n.jsxs)("div", {
          className: "contact-us-section pt-5",
          children: [
            (0, n.jsx)("h3", {
              className: "text-center opacity-75",
              children: "Contact Us",
            }),
            (0, n.jsxs)("div", {
              className: "container px-lg-5",
              children: [
                (0, n.jsxs)(s.Z, {
                  "aria-labelledby": "demo-controlled-radio-buttons-group",
                  name: "controlled-radio-buttons-group",
                  value: e.gender,
                  onChange: t,
                  className: "d-flex flex-row flex-lg-row ",
                  children: [
                    (0, n.jsx)(o.Z, {
                      name: "gender",
                      value: "mr.",
                      control: (0, n.jsx)(l.Z, {}),
                      label: "Mr.",
                    }),
                    (0, n.jsx)(o.Z, {
                      name: "gender",
                      value: "ms",
                      control: (0, n.jsx)(l.Z, {}),
                      label: "Ms.",
                    }),
                    (0, n.jsx)(o.Z, {
                      name: "gender",
                      value: "mrs",
                      control: (0, n.jsx)(l.Z, {}),
                      label: "Mrs.",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "form-grid my-4",
                  children: [
                    (0, n.jsx)(r.Z, {
                      fullWidth: !0,
                      label: "First name",
                      name: "first_name",
                      value: e.first_name,
                      onChange: t,
                      variant: "filled",
                    }),
                    (0, n.jsx)(r.Z, {
                      fullWidth: !0,
                      value: e.last_name,
                      onChange: t,
                      label: "Last name",
                      name: "last_name",
                      variant: "filled",
                    }),
                    (0, n.jsx)(r.Z, {
                      value: e.company,
                      onChange: t,
                      name: "company",
                      fullWidth: !0,
                      label: "Company",
                      variant: "filled",
                    }),
                    (0, n.jsx)(r.Z, {
                      fullWidth: !0,
                      name: "city",
                      value: e.city,
                      onChange: t,
                      label: "City",
                      variant: "filled",
                    }),
                    (0, n.jsx)(r.Z, {
                      fullWidth: !0,
                      name: "country",
                      value: e.country,
                      onChange: t,
                      label: "Country",
                      variant: "filled",
                    }),
                    (0, n.jsx)(r.Z, {
                      fullWidth: !0,
                      label: "Email",
                      name: "email",
                      value: e.email,
                      onChange: t,
                      variant: "filled",
                    }),
                    (0, n.jsx)(c.ZP, {
                      container: !0,
                      children: (0, n.jsx)(c.ZP, {
                        container: !0,
                        spacing: 2,
                        children: (0, n.jsx)(c.ZP, {
                          item: !0,
                          xs: 12,
                          children: (0, n.jsx)(r.Z, {
                            fullWidth: !0,
                            value: e.phone_number,
                            name: "phone_number",
                            onChange: t,
                            label: "Phone",
                            variant: "filled",
                          }),
                        }),
                      }),
                    }),
                    (0, n.jsxs)(d.Z, {
                      variant: "filled",
                      children: [
                        (0, n.jsx)(u.Z, {
                          id: "demo-simple-select-filled-label",
                          children: "I am Interested In Following Group",
                        }),
                        (0, n.jsxs)(m.Z, {
                          name: "interested",
                          value: e.interested,
                          onChange: t,
                          children: [
                            (0, n.jsx)(v.Z, { value: "RVM", children: "RVM" }),
                            (0, n.jsx)(v.Z, { value: "OWC", children: "OWC" }),
                            (0, n.jsx)(v.Z, {
                              value: "Other",
                              children: "Other Products and Services",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(c.ZP, {
                  item: !0,
                  sm: 6,
                  children: (0, n.jsx)(r.Z, {
                    name: "message",
                    value: e.message,
                    onChange: t,
                    fullWidth: !0,
                    multiline: !0,
                    label: "Your Enquiry",
                    InputProps: { rows: 10 },
                  }),
                }),
                (0, n.jsxs)(h.Z, {
                  className: "py-2",
                  children: [
                    (0, n.jsx)(o.Z, {
                      control: (0, n.jsx)(g.Z, {
                        name: "agreed",
                        checked: e.agreed,
                        onChange: () => a((e) => ({ ...e, agreed: !e.agreed })),
                      }),
                      label: "I Agree",
                    }),
                    (0, n.jsx)(p.Z, {
                      children:
                        "I hereby consent to the data collected above being processed in accordance with the Privacy Policy for processing my request. This consent may be withdrawn at any time with future effect.",
                    }),
                    (0, n.jsx)("strong", {
                      className: "my-2",
                      children: "Consent*",
                    }),
                  ],
                }),
                (0, n.jsx)("button", {
                  onClick: () => x(),
                  className: "form-btn rounded",
                  children: "Submit",
                }),
              ],
            }),
          ],
        });
      };
    },
    6167: function (e, a, t) {
      "use strict";
      var n = t(5893);
      t(7294);
      var i = t(1664),
        s = t.n(i);
      a.Z = (e) => {
        let { EvenOddImagesData: a } = e,
          t = (e) => {
            let { title: a, subtitle: t, images: i, link: o } = e;
            return (0, n.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, n.jsx)("div", {
                  className: "col-lg-6  ",
                  children: (0, n.jsx)("img", {
                    src: i,
                    alt: "Product Image",
                    className: "img-fluid  rounded ",
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "col-lg-6  ",
                  children: [
                    (0, n.jsx)("h2", { className: "fs-3", children: a }),
                    (0, n.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: t },
                    }),
                    o &&
                      (0, n.jsxs)(s(), {
                        href: o,
                        children: [
                          " ",
                          (0, n.jsx)("div", {
                            className: "btn btn-dark",
                            children: "To The Product",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          },
          i = (e) => {
            let { title: a, subtitle: t, images: i, link: o } = e;
            return (0, n.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, n.jsxs)("div", {
                  className: "col-lg-6   ",
                  children: [
                    (0, n.jsx)("p", { className: "fs-3 ", children: a }),
                    (0, n.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: t },
                    }),
                    o &&
                      (0, n.jsxs)(s(), {
                        href: o,
                        children: [
                          " ",
                          (0, n.jsx)("div", {
                            className: "btn btn-dark",
                            children: "To The Product",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "col-lg-6  pt-2 ",
                  children: (0, n.jsx)("img", {
                    src: i,
                    alt: "Product Image",
                    className: "img-fluid rounded",
                  }),
                }),
              ],
            });
          };
        return (0, n.jsx)("div", {
          className: "bg-white  py-3  ",
          children: (0, n.jsx)("div", {
            className: "row  container m-0 p-0 mx-auto ",
            children:
              a &&
              a.map((e) => {
                let { title: a, images: s, subtitle: o, link: l } = e;
                return "odd" === e.type
                  ? (0, n.jsx)(t, { title: a, subtitle: o, images: s, link: l })
                  : (0, n.jsx)(i, {
                      title: a,
                      subtitle: o,
                      images: s,
                      link: l,
                    });
              }),
          }),
        });
      };
    },
    3104: function (e, a, t) {
      "use strict";
      var n = t(5893);
      t(7294);
      var i = t(6066);
      a.Z = (e) => {
        let { textAlign: a, productVideo: t } = e;
        return (0, n.jsx)("div", {
          className: "px-4 ",
          children: (0, n.jsx)(i.Z, {
            dots: !0,
            dotsClass: "slick-dots my-custom-dots",
            infinite: !0,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            children:
              t &&
              (null == t
                ? void 0
                : t.map((e, a) =>
                    (0, n.jsx)(
                      "div",
                      {
                        children: (0, n.jsx)("video", {
                          src: e.video_src,
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          style: { height: "72vh", width: "100%" },
                        }),
                      },
                      a
                    )
                  )),
          }),
        });
      };
    },
    9386: function (e, a, t) {
      "use strict";
      var n = t(5893),
        i = t(6167),
        s = t(3104);
      a.Z = (e) => {
        let { EvenOddImagesData: a, Details: t, productVideos: o } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            t &&
              (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)("div", {
                  className: "text-center w-md-75 m-auto px-2 my-5 container",
                  children: (0, n.jsx)("p", {
                    className: "lead",
                    dangerouslySetInnerHTML: {
                      __html: null == t ? void 0 : t.description,
                    },
                  }),
                }),
              }),
            o &&
              (0, n.jsx)("div", {
                className: "mb-5 pb-4",
                children: (0, n.jsx)(s.Z, { productVideo: o }),
              }),
            a &&
              (0, n.jsxs)("div", {
                className: "bg-white",
                children: [
                  t &&
                    o &&
                    (0, n.jsxs)("div", {
                      className: "",
                      children: [
                        (0, n.jsx)("hr", { className: "mb-3" }),
                        (0, n.jsx)("h3", {
                          className: "text-center fw-bolder",
                          children: "Key Features",
                        }),
                        (0, n.jsx)("hr", { className: "" }),
                      ],
                    }),
                  (0, n.jsx)(i.Z, { EvenOddImagesData: a }),
                ],
              }),
          ],
        });
      };
    },
    4006: function (e, a, t) {
      "use strict";
      var n = t(5893);
      a.Z = (e) => {
        let { tableData: a } = e;
        return (0, n.jsx)("div", {
          className: " technical-container container my-5 mx-auto pb-3 px-sm-5",
          children: (0, n.jsx)("table", {
            className: "table   ",
            children: (0, n.jsx)("tbody", {
              className: "",
              children:
                a &&
                a.map((e, a) =>
                  (0, n.jsxs)(
                    "tr",
                    {
                      className: "".concat(
                        "secondary" === e.color ? "table-upper-color" : ""
                      ),
                      children: [
                        (0, n.jsx)("td", {
                          className: "".concat(
                            "bold" === e.type ? "fw-bold  ps-4 " : "  ps-5",
                            " "
                          ),
                          children: (0, n.jsx)("small", { children: e.key }),
                        }),
                        e.value
                          ? e.value.map((e, a) =>
                              (0, n.jsx)("td", { children: e.value1 }, a)
                            )
                          : (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)("td", { children: "\xa0" }),
                                (0, n.jsx)("td", { children: "\xa0" }),
                                (0, n.jsx)("td", { children: "\xa0" }),
                              ],
                            }),
                      ],
                    },
                    a
                  )
                ),
            }),
          }),
        });
      };
    },
    535: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return j;
          },
        });
      var n = t(5893),
        i = t(7294),
        s = t(1703),
        o = t(44),
        l = t(7357),
        r = t(6829),
        c = t(9386),
        d = t(4006),
        u = t(9332);
      t(9185);
      let m = [
          {
            title: "360 Degree Barcode Scanning",
            subtitle:
              "RVM DRS 22 is equipped with a cutting-edge 360-degree barcode scanner, which adeptly reads barcodes regardless of their angle or speed in normal use, ensuring seamless and rapid processing. It increases the hourly recycling rate resulting in quick operations with higher reliability.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/360-degree-sensor.jpg",
            type: "odd",
          },
          {
            title: "Fraud Detection System",
            subtitle:
              "Engineered with state of the art fraud detection technology, It is adept at identifying and eliminating any attempts to obtain vouchers without genuine container insertion. Leveraging the power of artificial intelligence, our solution acts as a solid defense against fraudulent activities.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_DRS_22/RVM_DRS_22_729x344_1.jpg",
            type: "even",
          },
          {
            title: "Dashboard for Data Analytics",
            subtitle:
              "Uncover recycling trends with our analytics dashboard which is crafted out of machine count, container data, user details, selected vouchers and many more for insightful waste management strategies. It can be integrated with third party APIs to redeem deposit balance.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_DRS_22/RVM_DRS_22_729x344.jpg",
            type: "odd",
          },
          {
            title: "Compaction",
            subtitle:
              "The Model also offers a choice between two different container processing options: Compactor and Shredder. It is mostly decided based on the setup of recycling facility in the region hence. With the ability to customize the machine's functionality, we ensure that your recycling solution aligns perfectly with your requirements.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/sharder.png",
            type: "even",
          },
          {
            title: "IoT Connected",
            subtitle:
              "RVM DRS 22, an IoT-connected marvel in which one can Gain complete control, operation, and maintenance capabilities through remote access. Seamlessly update the system by adding new barcodes to the admin dashboard; this adjustment promptly synchronizes across all deployed machines. Branch owners benefit from transparent insights, accessing detailed transaction logs. It streamlines management, enhances efficiency, and ensures up-to-date functionality across the board.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/iot-connected-drs35.png",
            type: "odd",
          },
          {
            title: "Anti Jamming Technology",
            subtitle:
              "Anti Jamming Technology is setting a new standard in recycling safety and minimum machine downtime. This innovative feature acts as a safeguard against potential damage arising due to intentional feeding of rigid items such as metal objects. Ensuring the safety of the internal mechanism, it guarantees secure and reliable operation. In the event of a jam, the system initiates an auto-reverse function, swiftly and autonomously resolving the jamming situation without the need for manual intervention.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/antijammingtechnology.png",
            type: "even",
          },
          {
            title: "Printer for voucher printing",
            subtitle:
              "An integrated voucher printer adds a valuable dimension to its capabilities. Post every transaction, it generates vouchers that includes a comprehensive overview of the cumulative data for that specific transaction. With this printer, the machine not only ensures an accurate record of user transactions but also contributes to the overall efficiency of waste management operations.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_DRS_22/RVM_DRS_22_729x344.jpg",
            type: "odd",
          },
          {
            title: "Preventive Maintenance System",
            subtitle:
              "Leveraging the extensive data we accumulate, we employ cutting-edge AI technology to establish a robust Preventive Maintenance System. This system proactively identifies patterns and anomalies in machine performance, enabling us to predict and address potential issues before they escalate. Through this innovative approach, we ensure optimal machine functionality, minimize downtime, and uphold a seamless recycling experience.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_DRS_22/RVM_DRS_22_729x344_3.jpg",
            type: "even",
          },
          {
            title: "Dual Separate Storage Bin ",
            subtitle:
              "The machine stores containers according to their material type after sorting, ensuring optimal treatment for recycling. With precision, it directs each material to its designated bin, enabling effective and specialized recycling processes. This upgraded version maximizes resource recovery, minimizing waste and contributing to a more sustainable recycling ecosystem.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_DRS_22/RVM_DRS_22_729x344.jpg",
            type: "odd",
          },
        ],
        v = {
          description:
            "RVM DRS 22 is unique with its robust sorting capabilities and increased storage capacity.. It’s designed for accepting Plastic, Aluminium and Glass containers for countries with Deposit Return Scheme or Container Deposit Law.",
          additional: [
            {
              title: "Deposit Return System Compliance",
              description:
                "The RVM DRS 22 is designed to meet the requirements of deposit return systems. It is equipped with advanced container recognition technologies to accurately identify and handle refundable containers, such as beverage bottles and cans, ensuring compliance with deposit return regulations.",
            },
            {
              title: "High-Volume Capacity",
              description:
                "The RVM DRS 22 is built to handle large volumes of refundable containers. It is designed for busy retail environments, recycling centers, and bottle return facilities where there is a significant flaw of deposit return containers. Its high-capacity storage ensures continuous operation without frequent requirement of emptying the bin.",
            },
            {
              title: "Advanced Container Recognition and Sorting",
              description:
                "Equipped with advanced recognition and sorting technology, the RVM DRS 22 can efficiently identify and sort a variety of refundable containers, including plastic beverage bottles, cans, and glass containers.It ensures accurate processing and reduces the risk of errors or contamination.",
            },
            {
              title: "Interactive Display",
              description:
                "It serves as a platform for dynamic advertisements, enabling effective commercialization through video content displayed on the screen. Moreover, it becomes a powerful tool for raising awareness about recycling and its significance.",
            },
            {
              title: "Real-Time Monitoring and Reporting",
              description:
                "The RVM DRS 22 is equipped with real-time monitoring and reporting capabilities, allowing operators to track usage, monitor collection levels, and analyze data on deposit return operations. This data-driven approach enables efficient management, timely maintenance, and informed decision-making.",
            },
            {
              title: "Integration Capabilities",
              description:
                "The RVM DRS 22 can be seamlessly integrated into existing systems, such as point-of-sale (POS) systems or recycling management platforms. This integration enables synchronized data exchange and streamlined operations, enhancing the overall efficiency of deposit return processes.",
            },
          ],
        },
        h = [
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/DRS-22/RVM_DRS_22_om.mp4",
            video_desc: "Energy-efficient process cooler",
          },
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/DRS-22/RVM_DRS_22_bin_video.mp4",
            video_desc: "Energy-efficient process cooler",
          },
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/DRS-22/RVM_DRS_22_full_video.mp4",
            video_desc: "Energy-efficient process cooler",
          },
        ],
        g = [
          { color: "secondary", type: "bold", key: "MEASUREMENTS", value: "" },
          {
            color: "secondary",
            key: "Dimensions (W x D x H in MM)",
            value: [
              { value1: "1500 x 1400 x 1800 MM" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "secondary",
            key: "INLET HEIGHT",
            value: [{ value1: "1350 mm" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "secondary",
            key: "FOOTPRINT AREA",
            value: [{ value1: "2.1 Sqm." }, { value1: "" }, { value1: "" }],
          },
          {
            color: "secondary",
            key: "WEIGHT",
            value: [{ value1: "700 Kg" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            type: "bold",
            key: "CONTAINER RECOGNITION",
            value: [{ value1: "" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "BARCODE SCANNER",
            value: [
              { value1: "360 Degree Barcode Scanner" },
              { value1: "" },
              { value1: "" },
            ],
          },
          ,
          {
            color: "",
            key: "DRS LOGO RECOGNITION",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          ,
          {
            color: "",
            key: "WEIGHT SENSOR",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          ,
          {
            color: "",
            key: "FRAUD DETECTION",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          ,
          {
            color: "",
            key: "RECOGNITION TECHNOLOGY",
            value: [
              { value1: "Shape Contour / AI" },
              { value1: "" },
              { value1: "" },
            ],
          },
          ,
          {
            color: "",
            key: "MATERIAL RECOGNITION",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            type: "bold",
            key: "MACHINE GENERAL CONFIGURATIONS",
            value: "",
          },
          {
            color: "",
            key: "CONTAINERS ACCEPTED",
            value: [
              { value1: "PET, ALU, GLASS (Any Two)" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "TOUCHSCREEN SIZE",
            value: [{ value1: '15.6" ' }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "AUDIO",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "LANGUAGE",
            value: [
              { value1: "English & Custom" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "INCENTIVE OPTIONS",
            value: [
              { value1: "DRS Receipt & Custom" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "MATERIAL SEGREGATION",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "Material Processing Mechanism",
            value: [{ value1: "Compactor" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "STORAGE BINS",
            value: [{ value1: "2" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "TOTAL STORAGE CAPACITY (MAX)",
            value: [
              { value1: "2000 Containers" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "COLOURS",
            value: [
              { value1: "Customize as per requirements" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "WHEELS",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "secondary",
            type: "bold",
            key: "POWER CONNECTION",
            value: "",
          },
          {
            color: "secondary",
            key: "POWER SUPPLY",
            value: [
              { value1: "400V AC – 3 PHASES, 50HZ, 16A" },
              { value1: "" },
              { value1: "" },
            ],
          },
          { color: "", type: "bold", key: "CONNECTIVITY", value: "" },
          {
            color: "",
            key: "CONNECTIVITY",
            value: [{ value1: "LAN, Wifi" }, { value1: "" }, { value1: "" }],
          },
          { color: "", type: "bold", key: "IOT FEATURES", value: "" },
          {
            color: "",
            key: "REALTIME OPERATIONAL INFORMATION",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "DETAILED ERROR NOTIFICATION",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "STORAGE BIN FULL NOTIFICATION WITH REAL-TIME STATUS",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "DETAILED TRANSACTION INFORMATION",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "REMOTE UPDATES",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "EASY INTEGRATION WITH 3RD PARTY APPLICATIONS VIA API",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "BUSINESS INTELLIGENCE FOR OPERATION MANAGEMENT",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "",
            value: [
              { value1: "Many More ..." },
              { value1: "" },
              { value1: "" },
            ],
          },
        ];
      var p = t(9527),
        y = t.n(p),
        f = t(4457);
      function x(e) {
        let { children: a, value: t, index: i, ...s } = e;
        return (0, n.jsx)("div", {
          role: "tabpanel",
          hidden: t !== i,
          id: "simple-tabpanel-".concat(i),
          "aria-labelledby": "simple-tab-".concat(i),
          ...s,
          children: t === i && (0, n.jsx)(l.Z, { children: a }),
        });
      }
      function b(e) {
        return {
          id: "simple-tab-".concat(e),
          "aria-controls": "simple-tabpanel-".concat(e),
        };
      }
      var j = () => {
        (0, u.usePathname)();
        let [e, a] = i.useState(0),
          t = (0, r.Z)(o.Z)({ "&.Mui-selected": { color: "#FF7722" } });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(y(), {
              children: [
                (0, n.jsx)("title", {
                  children:
                    "RVM Machine where DRS-22 Transform Waste into Resources",
                }),
                (0, n.jsx)("meta", {
                  name: "description",
                  content:
                    "Get a unique RVM machine with an increased storage capacity. Endlos Innovative offers RMS DRS 22  for accepting plastic, aluminum & glass containers ",
                }),
                (0, n.jsx)("meta", {
                  name: "keywords",
                  content: "RVM machine",
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "final-product-page-container",
              children: (0, n.jsx)("div", {
                className: "row",
                children: (0, n.jsxs)("div", {
                  className: "col-lg-12",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "position-relative",
                      children: [
                        (0, n.jsx)("img", {
                          src: "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_DRS_22/RVM_DRS_22_1440x678.jpg",
                          alt: "Product Image",
                          className: "w-100",
                        }),
                        (0, n.jsx)("div", {
                          className: "card-position",
                          children: (0, n.jsx)("div", {
                            className: " p-4",
                            children: (0, n.jsx)("h1", {
                              className: "font-bold ",
                              children: (0, n.jsx)("strong", {
                                className: " m-0 p-0",
                                children: "RVM DRS 22",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.Z, {
                      sx: { width: "100%" },
                      children: [
                        (0, n.jsx)(l.Z, {
                          sx: {
                            borderBottom: 1,
                            borderColor: "divider",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          children: (0, n.jsxs)(s.Z, {
                            TabIndicatorProps: {
                              style: { backgroundColor: "#FF7722" },
                            },
                            value: e,
                            onChange: (e, t) => {
                              a(t);
                            },
                            "aria-label": "basic tabs example",
                            children: [
                              (0, n.jsx)(t, { label: "Overview", ...b(0) }),
                              (0, n.jsx)(t, {
                                label: "Technical Data",
                                ...b(1),
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(x, {
                          value: e,
                          index: 0,
                          children: (0, n.jsx)(c.Z, {
                            productVideos: h,
                            Details: v,
                            EvenOddImagesData: m,
                          }),
                        }),
                        (0, n.jsx)(x, {
                          value: e,
                          index: 1,
                          children: (0, n.jsx)(d.Z, { tableData: g }),
                        }),
                        (0, n.jsx)(x, {
                          value: e,
                          index: 2,
                          children: (0, n.jsx)(d.Z, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, n.jsx)("div", {
              className: "mt-5 pt-2",
              children: (0, n.jsx)(f.Z, {}),
            }),
          ],
        });
      };
    },
    9527: function (e, a, t) {
      e.exports = t(2636);
    },
  },
  function (e) {
    e.O(0, [257, 886, 461, 774, 888, 179], function () {
      return e((e.s = 6422));
    }),
      (_N_E = e.O());
  },
]);

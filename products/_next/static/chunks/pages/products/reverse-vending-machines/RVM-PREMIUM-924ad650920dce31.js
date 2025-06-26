(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [944],
  {
    8971: function (e, a, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/reverse-vending-machines/RVM-PREMIUM",
        function () {
          return i(1130);
        },
      ]);
    },
    4457: function (e, a, i) {
      "use strict";
      var n = i(5893),
        t = i(7294),
        s = i(4876),
        l = i(9946),
        o = i(9033),
        r = i(1903),
        c = i(6886),
        d = i(913),
        u = i(7312),
        m = i(6195),
        v = i(3599),
        h = i(3457),
        g = i(9368),
        p = i(476),
        y = i(6501);
      a.Z = () => {
        let [e, a] = (0, t.useState)({
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
          i = (i) => {
            let { name: n, value: t } = i.target;
            a({ ...e, [n]: t });
          },
          f = async (e) => {},
          x = () => {
            try {
              let i = Object.values(e)
                .filter((e) => "string" == typeof e)
                .every((e) => "" !== e.trim());
              if (e.agreed) {
                if (i) {
                  f(e), y.ZP.success("Thanks For Choosing us!!");
                  let i = Object.fromEntries(
                    Object.entries(e).map((e) => {
                      let [a] = e;
                      return [a, ""];
                    })
                  );
                  (i.agreed = !1), a(i);
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
                  onChange: i,
                  className: "d-flex flex-row flex-lg-row ",
                  children: [
                    (0, n.jsx)(l.Z, {
                      name: "gender",
                      value: "mr.",
                      control: (0, n.jsx)(o.Z, {}),
                      label: "Mr.",
                    }),
                    (0, n.jsx)(l.Z, {
                      name: "gender",
                      value: "ms",
                      control: (0, n.jsx)(o.Z, {}),
                      label: "Ms.",
                    }),
                    (0, n.jsx)(l.Z, {
                      name: "gender",
                      value: "mrs",
                      control: (0, n.jsx)(o.Z, {}),
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
                      onChange: i,
                      variant: "filled",
                    }),
                    (0, n.jsx)(r.Z, {
                      fullWidth: !0,
                      value: e.last_name,
                      onChange: i,
                      label: "Last name",
                      name: "last_name",
                      variant: "filled",
                    }),
                    (0, n.jsx)(r.Z, {
                      value: e.company,
                      onChange: i,
                      name: "company",
                      fullWidth: !0,
                      label: "Company",
                      variant: "filled",
                    }),
                    (0, n.jsx)(r.Z, {
                      fullWidth: !0,
                      name: "city",
                      value: e.city,
                      onChange: i,
                      label: "City",
                      variant: "filled",
                    }),
                    (0, n.jsx)(r.Z, {
                      fullWidth: !0,
                      name: "country",
                      value: e.country,
                      onChange: i,
                      label: "Country",
                      variant: "filled",
                    }),
                    (0, n.jsx)(r.Z, {
                      fullWidth: !0,
                      label: "Email",
                      name: "email",
                      value: e.email,
                      onChange: i,
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
                            onChange: i,
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
                          onChange: i,
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
                    onChange: i,
                    fullWidth: !0,
                    multiline: !0,
                    label: "Your Enquiry",
                    InputProps: { rows: 10 },
                  }),
                }),
                (0, n.jsxs)(h.Z, {
                  className: "py-2",
                  children: [
                    (0, n.jsx)(l.Z, {
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
    6167: function (e, a, i) {
      "use strict";
      var n = i(5893);
      i(7294);
      var t = i(1664),
        s = i.n(t);
      a.Z = (e) => {
        let { EvenOddImagesData: a } = e,
          i = (e) => {
            let { title: a, subtitle: i, images: t, link: l } = e;
            return (0, n.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, n.jsx)("div", {
                  className: "col-lg-6  ",
                  children: (0, n.jsx)("img", {
                    src: t,
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
                      dangerouslySetInnerHTML: { __html: i },
                    }),
                    l &&
                      (0, n.jsxs)(s(), {
                        href: l,
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
          t = (e) => {
            let { title: a, subtitle: i, images: t, link: l } = e;
            return (0, n.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, n.jsxs)("div", {
                  className: "col-lg-6   ",
                  children: [
                    (0, n.jsx)("p", { className: "fs-3 ", children: a }),
                    (0, n.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: i },
                    }),
                    l &&
                      (0, n.jsxs)(s(), {
                        href: l,
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
                    src: t,
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
                let { title: a, images: s, subtitle: l, link: o } = e;
                return "odd" === e.type
                  ? (0, n.jsx)(i, { title: a, subtitle: l, images: s, link: o })
                  : (0, n.jsx)(t, {
                      title: a,
                      subtitle: l,
                      images: s,
                      link: o,
                    });
              }),
          }),
        });
      };
    },
    3104: function (e, a, i) {
      "use strict";
      var n = i(5893);
      i(7294);
      var t = i(6066);
      a.Z = (e) => {
        let { textAlign: a, productVideo: i } = e;
        return (0, n.jsx)("div", {
          className: "px-4 ",
          children: (0, n.jsx)(t.Z, {
            dots: !0,
            dotsClass: "slick-dots my-custom-dots",
            infinite: !0,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            children:
              i &&
              (null == i
                ? void 0
                : i.map((e, a) =>
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
    9386: function (e, a, i) {
      "use strict";
      var n = i(5893),
        t = i(6167),
        s = i(3104);
      a.Z = (e) => {
        let { EvenOddImagesData: a, Details: i, productVideos: l } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            i &&
              (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)("div", {
                  className: "text-center w-md-75 m-auto px-2 my-5 container",
                  children: (0, n.jsx)("p", {
                    className: "lead",
                    dangerouslySetInnerHTML: {
                      __html: null == i ? void 0 : i.description,
                    },
                  }),
                }),
              }),
            l &&
              (0, n.jsx)("div", {
                className: "mb-5 pb-4",
                children: (0, n.jsx)(s.Z, { productVideo: l }),
              }),
            a &&
              (0, n.jsxs)("div", {
                className: "bg-white",
                children: [
                  i &&
                    l &&
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
                  (0, n.jsx)(t.Z, { EvenOddImagesData: a }),
                ],
              }),
          ],
        });
      };
    },
    4006: function (e, a, i) {
      "use strict";
      var n = i(5893);
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
    1130: function (e, a, i) {
      "use strict";
      i.r(a),
        i.d(a, {
          default: function () {
            return j;
          },
        });
      var n = i(5893),
        t = i(7294),
        s = i(1703),
        l = i(44),
        o = i(7357),
        r = i(6829),
        c = i(9386),
        d = i(4006),
        u = i(9332);
      let m = [
          {
            title: "Conveyor System",
            subtitle:
              "It is designed to effortlessly transport items from the user to the compactor. This not only enhances user safety by eliminating direct interaction with moving parts, but also safeguards the machine's components from potential damage. With a focus on safety and efficiency, our conveyor system ensures a smooth and secure recycling experience for both users and the machine itself.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/bottale-sensor.jpg",
            type: "odd",
          },
          {
            title: "Weight based recognition",
            subtitle:
              "By accurately measuring the weight of each container, It ensures that only legitimate containers are accepted, effectively rejecting filled containers or unwanted objects. This not only safeguards the machine from potential liquid-related issues, extending its operational life, but also prevents any unpleasant odors that might arise from liquid waste. This advanced feature prioritizes machine life, cleanliness, and overall efficiency.\n        ",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/360-degree-sensor.jpg",
            type: "even",
          },
          {
            title: "42” Interactive Display",
            subtitle:
              "It serves as a platform for dynamic advertisements, enabling effective commercialization through video content displayed on the screen. Moreover, it becomes a powerful tool for raising awareness about recycling and its significance. Additionally, the touch display empowers users to engage with the machine, allowing them to select preferred vouchers and offers, all of which can be tailored to their specific preferences.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/screen-interactive.jpg",
            type: "odd",
          },
          {
            title: "Compaction/Shredder",
            subtitle:
              "The Model also offers a choice between two different container processing options: Compactor and Shredder. It is mostly decided based on the setup of recycling facility in the region hence This flexibility underscores our commitment to tailoring the machine to precisely meet each customer's unique needs and preferences. With the ability to customize the machine's functionality, we ensure that your recycling solution aligns perfectly with your requirements.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/sharder.png",
            type: "even",
          },
          {
            title: "Bin-Full Mechanism",
            subtitle:
              'RVM-Premium’s Bin Full Notification feature increases it’s operational efficiency. When the storage bin reaches capacity, the machine stops accepting new bottle. This ensures the safety and longevity of the internal mechanism. Simultaneously, a clear "Bin Full" indication prompts users to promptly empty the bin, to ensure minium machine downtime. ',
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/ring-close.jpg",
            type: "odd",
          },
          {
            title: "Anti Jamming Technology",
            subtitle:
              "Anti Jamming Technology is setting a new standard in recycling safety and minimum machine downtime. This innovative feature acts as a safeguard against potential damage arising due to intentional feeding of rigid items such as metal objects. Ensuring the safety of the internal mechanism, it guarantees secure and reliable operation. In the event of a jam, the system initiates an auto-reverse function, swiftly and autonomously resolving the jamming situation without the need for manual intervention. ",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/antijammingtechnology.png",
            type: "even",
          },
        ],
        v = {
          description:
            "The RVM Premium is a high-end and sophisticated Reverse Vending Machine (RVM) that offers an exceptional recycling experience for upscale establishments and modern retail environments. Here's an overview of the key features and benefits of the RVM Premium",
          additional: [
            {
              title: "Sleek and Modern Design",
              description:
                "The RVM Premium features a sleek and contemporary design that adds a touch of elegance to any environment. Its visually appealing aesthetics enhance the overall ambience and make a statement about your commitment to sustainability.",
            },
            {
              title: "Interactive Touchscreen Interface",
              description:
                "The RVM Premium is equipped with an 42” interactive touchscreen interface that provides a seamless and user-friendly recycling experience. The intuitive interface allows users to easily navigate through the recycling process, ensuring a positive and engaging interaction.",
            },
            {
              title: "Container Verification",
              description:
                "RVM Premium is capable of validating wide range of beverage containers, including plastic bottles and, aluminum cans. It also rejects the containers which are overweight ensuring the safety of mechanism and cleanliness of the premises.",
            },
            {
              title: "Advanced-Data Analytics",
              description:
                "The RVM Premium offers advanced data analytics capabilities, providing operators with valuable insights into recycling patterns, trends, and user behaviors. This data-driven approach enables informed decision-making, optimization of recycling strategies, and identification of areas for improvement.",
            },
            {
              title: "Real-Time Inventory Tracking",
              description:
                "The RVM Premium features real-time inventory tracking, allowing operators to monitor and manage stock levels efficiently. Automated notifications for restocking ensure uninterrupted recycling operations, minimizing downtime and maximizing user satisfaction.",
            },
            {
              title: "Integration Capabilities",
              description:
                "The RVM Premium can be seamlessly integrated with existing systems, such as loyalty programs, customer databases, or recycling management platforms. This integration enables streamlined operations, synchronized data exchange, and a cohesive recycling ecosystem.",
            },
          ],
        },
        h = [
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/premium/RVM_premium_bin_video.mp4",
            video_desc: "Energy-efficient process cooler",
          },
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/premium/RVM_premium_full_video.mp4",
            video_desc: "Energy-efficient process cooler",
          },
        ],
        g = [
          { color: "secondary", type: "bold", key: "MEASUREMENTS", value: "" },
          {
            color: "secondary",
            key: "Dimensions (W x D x H in MM)",
            value: [
              { value1: "1000 x 1000 x 1800 MM" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "secondary",
            key: "INLET HEIGHT",
            value: [{ value1: "1250 mm" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "secondary",
            key: "FOOTPRINT AREA",
            value: [{ value1: "1 Sqm." }, { value1: "" }, { value1: "" }],
          },
          {
            color: "secondary",
            key: "WEIGHT",
            value: [{ value1: "350 Kg" }, { value1: "" }, { value1: "" }],
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
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          ,
          {
            color: "",
            key: "DRS LOGO RECOGNITION",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
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
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          ,
          {
            color: "",
            key: "RECOGNITION TECHNOLOGY",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          ,
          {
            color: "",
            key: "MATERIAL RECOGNITION",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
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
            value: [{ value1: "PET, ALU" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "TOUCHSCREEN SIZE",
            value: [{ value1: '42" ' }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "AUDIO",
            value: [{ value1: "Optional" }, { value1: "" }, { value1: "" }],
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
              { value1: "SMS & QR CODE" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "MATERIAL SEGREGATION",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "Material Processing Mechanism",
            value: [{ value1: "Compactor" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "STORAGE BINS",
            value: [{ value1: "1" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "TOTAL STORAGE CAPACITY (MAX)",
            value: [
              { value1: "1000 Containers" },
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
              { value1: "220V AC – 1 PHASES, 50HZ, 16A" },
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
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "EASY INTEGRATION WITH 3RD PARTY APPLICATIONS VIA API",
            value: [{ value1: "Yes" }, { value1: "" }, { value1: "" }],
          },
          {
            color: "",
            key: "BUSINESS INTELLIGENCE FOR OPERATION MANAGEMENT",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
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
      var p = i(9527),
        y = i.n(p),
        f = i(4457);
      function x(e) {
        let { children: a, value: i, index: t, ...s } = e;
        return (0, n.jsx)("div", {
          role: "tabpanel",
          hidden: i !== t,
          id: "simple-tabpanel-".concat(t),
          "aria-labelledby": "simple-tab-".concat(t),
          ...s,
          children: i === t && (0, n.jsx)(o.Z, { children: a }),
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
        let [e, a] = t.useState(0),
          i = (0, r.Z)(l.Z)({ "&.Mui-selected": { color: "#FF7722" } });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(y(), {
              children: [
                (0, n.jsx)("title", {
                  children:
                    "Eco-Friendly Reverse Vending Machines in India-Endlos ",
                }),
                (0, n.jsx)("meta", {
                  name: "description",
                  content:
                    "RVM Premium is a high-end, sophisticated reverse vending machine in India that provides upmarket establishments with an unparalleled recycling experience.",
                }),
                (0, n.jsx)("meta", {
                  name: "keywords",
                  content: "reverse vending machine in India",
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "final-product-page-container",
              children: (0, n.jsx)("div", {
                className: "row m-0 p-0",
                children: (0, n.jsxs)("div", {
                  className: "col-lg-12 ",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "position-relative",
                      children: [
                        (0, n.jsx)("img", {
                          src: "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_premium/RVM_premium_1440x678_3.jpg",
                          alt: "Product Image",
                          className: "w-100 h-50",
                        }),
                        (0, n.jsx)("div", {
                          className: "card-position",
                          children: (0, n.jsx)("div", {
                            className: " p-sm-4",
                            children: (0, n.jsx)("h1", {
                              className: "font-bold ",
                              children: (0, n.jsx)("strong", {
                                className: " m-0 p-0 fs-1  pl-5",
                                children: "RVM PREMIUM",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)(o.Z, {
                      sx: { width: "100%" },
                      children: [
                        (0, n.jsx)(o.Z, {
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
                            onChange: (e, i) => {
                              a(i);
                            },
                            "aria-label": "basic tabs example",
                            children: [
                              (0, n.jsx)(i, { label: "Overview", ...b(0) }),
                              (0, n.jsx)(i, {
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
    9527: function (e, a, i) {
      e.exports = i(2636);
    },
  },
  function (e) {
    e.O(0, [257, 886, 461, 774, 888, 179], function () {
      return e((e.s = 8971));
    }),
      (_N_E = e.O());
  },
]);

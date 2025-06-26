(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [470],
  {
    3917: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/reverse-vending-machines/RVM-PRO",
        function () {
          return t(8104);
        },
      ]);
    },
    4457: function (e, a, t) {
      "use strict";
      var i = t(5893),
        n = t(7294),
        s = t(4876),
        l = t(9946),
        o = t(9033),
        r = t(1903),
        c = t(6886),
        d = t(913),
        u = t(7312),
        m = t(6195),
        v = t(3599),
        h = t(3457),
        p = t(9368),
        g = t(476),
        y = t(6501);
      a.Z = () => {
        let [e, a] = (0, n.useState)({
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
            let { name: i, value: n } = t.target;
            a({ ...e, [i]: n });
          },
          f = async (e) => {},
          b = () => {
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
        return (0, i.jsxs)("div", {
          className: "contact-us-section pt-5",
          children: [
            (0, i.jsx)("h3", {
              className: "text-center opacity-75",
              children: "Contact Us",
            }),
            (0, i.jsxs)("div", {
              className: "container px-lg-5",
              children: [
                (0, i.jsxs)(s.Z, {
                  "aria-labelledby": "demo-controlled-radio-buttons-group",
                  name: "controlled-radio-buttons-group",
                  value: e.gender,
                  onChange: t,
                  className: "d-flex flex-row flex-lg-row ",
                  children: [
                    (0, i.jsx)(l.Z, {
                      name: "gender",
                      value: "mr.",
                      control: (0, i.jsx)(o.Z, {}),
                      label: "Mr.",
                    }),
                    (0, i.jsx)(l.Z, {
                      name: "gender",
                      value: "ms",
                      control: (0, i.jsx)(o.Z, {}),
                      label: "Ms.",
                    }),
                    (0, i.jsx)(l.Z, {
                      name: "gender",
                      value: "mrs",
                      control: (0, i.jsx)(o.Z, {}),
                      label: "Mrs.",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "form-grid my-4",
                  children: [
                    (0, i.jsx)(r.Z, {
                      fullWidth: !0,
                      label: "First name",
                      name: "first_name",
                      value: e.first_name,
                      onChange: t,
                      variant: "filled",
                    }),
                    (0, i.jsx)(r.Z, {
                      fullWidth: !0,
                      value: e.last_name,
                      onChange: t,
                      label: "Last name",
                      name: "last_name",
                      variant: "filled",
                    }),
                    (0, i.jsx)(r.Z, {
                      value: e.company,
                      onChange: t,
                      name: "company",
                      fullWidth: !0,
                      label: "Company",
                      variant: "filled",
                    }),
                    (0, i.jsx)(r.Z, {
                      fullWidth: !0,
                      name: "city",
                      value: e.city,
                      onChange: t,
                      label: "City",
                      variant: "filled",
                    }),
                    (0, i.jsx)(r.Z, {
                      fullWidth: !0,
                      name: "country",
                      value: e.country,
                      onChange: t,
                      label: "Country",
                      variant: "filled",
                    }),
                    (0, i.jsx)(r.Z, {
                      fullWidth: !0,
                      label: "Email",
                      name: "email",
                      value: e.email,
                      onChange: t,
                      variant: "filled",
                    }),
                    (0, i.jsx)(c.ZP, {
                      container: !0,
                      children: (0, i.jsx)(c.ZP, {
                        container: !0,
                        spacing: 2,
                        children: (0, i.jsx)(c.ZP, {
                          item: !0,
                          xs: 12,
                          children: (0, i.jsx)(r.Z, {
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
                    (0, i.jsxs)(d.Z, {
                      variant: "filled",
                      children: [
                        (0, i.jsx)(u.Z, {
                          id: "demo-simple-select-filled-label",
                          children: "I am Interested In Following Group",
                        }),
                        (0, i.jsxs)(m.Z, {
                          name: "interested",
                          value: e.interested,
                          onChange: t,
                          children: [
                            (0, i.jsx)(v.Z, { value: "RVM", children: "RVM" }),
                            (0, i.jsx)(v.Z, { value: "OWC", children: "OWC" }),
                            (0, i.jsx)(v.Z, {
                              value: "Other",
                              children: "Other Products and Services",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(c.ZP, {
                  item: !0,
                  sm: 6,
                  children: (0, i.jsx)(r.Z, {
                    name: "message",
                    value: e.message,
                    onChange: t,
                    fullWidth: !0,
                    multiline: !0,
                    label: "Your Enquiry",
                    InputProps: { rows: 10 },
                  }),
                }),
                (0, i.jsxs)(h.Z, {
                  className: "py-2",
                  children: [
                    (0, i.jsx)(l.Z, {
                      control: (0, i.jsx)(p.Z, {
                        name: "agreed",
                        checked: e.agreed,
                        onChange: () => a((e) => ({ ...e, agreed: !e.agreed })),
                      }),
                      label: "I Agree",
                    }),
                    (0, i.jsx)(g.Z, {
                      children:
                        "I hereby consent to the data collected above being processed in accordance with the Privacy Policy for processing my request. This consent may be withdrawn at any time with future effect.",
                    }),
                    (0, i.jsx)("strong", {
                      className: "my-2",
                      children: "Consent*",
                    }),
                  ],
                }),
                (0, i.jsx)("button", {
                  onClick: () => b(),
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
      var i = t(5893);
      t(7294);
      var n = t(1664),
        s = t.n(n);
      a.Z = (e) => {
        let { EvenOddImagesData: a } = e,
          t = (e) => {
            let { title: a, subtitle: t, images: n, link: l } = e;
            return (0, i.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, i.jsx)("div", {
                  className: "col-lg-6  ",
                  children: (0, i.jsx)("img", {
                    src: n,
                    alt: "Product Image",
                    className: "img-fluid  rounded ",
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "col-lg-6  ",
                  children: [
                    (0, i.jsx)("h2", { className: "fs-3", children: a }),
                    (0, i.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: t },
                    }),
                    l &&
                      (0, i.jsxs)(s(), {
                        href: l,
                        children: [
                          " ",
                          (0, i.jsx)("div", {
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
          n = (e) => {
            let { title: a, subtitle: t, images: n, link: l } = e;
            return (0, i.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, i.jsxs)("div", {
                  className: "col-lg-6   ",
                  children: [
                    (0, i.jsx)("p", { className: "fs-3 ", children: a }),
                    (0, i.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: t },
                    }),
                    l &&
                      (0, i.jsxs)(s(), {
                        href: l,
                        children: [
                          " ",
                          (0, i.jsx)("div", {
                            className: "btn btn-dark",
                            children: "To The Product",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "col-lg-6  pt-2 ",
                  children: (0, i.jsx)("img", {
                    src: n,
                    alt: "Product Image",
                    className: "img-fluid rounded",
                  }),
                }),
              ],
            });
          };
        return (0, i.jsx)("div", {
          className: "bg-white  py-3  ",
          children: (0, i.jsx)("div", {
            className: "row  container m-0 p-0 mx-auto ",
            children:
              a &&
              a.map((e) => {
                let { title: a, images: s, subtitle: l, link: o } = e;
                return "odd" === e.type
                  ? (0, i.jsx)(t, { title: a, subtitle: l, images: s, link: o })
                  : (0, i.jsx)(n, {
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
    3104: function (e, a, t) {
      "use strict";
      var i = t(5893);
      t(7294);
      var n = t(6066);
      a.Z = (e) => {
        let { textAlign: a, productVideo: t } = e;
        return (0, i.jsx)("div", {
          className: "px-4 ",
          children: (0, i.jsx)(n.Z, {
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
                    (0, i.jsx)(
                      "div",
                      {
                        children: (0, i.jsx)("video", {
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
      var i = t(5893),
        n = t(6167),
        s = t(3104);
      a.Z = (e) => {
        let { EvenOddImagesData: a, Details: t, productVideos: l } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            t &&
              (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)("div", {
                  className: "text-center w-md-75 m-auto px-2 my-5 container",
                  children: (0, i.jsx)("p", {
                    className: "lead",
                    dangerouslySetInnerHTML: {
                      __html: null == t ? void 0 : t.description,
                    },
                  }),
                }),
              }),
            l &&
              (0, i.jsx)("div", {
                className: "mb-5 pb-4",
                children: (0, i.jsx)(s.Z, { productVideo: l }),
              }),
            a &&
              (0, i.jsxs)("div", {
                className: "bg-white",
                children: [
                  t &&
                    l &&
                    (0, i.jsxs)("div", {
                      className: "",
                      children: [
                        (0, i.jsx)("hr", { className: "mb-3" }),
                        (0, i.jsx)("h3", {
                          className: "text-center fw-bolder",
                          children: "Key Features",
                        }),
                        (0, i.jsx)("hr", { className: "" }),
                      ],
                    }),
                  (0, i.jsx)(n.Z, { EvenOddImagesData: a }),
                ],
              }),
          ],
        });
      };
    },
    4006: function (e, a, t) {
      "use strict";
      var i = t(5893);
      a.Z = (e) => {
        let { tableData: a } = e;
        return (0, i.jsx)("div", {
          className: " technical-container container my-5 mx-auto pb-3 px-sm-5",
          children: (0, i.jsx)("table", {
            className: "table   ",
            children: (0, i.jsx)("tbody", {
              className: "",
              children:
                a &&
                a.map((e, a) =>
                  (0, i.jsxs)(
                    "tr",
                    {
                      className: "".concat(
                        "secondary" === e.color ? "table-upper-color" : ""
                      ),
                      children: [
                        (0, i.jsx)("td", {
                          className: "".concat(
                            "bold" === e.type ? "fw-bold  ps-4 " : "  ps-5",
                            " "
                          ),
                          children: (0, i.jsx)("small", { children: e.key }),
                        }),
                        e.value
                          ? e.value.map((e, a) =>
                              (0, i.jsx)("td", { children: e.value1 }, a)
                            )
                          : (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("td", { children: "\xa0" }),
                                (0, i.jsx)("td", { children: "\xa0" }),
                                (0, i.jsx)("td", { children: "\xa0" }),
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
    8104: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return j;
          },
        });
      var i = t(5893),
        n = t(7294),
        s = t(1703),
        l = t(44),
        o = t(7357),
        r = t(6829),
        c = t(9386),
        d = t(4006),
        u = t(9332);
      let m = [
          {
            title: "Conveyor System",
            subtitle:
              "Containers can be easily moved from the user to the compactor thanks to its intuitive design. This protects the machine's parts from potential harm and improves user safety by removing direct contact with moving parts. Our conveyor system guarantees a safe and easy recycling process for users as well as the machine itself by prioritizing efficiency and safety.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/bottale-sensor.jpg",
            type: "odd",
          },
          {
            title: "Weight based recognition",
            subtitle:
              "It makes sure that only valid containers are accepted by precisely weighing each one, hence rejecting filled containers or undesired things. By doing this, you may prolong the machine's lifespan by protecting it from potential liquid-related problems and avoid any unpleasant smells that could result from liquid waste. This cutting-edge innovation puts overall efficiency, cleanliness, and machine life first.\n        ",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/360-degree-sensor.jpg",
            type: "even",
          },
          {
            title: "Interactive Display",
            subtitle:
              "The platform facilitates dynamic ads, hence enabling effective commercialization through the display of video content on the screen. Additionally, it turns into an effective instrument for promoting recycling and its importance. Furthermore, by enabling consumers to interact with the machine through the touch display, they may choose their preferred offers and vouchers, which can all be customized to suit their interests.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/screen-interactive.jpg",
            type: "odd",
          },
          {
            title: "Compaction/Shredder",
            subtitle:
              "Additionally, the Compactor and Shredder are the two alternatives for container processing that the Model offers. The configuration of the recycling facilities in the area has a major role in the decision. We guarantee that your recycling facilities will receive the material processed from our machine in their preffered process. ",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/sharder.png",
            type: "even",
          },
          {
            title: "Bin-Full Mechanism",
            subtitle:
              'The Bin Full Notification feature of RVM-Pro improves its operating effectiveness. The machine stops taking new bottles when the storage bin fills up. This guarantees the internal mechanism\'s lifespan and safety. In order to minimize machine downtime, a prominent "Bin Full" indicator simultaneously alerts users to the need to empty the bin right away. ',
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/ring-close.jpg",
            type: "odd",
          },
          {
            title: "Anti Jamming Technology",
            subtitle:
              "A new benchmark for recycling safety and minimal machine downtime is being set by Anti Jamming Technology. This novel feature serves as a protective measure against possible harm resulting from purposeful feeding of inflexible materials, including metal objects. It ensures dependable and safe operation by safeguarding the internal system. When a jam occurs, the system triggers an auto-reverse feature, which quickly and automatically clears the obstruction without requiring human assistance.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/antijammingtechnology.png",
            type: "even",
          },
        ],
        v = {
          description:
            "An upgraded version of the Reverse Vending Machine, the RVM Pro is made to take empty aluminum and plastic containers for the markets without container deposit law. With incentives and awareness-raising, its interactive display promotes recycling among users. It can be purchased with a shredder or compactor options, and its Internet of Things connectivity guarantees data accessible through a user-friendly dashboard.",
          additional: [
            {
              title: "Container Verification",
              description:
                "Plastic bottles and aluminum cans are the two types of containers that RVM Pro can accept and process on-site. Additionally, it rejects containers that are overweight, protecting the mechanism and maintaining the facility's cleanliness. ",
            },
            {
              title: "User-Friendly Interface",
              description:
                "RVM Pro features an intuitive and user-friendly interface that guides users through the recycling process. Clear instructions and visuals make it easy for individuals of all backgrounds and ages to participate in recycling efforts.",
            },
            {
              title: "Customizable Configurations",
              description:
                "The RVM Pro can be tailored to meet certain needs and surroundings. This covers choices like user interfaces, branding, incentive programs, and reporting features. Customizing the device to the requirements of your market increases brand recognition and user engagement.",
            },
            {
              title: "Dashboard for Analytics",
              description:
                "Discover recycling patterns using our analytics dashboard, which is built using user information, machine counts, container data, specific vouchers, and much more for smart waste management tactics.",
            },
            {
              title: "Reward System",
              description:
                "A reward system can be implemented with the RVM Pro to encourage recycling participation. Coupons, redeemable points, or vouchers are given to users as rewards for their recycling activities, which boosts their incentive and promotes environmental stewardship.",
            },
            {
              title: "Real-Time Monitoring and Reporting",
              description:
                "With the real-time reporting and monitoring features of the RVM Pro, operators can keep tabs on recycling data, collection levels, and use. Efficient management, optimized maintenance schedules, and well-informed decision-making are made possible by this data-driven strategy.   ",
            },
            {
              title: "Durable Construction",
              description:
                "The Robust construction of RVM Pro ensures reliable performance in high traffic environments. Keeping its uptime as a priority, RVM Pro ensures safe and continuous operations.",
            },
            {
              title: "Incentivized Recycling",
              description:
                "An incentive scheme for recycling participation can be added to the RVM Pro. Providing incentives like coupons, redeemable points, or vouchers for exclusive deals or discounts encourages people to take an active part in recycling initiatives.",
            },
          ],
        },
        h = [
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/pro/RVM_Pro.mp4",
            video_desc: "Energy-efficient process cooler",
          },
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/pro/RVM_pro_bin_video.mp4",
            video_desc: "Energy-efficient process cooler",
          },
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/pro/RVM_pro_full_video.mp4",
            video_desc: "Energy-efficient process cooler",
          },
        ],
        p = [
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
            value: [{ value1: "300 Kg" }, { value1: "" }, { value1: "" }],
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
            value: [{ value1: '15.6" ' }, { value1: "" }, { value1: "" }],
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
      var g = t(9527),
        y = t.n(g),
        f = t(4457);
      function b(e) {
        let { children: a, value: t, index: n, ...s } = e;
        return (0, i.jsx)("div", {
          role: "tabpanel",
          hidden: t !== n,
          id: "simple-tabpanel-".concat(n),
          "aria-labelledby": "simple-tab-".concat(n),
          ...s,
          children: t === n && (0, i.jsx)(o.Z, { children: a }),
        });
      }
      function x(e) {
        return {
          id: "simple-tab-".concat(e),
          "aria-controls": "simple-tabpanel-".concat(e),
        };
      }
      var j = () => {
        (0, u.usePathname)();
        let [e, a] = n.useState(0),
          t = (0, r.Z)(l.Z)({ "&.Mui-selected": { color: "#FF7722" } });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(y(), {
              children: [
                (0, i.jsx)("title", {
                  children: " RVM Manufacturer in India -Endlos innovation ",
                }),
                (0, i.jsx)("meta", {
                  name: "description",
                  content:
                    "RVM Pro is a reverse vending machine designed by Endlos Innovative for Non-Deposit Return Scheme that can accept empty plastic and metal containers.  ",
                }),
                (0, i.jsx)("meta", {
                  name: "keywords",
                  content: "reverse vending machine",
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "final-product-page-container",
              children: (0, i.jsx)("div", {
                className: "row",
                children: (0, i.jsxs)("div", {
                  className: "col-lg-12",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "position-relative",
                      children: [
                        (0, i.jsx)("img", {
                          src: "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_pro/RVM_prem_1440x678_5.jpg",
                          alt: "Product Image",
                          className: "w-100 h-50",
                        }),
                        (0, i.jsx)("div", {
                          className: "card-position",
                          children: (0, i.jsx)("div", {
                            className: " p-4",
                            children: (0, i.jsx)("h1", {
                              className: "font-bold ",
                              children: (0, i.jsx)("strong", {
                                className: " m-0 p-0",
                                children: "RVM PRO",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(o.Z, {
                      sx: { width: "100%" },
                      children: [
                        (0, i.jsx)(o.Z, {
                          sx: {
                            borderBottom: 1,
                            borderColor: "divider",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          children: (0, i.jsxs)(s.Z, {
                            TabIndicatorProps: {
                              style: { backgroundColor: "#FF7722" },
                            },
                            value: e,
                            onChange: (e, t) => {
                              a(t);
                            },
                            "aria-label": "basic tabs example",
                            children: [
                              (0, i.jsx)(t, { label: "Overview", ...x(0) }),
                              (0, i.jsx)(t, {
                                label: "Technical Data",
                                ...x(1),
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)(b, {
                          value: e,
                          index: 0,
                          children: (0, i.jsx)(c.Z, {
                            productVideos: h,
                            Details: v,
                            EvenOddImagesData: m,
                          }),
                        }),
                        (0, i.jsx)(b, {
                          value: e,
                          index: 1,
                          children: (0, i.jsx)(d.Z, { tableData: p }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, i.jsx)("div", {
              className: "mt-5 pt-2",
              children: (0, i.jsx)(f.Z, {}),
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
      return e((e.s = 3917));
    }),
      (_N_E = e.O());
  },
]);

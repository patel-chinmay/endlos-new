(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [370],
  {
    6444: function (e, a, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/reverse-vending-machines/RVM-ECO",
        function () {
          return l(1766);
        },
      ]);
    },
    4070: function (e, a, l) {
      "use strict";
      var t = l(5893);
      l(7294),
        (a.Z = (e) => {
          let { showMessage: a = !0 } = e;
          return (0, t.jsxs)("div", {
            className: "contact-us-section ",
            children: [
              (0, t.jsx)("div", {
                className: "mail-middle",
                children: (0, t.jsx)("a", {
                  href: "mailto:info@endlos.in",
                  className: "",
                  children: (0, t.jsx)("img", {
                    src: "/assets/mail.png",
                    alt: "mail icon",
                    className: "mail-icon",
                  }),
                }),
              }),
              a &&
                (0, t.jsx)("div", {
                  className:
                    "d-flex flex-column align-items-center justify-content-center pb-4",
                  children: (0, t.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, t.jsx)("h4", {
                        className: "text-dark",
                        children: "Contact us",
                      }),
                      (0, t.jsx)("p", {
                        className: "fs-4 text-secondary",
                        children:
                          "Get in touch with our team and we'll customize a best solution that actually solves your problem.",
                      }),
                    ],
                  }),
                }),
            ],
          });
        });
    },
    4457: function (e, a, l) {
      "use strict";
      var t = l(5893),
        i = l(7294),
        s = l(4876),
        n = l(9946),
        o = l(9033),
        r = l(1903),
        c = l(6886),
        d = l(913),
        u = l(7312),
        m = l(6195),
        v = l(3599),
        h = l(3457),
        p = l(9368),
        g = l(476),
        y = l(6501);
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
          l = (l) => {
            let { name: t, value: i } = l.target;
            a({ ...e, [t]: i });
          },
          f = async (e) => {},
          b = () => {
            try {
              let l = Object.values(e)
                .filter((e) => "string" == typeof e)
                .every((e) => "" !== e.trim());
              if (e.agreed) {
                if (l) {
                  f(e), y.ZP.success("Thanks For Choosing us!!");
                  let l = Object.fromEntries(
                    Object.entries(e).map((e) => {
                      let [a] = e;
                      return [a, ""];
                    })
                  );
                  (l.agreed = !1), a(l);
                } else throw Error("Please fill in all fields");
              } else throw Error("Please agree to the terms and conditions");
            } catch (e) {
              y.ZP.error(
                e.message ? e.message : "Something went wrong pls retry"
              );
            }
          };
        return (0, t.jsxs)("div", {
          className: "contact-us-section pt-5",
          children: [
            (0, t.jsx)("h3", {
              className: "text-center opacity-75",
              children: "Contact Us",
            }),
            (0, t.jsxs)("div", {
              className: "container px-lg-5",
              children: [
                (0, t.jsxs)(s.Z, {
                  "aria-labelledby": "demo-controlled-radio-buttons-group",
                  name: "controlled-radio-buttons-group",
                  value: e.gender,
                  onChange: l,
                  className: "d-flex flex-row flex-lg-row ",
                  children: [
                    (0, t.jsx)(n.Z, {
                      name: "gender",
                      value: "mr.",
                      control: (0, t.jsx)(o.Z, {}),
                      label: "Mr.",
                    }),
                    (0, t.jsx)(n.Z, {
                      name: "gender",
                      value: "ms",
                      control: (0, t.jsx)(o.Z, {}),
                      label: "Ms.",
                    }),
                    (0, t.jsx)(n.Z, {
                      name: "gender",
                      value: "mrs",
                      control: (0, t.jsx)(o.Z, {}),
                      label: "Mrs.",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "form-grid my-4",
                  children: [
                    (0, t.jsx)(r.Z, {
                      fullWidth: !0,
                      label: "First name",
                      name: "first_name",
                      value: e.first_name,
                      onChange: l,
                      variant: "filled",
                    }),
                    (0, t.jsx)(r.Z, {
                      fullWidth: !0,
                      value: e.last_name,
                      onChange: l,
                      label: "Last name",
                      name: "last_name",
                      variant: "filled",
                    }),
                    (0, t.jsx)(r.Z, {
                      value: e.company,
                      onChange: l,
                      name: "company",
                      fullWidth: !0,
                      label: "Company",
                      variant: "filled",
                    }),
                    (0, t.jsx)(r.Z, {
                      fullWidth: !0,
                      name: "city",
                      value: e.city,
                      onChange: l,
                      label: "City",
                      variant: "filled",
                    }),
                    (0, t.jsx)(r.Z, {
                      fullWidth: !0,
                      name: "country",
                      value: e.country,
                      onChange: l,
                      label: "Country",
                      variant: "filled",
                    }),
                    (0, t.jsx)(r.Z, {
                      fullWidth: !0,
                      label: "Email",
                      name: "email",
                      value: e.email,
                      onChange: l,
                      variant: "filled",
                    }),
                    (0, t.jsx)(c.ZP, {
                      container: !0,
                      children: (0, t.jsx)(c.ZP, {
                        container: !0,
                        spacing: 2,
                        children: (0, t.jsx)(c.ZP, {
                          item: !0,
                          xs: 12,
                          children: (0, t.jsx)(r.Z, {
                            fullWidth: !0,
                            value: e.phone_number,
                            name: "phone_number",
                            onChange: l,
                            label: "Phone",
                            variant: "filled",
                          }),
                        }),
                      }),
                    }),
                    (0, t.jsxs)(d.Z, {
                      variant: "filled",
                      children: [
                        (0, t.jsx)(u.Z, {
                          id: "demo-simple-select-filled-label",
                          children: "I am Interested In Following Group",
                        }),
                        (0, t.jsxs)(m.Z, {
                          name: "interested",
                          value: e.interested,
                          onChange: l,
                          children: [
                            (0, t.jsx)(v.Z, { value: "RVM", children: "RVM" }),
                            (0, t.jsx)(v.Z, { value: "OWC", children: "OWC" }),
                            (0, t.jsx)(v.Z, {
                              value: "Other",
                              children: "Other Products and Services",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(c.ZP, {
                  item: !0,
                  sm: 6,
                  children: (0, t.jsx)(r.Z, {
                    name: "message",
                    value: e.message,
                    onChange: l,
                    fullWidth: !0,
                    multiline: !0,
                    label: "Your Enquiry",
                    InputProps: { rows: 10 },
                  }),
                }),
                (0, t.jsxs)(h.Z, {
                  className: "py-2",
                  children: [
                    (0, t.jsx)(n.Z, {
                      control: (0, t.jsx)(p.Z, {
                        name: "agreed",
                        checked: e.agreed,
                        onChange: () => a((e) => ({ ...e, agreed: !e.agreed })),
                      }),
                      label: "I Agree",
                    }),
                    (0, t.jsx)(g.Z, {
                      children:
                        "I hereby consent to the data collected above being processed in accordance with the Privacy Policy for processing my request. This consent may be withdrawn at any time with future effect.",
                    }),
                    (0, t.jsx)("strong", {
                      className: "my-2",
                      children: "Consent*",
                    }),
                  ],
                }),
                (0, t.jsx)("button", {
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
    6167: function (e, a, l) {
      "use strict";
      var t = l(5893);
      l(7294);
      var i = l(1664),
        s = l.n(i);
      a.Z = (e) => {
        let { EvenOddImagesData: a } = e,
          l = (e) => {
            let { title: a, subtitle: l, images: i, link: n } = e;
            return (0, t.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, t.jsx)("div", {
                  className: "col-lg-6  ",
                  children: (0, t.jsx)("img", {
                    src: i,
                    alt: "Product Image",
                    className: "img-fluid  rounded ",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "col-lg-6  ",
                  children: [
                    (0, t.jsx)("h2", { className: "fs-3", children: a }),
                    (0, t.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: l },
                    }),
                    n &&
                      (0, t.jsxs)(s(), {
                        href: n,
                        children: [
                          " ",
                          (0, t.jsx)("div", {
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
            let { title: a, subtitle: l, images: i, link: n } = e;
            return (0, t.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, t.jsxs)("div", {
                  className: "col-lg-6   ",
                  children: [
                    (0, t.jsx)("p", { className: "fs-3 ", children: a }),
                    (0, t.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: l },
                    }),
                    n &&
                      (0, t.jsxs)(s(), {
                        href: n,
                        children: [
                          " ",
                          (0, t.jsx)("div", {
                            className: "btn btn-dark",
                            children: "To The Product",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "col-lg-6  pt-2 ",
                  children: (0, t.jsx)("img", {
                    src: i,
                    alt: "Product Image",
                    className: "img-fluid rounded",
                  }),
                }),
              ],
            });
          };
        return (0, t.jsx)("div", {
          className: "bg-white  py-3  ",
          children: (0, t.jsx)("div", {
            className: "row  container m-0 p-0 mx-auto ",
            children:
              a &&
              a.map((e) => {
                let { title: a, images: s, subtitle: n, link: o } = e;
                return "odd" === e.type
                  ? (0, t.jsx)(l, { title: a, subtitle: n, images: s, link: o })
                  : (0, t.jsx)(i, {
                      title: a,
                      subtitle: n,
                      images: s,
                      link: o,
                    });
              }),
          }),
        });
      };
    },
    3104: function (e, a, l) {
      "use strict";
      var t = l(5893);
      l(7294);
      var i = l(6066);
      a.Z = (e) => {
        let { textAlign: a, productVideo: l } = e;
        return (0, t.jsx)("div", {
          className: "px-4 ",
          children: (0, t.jsx)(i.Z, {
            dots: !0,
            dotsClass: "slick-dots my-custom-dots",
            infinite: !0,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            children:
              l &&
              (null == l
                ? void 0
                : l.map((e, a) =>
                    (0, t.jsx)(
                      "div",
                      {
                        children: (0, t.jsx)("video", {
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
    9386: function (e, a, l) {
      "use strict";
      var t = l(5893),
        i = l(6167),
        s = l(3104);
      a.Z = (e) => {
        let { EvenOddImagesData: a, Details: l, productVideos: n } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            l &&
              (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)("div", {
                  className: "text-center w-md-75 m-auto px-2 my-5 container",
                  children: (0, t.jsx)("p", {
                    className: "lead",
                    dangerouslySetInnerHTML: {
                      __html: null == l ? void 0 : l.description,
                    },
                  }),
                }),
              }),
            n &&
              (0, t.jsx)("div", {
                className: "mb-5 pb-4",
                children: (0, t.jsx)(s.Z, { productVideo: n }),
              }),
            a &&
              (0, t.jsxs)("div", {
                className: "bg-white",
                children: [
                  l &&
                    n &&
                    (0, t.jsxs)("div", {
                      className: "",
                      children: [
                        (0, t.jsx)("hr", { className: "mb-3" }),
                        (0, t.jsx)("h3", {
                          className: "text-center fw-bolder",
                          children: "Key Features",
                        }),
                        (0, t.jsx)("hr", { className: "" }),
                      ],
                    }),
                  (0, t.jsx)(i.Z, { EvenOddImagesData: a }),
                ],
              }),
          ],
        });
      };
    },
    4006: function (e, a, l) {
      "use strict";
      var t = l(5893);
      a.Z = (e) => {
        let { tableData: a } = e;
        return (0, t.jsx)("div", {
          className: " technical-container container my-5 mx-auto pb-3 px-sm-5",
          children: (0, t.jsx)("table", {
            className: "table   ",
            children: (0, t.jsx)("tbody", {
              className: "",
              children:
                a &&
                a.map((e, a) =>
                  (0, t.jsxs)(
                    "tr",
                    {
                      className: "".concat(
                        "secondary" === e.color ? "table-upper-color" : ""
                      ),
                      children: [
                        (0, t.jsx)("td", {
                          className: "".concat(
                            "bold" === e.type ? "fw-bold  ps-4 " : "  ps-5",
                            " "
                          ),
                          children: (0, t.jsx)("small", { children: e.key }),
                        }),
                        e.value
                          ? e.value.map((e, a) =>
                              (0, t.jsx)("td", { children: e.value1 }, a)
                            )
                          : (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)("td", { children: "\xa0" }),
                                (0, t.jsx)("td", { children: "\xa0" }),
                                (0, t.jsx)("td", { children: "\xa0" }),
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
    1766: function (e, a, l) {
      "use strict";
      l.r(a),
        l.d(a, {
          default: function () {
            return x;
          },
        });
      var t = l(5893),
        i = l(7294),
        s = l(1703),
        n = l(44),
        o = l(7357),
        r = l(6829),
        c = l(9386),
        d = l(4006);
      let u = [
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
            value: [{ value1: "250 Kg" }, { value1: "" }, { value1: "" }],
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
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
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
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "AUDIO",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "LANGUAGE",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "INCENTIVE OPTIONS",
            value: [
              { value1: "Not Available" },
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
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          { color: "", type: "bold", key: "IOT FEATURES", value: "" },
          {
            color: "",
            key: "REALTIME OPERATIONAL INFORMATION",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "DETAILED ERROR NOTIFICATION",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "STORAGE BIN FULL NOTIFICATION WITH REAL-TIME STATUS",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
          },
          {
            color: "",
            key: "DETAILED TRANSACTION INFORMATION",
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
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
            value: [
              { value1: "Not Available" },
              { value1: "" },
              { value1: "" },
            ],
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
        ],
        m = [
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/eco/RVM_eco.mp4",
            video_desc: "Energy-efficient process cooler",
          },
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/eco/RVM_eco_bin_video.mp4",
            video_desc: "Energy-efficient process cooler",
          },
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/eco/RVM_eco_full_video.mp4",
            video_desc: "Energy-efficient process cooler",
          },
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/eco/Plastic_bottle_passsing.mp4",
            video_desc: "Energy-efficient process cooler",
          },
          {
            video_src:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/eco/plastic_bottle_falling.mp4",
            video_desc: "Energy-efficient process cooler",
          },
        ],
        v = [
          {
            title: "Anti-Jamming Technology",
            subtitle:
              "Anti Jamming Technology is setting a new standard in recycling safety and minimum machine downtime. This innovative feature acts as a safeguard against potential damage arising due to intentional feeding of rigid items such as metal objects. Ensuring the safety of the internal mechanism, it guarantees secure and reliable operation. In the event of a jam, the system initiates an auto-reverse function, swiftly and autonomously resolving the jamming situation without the need for manual intervention.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/antijammingtechnology.png",
            type: "odd",
          },
          {
            title: "Bin-Full Notification",
            subtitle:
              "RVM-Eco's Bin Full Notification feature increases it’s operational efficiency. When the storage bin reaches capacity, the machine stops accepting new bottles. This ensures the safety and longevity of the internal mechanism. Simultaneously, a clear \"Bin Full'' indication prompts users to promptly empty the bin, to ensure minimum machine downtime. ",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/ring-close.jpg",
            type: "even",
          },
          {
            title: "Easy Movability",
            subtitle:
              "For corporate environments or closed premises where frequent transition between indoor and outdoor spaces or relocation within the facility is required,  four wheels provided at its base ensures effortless mobility.  ",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/wheel-close.jpg",
            type: "odd",
          },
          {
            title: "Compaction or Shredding",
            subtitle:
              "The Model also offers a choice between two different container processing options: Compactor and Shredder. It is mostly decided based on the setup of recycling facilities in the region hence This flexibility underscores our commitment to tailoring the machine to precisely meet each customer's unique needs and preferences. With the ability to customize the machine's functionality, we ensure that your recycling solution aligns perfectly with your requirements.\n\n        The RVM Eco offers a practical and economical solution for businesses and organizations looking to promote recycling and sustainability in smaller-scale settings. By incorporating the RVM Eco into your establishment, you can encourage responsible waste disposal habits and contribute to a greener future.\n        \n        \n        Contact us today to learn more about the RVM Eco and how it can be tailored to meet your specific recycling needs. Above images are for reference only. Endlos has the right to modify the specification and features based on the custom requirement.\n        ",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/Rvm-common/sharder.png",
            type: "even",
          },
        ],
        h = {
          description:
            "For the Non-Deposit Market, RVM Eco is a small, economical solution that can take empty plastic and metal containers. It works well in any setting where recycling activities may be motivated without the need for incentives. Due to its modest size, it is perfect for public areas, workplaces, supermarkets, and educational institutions.",
          additional: [
            {
              title: "Compact Size",
              description:
                "The RVM Eco is suitable for small enterprises, public areas, workplaces, community centers, supermarkets, and other places with smaller recycling quantities since it is made to fit into constrained spaces. Because of its small size, installation, and integration into existing areas are made simple.",
            },
            {
              title: "User-Friendly operation",
              description:
                "The user-friendly interface of RVM Eco ensures an easy and hassle-free recycling experience. The user-friendly interface makes recycling accessible to individuals of all ages and backgrounds and guides them through the process.",
            },
            {
              title: "Cost-Effective Solution",
              description:
                "For smaller businesses with lower recycling quantities, the RVM Eco provides an affordable recycling option. With minimum investment, it assists organizations and companies in achieving their sustainability objectives.",
            },
            {
              title: "Easy Installation",
              description:
                "It is designed to be simple and works with a plug-and-play methodology. The machine integrates seamlessly into your selected place after simple and intuitive setup. Without any difficult setup requirements, the simplicity of setup for our machine ensures a quick and effective start to your recycling journey.",
            },
            {
              title: "Minimal Maintenance",
              description:
                "Your experience of seamless operations is achievable with minimum downtime and minimal maintenance. We take care of your headaches by keeping it simple and almost maintenance free mechanisms for RVM-Eco.",
            },
            {
              title: "Durable Design",
              description:
                "Despite its compact size, the RVM Eco is built with durability in mind. Its robust construction ensures reliable performance and withstands the demands of daily recycling operations.",
            },
          ],
        };
      var p = l(9527),
        g = l.n(p),
        y = l(4457);
      function f(e) {
        let { children: a, value: l, index: i, ...s } = e;
        return (0, t.jsx)("div", {
          role: "tabpanel",
          hidden: l !== i,
          id: "simple-tabpanel-".concat(i),
          "aria-labelledby": "simple-tab-".concat(i),
          ...s,
          children: l === i && (0, t.jsx)(o.Z, { children: a }),
        });
      }
      function b(e) {
        return {
          id: "simple-tab-".concat(e),
          "aria-controls": "simple-tabpanel-".concat(e),
        };
      }
      l(4070), y.Z;
      var x = () => {
        let [e, a] = i.useState(0),
          l = (0, r.Z)(n.Z)({ "&.Mui-selected": { color: "#FF7722" } });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(g(), {
              children: [
                (0, t.jsx)("title", {
                  children: "Making Recycle easy with ECO RVM Machinest",
                }),
                (0, t.jsx)("meta", {
                  name: "description",
                  content:
                    "Endlos Innovative RVM: Compact, eco-friendly, and cost-effective, ideal for all sectors. Recycle plastic and aluminum containers effortlessly with RVM Eco",
                }),
                (0, t.jsx)("meta", {
                  name: "keywords",
                  content: "RVM machines",
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "rvm-eco-product-container ",
              children: (0, t.jsx)("div", {
                className: "row",
                children: (0, t.jsxs)("div", {
                  className: "col-lg-12 ",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "position-relative",
                      children: [
                        (0, t.jsx)("img", {
                          src: "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_eco/RVM_eco_1440x678_2.jpg",
                          alt: "Product Image",
                          className: "w-100 h-50",
                        }),
                        (0, t.jsx)("div", {
                          className: "card-position",
                          children: (0, t.jsx)("div", {
                            className: " p-4",
                            children: (0, t.jsx)("h1", {
                              className: "font-bold ",
                              children: (0, t.jsx)("strong", {
                                className: " m-0 p-0 fs-1",
                                children: "RVM ECO",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)(o.Z, {
                      sx: { width: "100%" },
                      children: [
                        (0, t.jsx)(o.Z, {
                          sx: {
                            borderBottom: 1,
                            borderColor: "divider",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          className: "container",
                          children: (0, t.jsxs)(s.Z, {
                            TabIndicatorProps: {
                              style: { backgroundColor: "#FF7722" },
                            },
                            value: e,
                            onChange: (e, l) => {
                              a(l);
                            },
                            "aria-label": "basic tabs example",
                            children: [
                              (0, t.jsx)(l, { label: "Overview", ...b(0) }),
                              (0, t.jsx)(l, {
                                label: "Technical Data",
                                ...b(1),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)(f, {
                          value: e,
                          index: 0,
                          children: (0, t.jsx)(c.Z, {
                            productVideos: m,
                            Details: h,
                            EvenOddImagesData: v,
                          }),
                        }),
                        (0, t.jsx)(f, {
                          value: e,
                          index: 1,
                          children: (0, t.jsx)(d.Z, { tableData: u }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsx)("div", { children: (0, t.jsx)(y.Z, {}) }),
          ],
        });
      };
    },
    9527: function (e, a, l) {
      e.exports = l(2636);
    },
  },
  function (e) {
    e.O(0, [257, 886, 461, 774, 888, 179], function () {
      return e((e.s = 6444));
    }),
      (_N_E = e.O());
  },
]);

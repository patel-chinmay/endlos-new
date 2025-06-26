(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [143],
  {
    9185: function (e, s, l) {
      "use strict";
      var a = l(5893);
      l(7294);
      var n = l(3750);
      s.Z = () =>
        (0, a.jsx)("div", {
          className: "col-lg-3 mt-4 mt-lg-0",
          children: (0, a.jsxs)("div", {
            className: "p-5",
            children: [
              (0, a.jsx)("p", { className: "fs-4", children: " Contact Us" }),
              (0, a.jsx)("div", {
                className:
                  "d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center",
                children: (0, a.jsx)("hr", { style: { width: "500px" } }),
              }),
              (0, a.jsxs)("p", {
                children: [
                  " ",
                  "Phone",
                  " ",
                  (0, a.jsx)("a", {
                    href: "https://api.whatsapp.com/send?phone=919327777854",
                    target: "_blank",
                    children: "+91 9327777854",
                  }),
                ],
              }),
              (0, a.jsxs)("span", {
                className: "text-success pointer",
                children: [
                  "Email ",
                  (0, a.jsx)(n.lzl, {}),
                  " ",
                  (0, a.jsx)("a", {
                    href: "mailto:info@endlos.in",
                    children: "info@endlos.in",
                  }),
                ],
              }),
            ],
          }),
        });
    },
    4457: function (e, s, l) {
      "use strict";
      var a = l(5893),
        n = l(7294),
        t = l(4876),
        r = l(9946),
        i = l(9033),
        c = l(1903),
        d = l(6886),
        o = l(913),
        m = l(7312),
        h = l(6195),
        x = l(3599),
        u = l(3457),
        j = l(9368),
        v = l(476),
        g = l(6501);
      s.Z = () => {
        let [e, s] = (0, n.useState)({
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
            let { name: a, value: n } = l.target;
            s({ ...e, [a]: n });
          },
          p = async (e) => {},
          f = () => {
            try {
              let l = Object.values(e)
                .filter((e) => "string" == typeof e)
                .every((e) => "" !== e.trim());
              if (e.agreed) {
                if (l) {
                  p(e), g.ZP.success("Thanks For Choosing us!!");
                  let l = Object.fromEntries(
                    Object.entries(e).map((e) => {
                      let [s] = e;
                      return [s, ""];
                    })
                  );
                  (l.agreed = !1), s(l);
                } else throw Error("Please fill in all fields");
              } else throw Error("Please agree to the terms and conditions");
            } catch (e) {
              g.ZP.error(
                e.message ? e.message : "Something went wrong pls retry"
              );
            }
          };
        return (0, a.jsxs)("div", {
          className: "contact-us-section pt-5",
          children: [
            (0, a.jsx)("h3", {
              className: "text-center opacity-75",
              children: "Contact Us",
            }),
            (0, a.jsxs)("div", {
              className: "container px-lg-5",
              children: [
                (0, a.jsxs)(t.Z, {
                  "aria-labelledby": "demo-controlled-radio-buttons-group",
                  name: "controlled-radio-buttons-group",
                  value: e.gender,
                  onChange: l,
                  className: "d-flex flex-row flex-lg-row ",
                  children: [
                    (0, a.jsx)(r.Z, {
                      name: "gender",
                      value: "mr.",
                      control: (0, a.jsx)(i.Z, {}),
                      label: "Mr.",
                    }),
                    (0, a.jsx)(r.Z, {
                      name: "gender",
                      value: "ms",
                      control: (0, a.jsx)(i.Z, {}),
                      label: "Ms.",
                    }),
                    (0, a.jsx)(r.Z, {
                      name: "gender",
                      value: "mrs",
                      control: (0, a.jsx)(i.Z, {}),
                      label: "Mrs.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "form-grid my-4",
                  children: [
                    (0, a.jsx)(c.Z, {
                      fullWidth: !0,
                      label: "First name",
                      name: "first_name",
                      value: e.first_name,
                      onChange: l,
                      variant: "filled",
                    }),
                    (0, a.jsx)(c.Z, {
                      fullWidth: !0,
                      value: e.last_name,
                      onChange: l,
                      label: "Last name",
                      name: "last_name",
                      variant: "filled",
                    }),
                    (0, a.jsx)(c.Z, {
                      value: e.company,
                      onChange: l,
                      name: "company",
                      fullWidth: !0,
                      label: "Company",
                      variant: "filled",
                    }),
                    (0, a.jsx)(c.Z, {
                      fullWidth: !0,
                      name: "city",
                      value: e.city,
                      onChange: l,
                      label: "City",
                      variant: "filled",
                    }),
                    (0, a.jsx)(c.Z, {
                      fullWidth: !0,
                      name: "country",
                      value: e.country,
                      onChange: l,
                      label: "Country",
                      variant: "filled",
                    }),
                    (0, a.jsx)(c.Z, {
                      fullWidth: !0,
                      label: "Email",
                      name: "email",
                      value: e.email,
                      onChange: l,
                      variant: "filled",
                    }),
                    (0, a.jsx)(d.ZP, {
                      container: !0,
                      children: (0, a.jsx)(d.ZP, {
                        container: !0,
                        spacing: 2,
                        children: (0, a.jsx)(d.ZP, {
                          item: !0,
                          xs: 12,
                          children: (0, a.jsx)(c.Z, {
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
                    (0, a.jsxs)(o.Z, {
                      variant: "filled",
                      children: [
                        (0, a.jsx)(m.Z, {
                          id: "demo-simple-select-filled-label",
                          children: "I am Interested In Following Group",
                        }),
                        (0, a.jsxs)(h.Z, {
                          name: "interested",
                          value: e.interested,
                          onChange: l,
                          children: [
                            (0, a.jsx)(x.Z, { value: "RVM", children: "RVM" }),
                            (0, a.jsx)(x.Z, { value: "OWC", children: "OWC" }),
                            (0, a.jsx)(x.Z, {
                              value: "Other",
                              children: "Other Products and Services",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(d.ZP, {
                  item: !0,
                  sm: 6,
                  children: (0, a.jsx)(c.Z, {
                    name: "message",
                    value: e.message,
                    onChange: l,
                    fullWidth: !0,
                    multiline: !0,
                    label: "Your Enquiry",
                    InputProps: { rows: 10 },
                  }),
                }),
                (0, a.jsxs)(u.Z, {
                  className: "py-2",
                  children: [
                    (0, a.jsx)(r.Z, {
                      control: (0, a.jsx)(j.Z, {
                        name: "agreed",
                        checked: e.agreed,
                        onChange: () => s((e) => ({ ...e, agreed: !e.agreed })),
                      }),
                      label: "I Agree",
                    }),
                    (0, a.jsx)(v.Z, {
                      children:
                        "I hereby consent to the data collected above being processed in accordance with the Privacy Policy for processing my request. This consent may be withdrawn at any time with future effect.",
                    }),
                    (0, a.jsx)("strong", {
                      className: "my-2",
                      children: "Consent*",
                    }),
                  ],
                }),
                (0, a.jsx)("button", {
                  onClick: () => f(),
                  className: "form-btn rounded",
                  children: "Submit",
                }),
              ],
            }),
          ],
        });
      };
    },
    6167: function (e, s, l) {
      "use strict";
      var a = l(5893);
      l(7294);
      var n = l(1664),
        t = l.n(n);
      s.Z = (e) => {
        let { EvenOddImagesData: s } = e,
          l = (e) => {
            let { title: s, subtitle: l, images: n, link: r } = e;
            return (0, a.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, a.jsx)("div", {
                  className: "col-lg-6  ",
                  children: (0, a.jsx)("img", {
                    src: n,
                    alt: "Product Image",
                    className: "img-fluid  rounded ",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "col-lg-6  ",
                  children: [
                    (0, a.jsx)("h2", { className: "fs-3", children: s }),
                    (0, a.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: l },
                    }),
                    r &&
                      (0, a.jsxs)(t(), {
                        href: r,
                        children: [
                          " ",
                          (0, a.jsx)("div", {
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
            let { title: s, subtitle: l, images: n, link: r } = e;
            return (0, a.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, a.jsxs)("div", {
                  className: "col-lg-6   ",
                  children: [
                    (0, a.jsx)("p", { className: "fs-3 ", children: s }),
                    (0, a.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: l },
                    }),
                    r &&
                      (0, a.jsxs)(t(), {
                        href: r,
                        children: [
                          " ",
                          (0, a.jsx)("div", {
                            className: "btn btn-dark",
                            children: "To The Product",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "col-lg-6  pt-2 ",
                  children: (0, a.jsx)("img", {
                    src: n,
                    alt: "Product Image",
                    className: "img-fluid rounded",
                  }),
                }),
              ],
            });
          };
        return (0, a.jsx)("div", {
          className: "bg-white  py-3  ",
          children: (0, a.jsx)("div", {
            className: "row  container m-0 p-0 mx-auto ",
            children:
              s &&
              s.map((e) => {
                let { title: s, images: t, subtitle: r, link: i } = e;
                return "odd" === e.type
                  ? (0, a.jsx)(l, { title: s, subtitle: r, images: t, link: i })
                  : (0, a.jsx)(n, {
                      title: s,
                      subtitle: r,
                      images: t,
                      link: i,
                    });
              }),
          }),
        });
      };
    },
    3104: function (e, s, l) {
      "use strict";
      var a = l(5893);
      l(7294);
      var n = l(6066);
      s.Z = (e) => {
        let { textAlign: s, productVideo: l } = e;
        return (0, a.jsx)("div", {
          className: "px-4 ",
          children: (0, a.jsx)(n.Z, {
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
                : l.map((e, s) =>
                    (0, a.jsx)(
                      "div",
                      {
                        children: (0, a.jsx)("video", {
                          src: e.video_src,
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          style: { height: "72vh", width: "100%" },
                        }),
                      },
                      s
                    )
                  )),
          }),
        });
      };
    },
    5580: function (e, s, l) {
      "use strict";
      var a = l(5893);
      l(7294),
        l(5675),
        l(1664),
        (s.Z = (e) => {
          let { data: s } = e;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              className: "container pt-2",
              children: (0, a.jsx)("div", {
                className: "row ",
                children:
                  (null == s ? void 0 : s.length) > 0 &&
                  (null == s
                    ? void 0
                    : s.map((e, s) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: "col-lg-12 col-xl-6  pt-3 ",
                            children: [
                              (0, a.jsx)("h4", { children: e.title }),
                              (0, a.jsxs)("div", {
                                className: "position-relative pt-3 mb-5",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "inner",
                                    children: (0, a.jsx)("img", {
                                      src: e.img_src,
                                      alt: e.title,
                                      className: "image-container ",
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "arrow-on-image pointer",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "row",
                                children: (0, a.jsx)("div", {
                                  className: "col-sm-10",
                                  children: (0, a.jsx)("p", {
                                    className: "text-height",
                                    children: e.subtitle,
                                  }),
                                }),
                              }),
                            ],
                          },
                          s
                        )
                      )),
              }),
            }),
          });
        });
    },
    7708: function (e, s, l) {
      "use strict";
      l(5893), l(7294);
    },
    9386: function (e, s, l) {
      "use strict";
      var a = l(5893),
        n = l(6167),
        t = l(3104);
      s.Z = (e) => {
        let { EvenOddImagesData: s, Details: l, productVideos: r } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            l &&
              (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)("div", {
                  className: "text-center w-md-75 m-auto px-2 my-5 container",
                  children: (0, a.jsx)("p", {
                    className: "lead",
                    dangerouslySetInnerHTML: {
                      __html: null == l ? void 0 : l.description,
                    },
                  }),
                }),
              }),
            r &&
              (0, a.jsx)("div", {
                className: "mb-5 pb-4",
                children: (0, a.jsx)(t.Z, { productVideo: r }),
              }),
            s &&
              (0, a.jsxs)("div", {
                className: "bg-white",
                children: [
                  l &&
                    r &&
                    (0, a.jsxs)("div", {
                      className: "",
                      children: [
                        (0, a.jsx)("hr", { className: "mb-3" }),
                        (0, a.jsx)("h3", {
                          className: "text-center fw-bolder",
                          children: "Key Features",
                        }),
                        (0, a.jsx)("hr", { className: "" }),
                      ],
                    }),
                  (0, a.jsx)(n.Z, { EvenOddImagesData: s }),
                ],
              }),
          ],
        });
      };
    },
    4006: function (e, s, l) {
      "use strict";
      var a = l(5893);
      s.Z = (e) => {
        let { tableData: s } = e;
        return (0, a.jsx)("div", {
          className: " technical-container container my-5 mx-auto pb-3 px-sm-5",
          children: (0, a.jsx)("table", {
            className: "table   ",
            children: (0, a.jsx)("tbody", {
              className: "",
              children:
                s &&
                s.map((e, s) =>
                  (0, a.jsxs)(
                    "tr",
                    {
                      className: "".concat(
                        "secondary" === e.color ? "table-upper-color" : ""
                      ),
                      children: [
                        (0, a.jsx)("td", {
                          className: "".concat(
                            "bold" === e.type ? "fw-bold  ps-4 " : "  ps-5",
                            " "
                          ),
                          children: (0, a.jsx)("small", { children: e.key }),
                        }),
                        e.value
                          ? e.value.map((e, s) =>
                              (0, a.jsx)("td", { children: e.value1 }, s)
                            )
                          : (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)("td", { children: "\xa0" }),
                                (0, a.jsx)("td", { children: "\xa0" }),
                                (0, a.jsx)("td", { children: "\xa0" }),
                              ],
                            }),
                      ],
                    },
                    s
                  )
                ),
            }),
          }),
        });
      };
    },
    9527: function (e, s, l) {
      e.exports = l(2636);
    },
  },
]);

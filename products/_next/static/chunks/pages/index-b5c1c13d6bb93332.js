(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(9966);
        },
      ]);
    },
    5458: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var s = t(5893),
        i = t(1664),
        a = t.n(i);
      function r(e, n) {
        return e.length <= n ? e : e.substring(0, n) + "...";
      }
      function o(e) {
        let { blog: n } = e;
        return (0, s.jsx)("div", {
          className: "card",
          children: (0, s.jsxs)("div", {
            className: "inline-block",
            children: [
              (0, s.jsx)("img", {
                className: "card-img-top",
                src: n.frontmatter.cover_image,
                alt: "img1",
                height: "220px",
                width: "500px",
              }),
              (0, s.jsxs)("div", {
                className: "card-body",
                children: [
                  (0, s.jsx)("h3", { children: r(n.frontmatter.title, 40) }),
                  (0, s.jsx)("p", { children: r(n.frontmatter.excerpt, 200) }),
                  (0, s.jsx)(a(), {
                    href: "/company/blog/".concat(n.slug),
                    children: (0, s.jsx)("button", {
                      type: "button",
                      className: "btn text-white bg-theme",
                      children: "Read More",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    4508: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var s = t(5893),
        i = t(5458);
      function a(e) {
        let { blogs: n } = e;
        return (0, s.jsx)("div", {
          className: "container m-5 pb-5 mx-auto",
          children: (0, s.jsx)("div", {
            className: "row row-cols-1 row-cols-md-3 g-4",
            children: n.map((e, n) =>
              (0, s.jsx)("div", {
                className: "",
                children: (0, s.jsx)("div", {
                  className: " d-flex flex-column",
                  children: (0, s.jsx)(
                    i.Z,
                    { blog: e, className: "flex-grow-1" },
                    n
                  ),
                }),
              })
            ),
          }),
        });
      }
    },
    4457: function (e, n, t) {
      "use strict";
      var s = t(5893),
        i = t(7294),
        a = t(4876),
        r = t(9946),
        o = t(9033),
        l = t(1903),
        c = t(6886),
        d = t(913),
        m = t(7312),
        h = t(6195),
        u = t(3599),
        g = t(3457),
        p = t(9368),
        x = t(476),
        v = t(6501);
      n.Z = () => {
        let [e, n] = (0, i.useState)({
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
            let { name: s, value: i } = t.target;
            n({ ...e, [s]: i });
          },
          j = async (e) => {},
          f = () => {
            try {
              let t = Object.values(e)
                .filter((e) => "string" == typeof e)
                .every((e) => "" !== e.trim());
              if (e.agreed) {
                if (t) {
                  j(e), v.ZP.success("Thanks For Choosing us!!");
                  let t = Object.fromEntries(
                    Object.entries(e).map((e) => {
                      let [n] = e;
                      return [n, ""];
                    })
                  );
                  (t.agreed = !1), n(t);
                } else throw Error("Please fill in all fields");
              } else throw Error("Please agree to the terms and conditions");
            } catch (e) {
              v.ZP.error(
                e.message ? e.message : "Something went wrong pls retry"
              );
            }
          };
        return (0, s.jsxs)("div", {
          className: "contact-us-section pt-5",
          children: [
            (0, s.jsx)("h3", {
              className: "text-center opacity-75",
              children: "Contact Us",
            }),
            (0, s.jsxs)("div", {
              className: "container px-lg-5",
              children: [
                (0, s.jsxs)(a.Z, {
                  "aria-labelledby": "demo-controlled-radio-buttons-group",
                  name: "controlled-radio-buttons-group",
                  value: e.gender,
                  onChange: t,
                  className: "d-flex flex-row flex-lg-row ",
                  children: [
                    (0, s.jsx)(r.Z, {
                      name: "gender",
                      value: "mr.",
                      control: (0, s.jsx)(o.Z, {}),
                      label: "Mr.",
                    }),
                    (0, s.jsx)(r.Z, {
                      name: "gender",
                      value: "ms",
                      control: (0, s.jsx)(o.Z, {}),
                      label: "Ms.",
                    }),
                    (0, s.jsx)(r.Z, {
                      name: "gender",
                      value: "mrs",
                      control: (0, s.jsx)(o.Z, {}),
                      label: "Mrs.",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "form-grid my-4",
                  children: [
                    (0, s.jsx)(l.Z, {
                      fullWidth: !0,
                      label: "First name",
                      name: "first_name",
                      value: e.first_name,
                      onChange: t,
                      variant: "filled",
                    }),
                    (0, s.jsx)(l.Z, {
                      fullWidth: !0,
                      value: e.last_name,
                      onChange: t,
                      label: "Last name",
                      name: "last_name",
                      variant: "filled",
                    }),
                    (0, s.jsx)(l.Z, {
                      value: e.company,
                      onChange: t,
                      name: "company",
                      fullWidth: !0,
                      label: "Company",
                      variant: "filled",
                    }),
                    (0, s.jsx)(l.Z, {
                      fullWidth: !0,
                      name: "city",
                      value: e.city,
                      onChange: t,
                      label: "City",
                      variant: "filled",
                    }),
                    (0, s.jsx)(l.Z, {
                      fullWidth: !0,
                      name: "country",
                      value: e.country,
                      onChange: t,
                      label: "Country",
                      variant: "filled",
                    }),
                    (0, s.jsx)(l.Z, {
                      fullWidth: !0,
                      label: "Email",
                      name: "email",
                      value: e.email,
                      onChange: t,
                      variant: "filled",
                    }),
                    (0, s.jsx)(c.ZP, {
                      container: !0,
                      children: (0, s.jsx)(c.ZP, {
                        container: !0,
                        spacing: 2,
                        children: (0, s.jsx)(c.ZP, {
                          item: !0,
                          xs: 12,
                          children: (0, s.jsx)(l.Z, {
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
                    (0, s.jsxs)(d.Z, {
                      variant: "filled",
                      children: [
                        (0, s.jsx)(m.Z, {
                          id: "demo-simple-select-filled-label",
                          children: "I am Interested In Following Group",
                        }),
                        (0, s.jsxs)(h.Z, {
                          name: "interested",
                          value: e.interested,
                          onChange: t,
                          children: [
                            (0, s.jsx)(u.Z, { value: "RVM", children: "RVM" }),
                            (0, s.jsx)(u.Z, { value: "OWC", children: "OWC" }),
                            (0, s.jsx)(u.Z, {
                              value: "Other",
                              children: "Other Products and Services",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(c.ZP, {
                  item: !0,
                  sm: 6,
                  children: (0, s.jsx)(l.Z, {
                    name: "message",
                    value: e.message,
                    onChange: t,
                    fullWidth: !0,
                    multiline: !0,
                    label: "Your Enquiry",
                    InputProps: { rows: 10 },
                  }),
                }),
                (0, s.jsxs)(g.Z, {
                  className: "py-2",
                  children: [
                    (0, s.jsx)(r.Z, {
                      control: (0, s.jsx)(p.Z, {
                        name: "agreed",
                        checked: e.agreed,
                        onChange: () => n((e) => ({ ...e, agreed: !e.agreed })),
                      }),
                      label: "I Agree",
                    }),
                    (0, s.jsx)(x.Z, {
                      children:
                        "I hereby consent to the data collected above being processed in accordance with the Privacy Policy for processing my request. This consent may be withdrawn at any time with future effect.",
                    }),
                    (0, s.jsx)("strong", {
                      className: "my-2",
                      children: "Consent*",
                    }),
                  ],
                }),
                (0, s.jsx)("button", {
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
    6167: function (e, n, t) {
      "use strict";
      var s = t(5893);
      t(7294);
      var i = t(1664),
        a = t.n(i);
      n.Z = (e) => {
        let { EvenOddImagesData: n } = e,
          t = (e) => {
            let { title: n, subtitle: t, images: i, link: r } = e;
            return (0, s.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, s.jsx)("div", {
                  className: "col-lg-6  ",
                  children: (0, s.jsx)("img", {
                    src: i,
                    alt: "Product Image",
                    className: "img-fluid  rounded ",
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "col-lg-6  ",
                  children: [
                    (0, s.jsx)("h2", { className: "fs-3", children: n }),
                    (0, s.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: t },
                    }),
                    r &&
                      (0, s.jsxs)(a(), {
                        href: r,
                        children: [
                          " ",
                          (0, s.jsx)("div", {
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
            let { title: n, subtitle: t, images: i, link: r } = e;
            return (0, s.jsxs)("div", {
              className: "row mb-3",
              children: [
                (0, s.jsxs)("div", {
                  className: "col-lg-6   ",
                  children: [
                    (0, s.jsx)("p", { className: "fs-3 ", children: n }),
                    (0, s.jsx)("p", {
                      className: " fw-normal text-justify",
                      dangerouslySetInnerHTML: { __html: t },
                    }),
                    r &&
                      (0, s.jsxs)(a(), {
                        href: r,
                        children: [
                          " ",
                          (0, s.jsx)("div", {
                            className: "btn btn-dark",
                            children: "To The Product",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "col-lg-6  pt-2 ",
                  children: (0, s.jsx)("img", {
                    src: i,
                    alt: "Product Image",
                    className: "img-fluid rounded",
                  }),
                }),
              ],
            });
          };
        return (0, s.jsx)("div", {
          className: "bg-white  py-3  ",
          children: (0, s.jsx)("div", {
            className: "row  container m-0 p-0 mx-auto ",
            children:
              n &&
              n.map((e) => {
                let { title: n, images: a, subtitle: r, link: o } = e;
                return "odd" === e.type
                  ? (0, s.jsx)(t, { title: n, subtitle: r, images: a, link: o })
                  : (0, s.jsx)(i, {
                      title: n,
                      subtitle: r,
                      images: a,
                      link: o,
                    });
              }),
          }),
        });
      };
    },
    9966: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return j;
          },
          default: function () {
            return f;
          },
        });
      var s = t(5893);
      t(7294);
      var i = t(2546);
      t(9008), t(4256), t(4233);
      var a = t(4988),
        r = t(3750),
        o = (e) => {
          let { data: n } = e;
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(i.tq, {
              autoplay: { delay: 2e4, disableOnInteraction: !1 },
              loop: !0,
              pagination: {
                clickable: !0,
                renderBullet: function (e, n) {
                  return (
                    '<span class="' +
                    n +
                    '">' +
                    [
                      "Recycling Machines",
                      "Solid Waste Management",
                      "Vending Machines",
                    ][e] +
                    "</span>"
                  );
                },
              },
              slidesPerView: 1,
              modules: [a.pt, a.tl, a.W_],
              navigation: { nextEl: "#swiper-forward" },
              children: n.map((e, n) =>
                (0, s.jsxs)(
                  i.o5,
                  {
                    children: [
                      (0, s.jsx)("video", {
                        src: e.src,
                        className: "video-container",
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                      }),
                      (0, s.jsxs)("div", {
                        className: "swiper-content ",
                        children: [
                          (0, s.jsx)("h5", {
                            className: "fs-2 text-color",
                            children: e.title,
                          }),
                          (0, s.jsx)(r.PxJ, {
                            id: "swiper-forward",
                            className: "text-color ",
                            size: 45,
                            style: { cursor: "pointer" },
                          }),
                        ],
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
          });
        };
      t(1664);
      var l = (e) => {
        let { data: n } = e;
        return (0, s.jsx)(s.Fragment, {
          children: n.map((e, n) =>
            (0, s.jsxs)(
              "div",
              {
                className: "container text-center",
                children: [
                  (0, s.jsx)("h1", {
                    className: "heading-container w-69 ",
                    children: e.title,
                  }),
                  (0, s.jsx)("h2", {
                    className: "heading-container w-69 ",
                    children: e.title2,
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "paragraph-container endlos-text-justify mt-4 w-lg-75",
                    children: e.subtitle,
                  }),
                ],
              },
              n
            )
          ),
        });
      };
      let c = [
          {
            title: "Smart RVMs for DRS Market.",
            src: "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/1.mp4",
            link: "",
          },
          {
            title: "Quickly converts your organic waste to Fertilizer.",
            src: "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/2.mp4",
            link: "",
          },
          {
            title: "Digitally Operated Smart Vending Machines.",
            src: "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/3.mp4",
            link: "",
          },
        ],
        d = [
          {
            title: "Reverse Vending Machine RVM In India",
            title2:
              "(Get Reverse Vending Machine RVM in India - Endlos Innovation)",
            subtitle:
              "We understand that one size doesn't fit all. Our focus is to uniquely address your concerns and provide effective solutions. At ENDLOS, We're not just building custom Reverse Vending Machines – we're crafting RVM machines in India supporting a global movement towards sustainability!        ",
          },
        ],
        m = [
          {
            title: "Reverse Vending Machines",
            subtitle:
              "Our RVM Machines have been specifically designed for countries with and without Deposit Return Scheme (DRS) or Container Deposit Law (CDL). They can recognize barcodes, size, shape, weight, and material type to streamline container disposal in the most efficient way. From plastic bottles to glass containers, seamless recycling with one single machine. Reverse Vending Machines aren't only about encouraging recycling - they transform it into something rewarding, increasing involvement and enjoyment.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_family_photo/RVM_family_1600x900.jpg",
            alt: "Recycling Machines",
            link: "/products/reverse-vending-machines/",
            type: "odd",
          },
          {
            title: "Solid Waste Management",
            subtitle:
              "Our Organic Waste Composter completes nature's circle. It quickly converts what comes from the earth back into soil, using helpful bacteria and a well-maintained environment with the help of technology. It speeds up the decomposition process without bad smells and many days of human efforts - contributing to a cleaner environment in no time.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/owc/OWC_family_photo/OWC_family_1600x900.jpg",
            link: "/products/organic-waste-composter/",
            type: "even",
          },
          {
            title: "Custom Vending Machines",
            subtitle:
              "With our cutting-edge reverse vending machines we improve your vending skills with inventive solutions that range from challenging the vending standard to promoting eco-friendly products. Our objective is to create a vending landscape that fosters an environmentally friendly future while satisfying appetites.",
            images:
              "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/cvm/mask-vending-machine.jpeg",
            link: "/products/custom-vending-machine/",
            type: "odd",
          },
        ],
        h = [
          {
            title: "Tailored Customization",
            description:
              "Our products are customized to meet your specific needs, reducing downtime by integrating smoothly into your operations.",
            icon: "/assets/images/why-choose-us/custom.svg",
          },
          {
            title: "Expert Engineering",
            description:
              "We prioritize simplicity in our machine-building process, ensuring efficiency and ease-of-use for users through expert engineering.",
            icon: "/assets/images/why-choose-us/engineering.svg",
          },
          {
            title: "Dedicated Support",
            description:
              "The support team is dedicated to providing prompt assistance, ensuring smooth onsite operations, and resolving any operational issues.",
            icon: "/assets/images/why-choose-us/support.svg",
          },
          {
            title: "Budgetary Solutions",
            description:
              "The waste recycling machines are designed to be cost-effective optimized to operate seamlessly without increasing costs.",
            icon: "/assets/images/why-choose-us/solution.svg",
          },
          {
            title: "Vast Experience",
            description:
              "Endlos is a Reverse Vending Machine manufacture in India with a successful track record of implementing projects globally.",
            icon: "/assets/images/why-choose-us/experience.svg",
          },
        ];
      var u = t(9527),
        g = t.n(u),
        p = t(6167),
        x = t(4457),
        v = t(4508),
        j = !0;
      function f(e) {
        let { blogs: n } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(g(), {
              children: [
                (0, s.jsx)("title", {
                  children:
                    "Reverse Vending Machine Manufacturer | Endlos Innovation-India",
                }),
                (0, s.jsx)("meta", {
                  name: "description",
                  content:
                    "Elevate sustainability with our advanced recycling machines. Convert waste into resources efficiently. Embrace eco-friendly technology now-Endlos",
                }),
                (0, s.jsx)("meta", {
                  name: "p:domain_verify",
                  content: "c515420d97824695296fd1219b70e145",
                }),
                (0, s.jsx)("meta", {
                  name: "keywords",
                  content:
                    "reverse vending machine companies, reverse vending machine, RVM Machine Manufacturer in India, RVM Machine in India, Reverse Vending Machine in India, Recycling Machines",
                }),
                (0, s.jsx)("meta", {
                  property: "og:title",
                  content: "Top Reverse Vending Machine Manufacturers in India",
                }),
                (0, s.jsx)("meta", {
                  property: "og:description",
                  content:
                    "Explore the best reverse vending machine manufacturers in India, top companies, RVM parts, and nearby options. Discover innovative recycling solutions!",
                }),
                (0, s.jsx)("meta", {
                  property: "og:site_name",
                  content: "Endlos Innovations",
                }),
                (0, s.jsx)("meta", { property: "og:type", content: "article" }),
                (0, s.jsx)("meta", {
                  property: "og:image",
                  content:
                    "https://www.endlos.in/industries/recycling-machines/",
                }),
                (0, s.jsx)("meta", {
                  property: "og:url",
                  content: "https://www.endlos.in/",
                }),
                (0, s.jsx)("meta", {
                  property: "og:url",
                  content: "endlos.in",
                }),
                (0, s.jsx)("meta", { property: "og:type", content: "website" }),
                (0, s.jsx)("meta", {
                  property: "og:title",
                  content: "Top Reverse Vending Machine Manufacturers in India",
                }),
                (0, s.jsx)("meta", {
                  property: "og:description",
                  content:
                    "Explore the best reverse vending machine manufacturers in India, top companies, RVM parts, and nearby options. Discover innovative recycling solutions!",
                }),
                (0, s.jsx)("meta", {
                  property: "og:image",
                  content:
                    "https://www.endlos.in/industries/recycling-machines/",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, s.jsx)("meta", {
                  property: "twitter:url",
                  content: "endlos.in",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:title",
                  content:
                    "Reverse Vending Machine In India | Endlos Innovations",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:description",
                  content:
                    "Endlos Innovation is considered the Best RVM machine manufacturer in India. Being a solid waste management company,",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:image",
                  content:
                    "https://www.endlos.in/industries/recycling-machines/",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)(o, { data: c }),
                (0, s.jsxs)("div", {
                  className: "wrapper-case-studies py-5",
                  children: [
                    (0, s.jsx)(l, { data: d }),
                    (0, s.jsx)("hr", { className: "mt-5" }),
                    (0, s.jsx)("h3", {
                      className: "text-center font-bold",
                      children: "Our Offerings",
                    }),
                    (0, s.jsx)("hr", { className: "" }),
                    (0, s.jsx)(p.Z, { EvenOddImagesData: m }),
                    (0, s.jsx)("hr", { className: "mb-3" }),
                    (0, s.jsx)("h3", {
                      className: "text-center",
                      children: "Why Choose Endlos Innovations?",
                    }),
                    (0, s.jsx)("hr", { className: "mb-5" }),
                    (0, s.jsx)("div", {
                      className: "py-1 container  d-flex flex-wrap gap-4 ",
                      children:
                        null == h
                          ? void 0
                          : h.map((e, n) =>
                              (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsxs)("div", {
                                  class: " inline-block    mx-auto  ",
                                  style: { width: "15rem", overflow: "clip" },
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className:
                                        "  d-flex justify-center position-relative  ",
                                      children: [
                                        (0, s.jsx)("img", {
                                          src: e.icon,
                                          alt: "img1",
                                          height: "70px",
                                          className: "mx-auto mt-5",
                                        }),
                                        (0, s.jsx)("img", {
                                          src: "/assets/images/why-choose-us/arrow-up.svg",
                                          alt: "img1",
                                          height: "120px",
                                          className:
                                            "mx-auto  position-absolute top-0  left-4",
                                          style: {
                                            left: "0px",
                                            right: "0px",
                                            height: "200px",
                                          },
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      class: "",
                                      children: [
                                        (0, s.jsx)("h4", {
                                          className:
                                            "text-center h-auto my-4 fw-bold",
                                          style: { color: "#FD8236" },
                                          children: e.title,
                                        }),
                                        (0, s.jsx)("p", {
                                          className: "justify fw-normal ",
                                          children: e.description,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              })
                            ),
                    }),
                  ],
                }),
                (0, s.jsx)("hr", { className: "" }),
                (0, s.jsx)("h3", {
                  className: "text-center",
                  children: "Blogs",
                }),
                (0, s.jsx)("hr", { className: "mb-5" }),
                (0, s.jsx)("div", {
                  className: "wrapper-case-studies",
                  children: (0, s.jsx)(v.Z, { blogs: n }),
                }),
              ],
            }),
            (0, s.jsx)(x.Z, {}),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [257, 886, 494, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);

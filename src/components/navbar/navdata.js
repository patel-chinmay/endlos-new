export const navbar = [
  // {
  //   id: 1,
  //   navItem: "Home",
  //   link: "/",
  //   // icon: true,
  // },
  {
    id: 2,
    navItem: "RVM",
    link: "/products/reverse-vending-machines",
    // icon: true,
  },
  // {
  //   id: 3,
  //   navItem: "DRS",
  //   link: "/products/reverse-vending-machines",
  //   // icon: true,
  // },
  {
    id: 4,
    navItem: "Projects",
    link: "/company/our-projects/",
    // icon: true,
  },

  {
    id: 4,
    navItem: "About Us",
    link: "/company/about-endlos/",
    // icon: true,
  },
  {
    id: 5,
    navItem: "Blog",
    link: "/company/blog/",
    // icon: true,
  },
  {
    id: 6,
    navItem: "Contact Us",
    link: "/company/contact-us/",
    // icon: true,
  },
  {
    id: 7,
    navItem: "endlosadmin",
    link: "/company/endlosadmin/",
    // icon: true,
  },
];

export const HomeDropdown = [
  {
    key: "Industries",
    img: "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/other/industries.jpg",
    title: "Industries",
    paragraph:
      "Get an overview of all industries that benefit from our wide product range. You will also find various case studies about customer projects that drive our customers’ success",
    children: [
      {
        id: 1,
        parentItem: "Industries",
        link: "/industries",
      },
      {
        id: 2,
        parentItem: "Recycling Machines",
        link: "/industries/recycling-machines",
      },
      {
        id: 3,
        parentItem: "Solid Waste Management",
        link: "/industries/solid-waste-management",
      },
    ],
  },
];
export const ProductsDropdown = [
  {
    key: "Products",
    img: "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/other/sm_products.jpg",
    title: "Products",
    paragraph:
      "Get an overview of all industries that benefit from our wide product range. You will also find various case studies about customer projects that drive our customers’ success",
    children: [
      {
        id: 1,
        parentItem: "Reverse Vending Machines",
        link: "/products/reverse-vending-machines",
        subchildren: [
          {
            key: "Reverse Vending Machines",
            children: [
              {
                subchildItem: "Reverse Vending Machines",
                link: "/products/reverse-vending-machines",
              },
              {
                subchildItem: "RVM Eco",
                link: "/products/reverse-vending-machines/RVM-ECO",
              },
              {
                subchildItem: "RVM Pro",
                link: "/products/reverse-vending-machines/RVM-PRO",
              },
              {
                subchildItem: "RVM Premium",
                link: "/products/reverse-vending-machines/RVM-PREMIUM",
              },
              {
                subchildItem: "RVM DRS 11",
                link: "/products/reverse-vending-machines/DRS-11",
              },
              {
                subchildItem: "RVM DRS 22",
                link: "/products/reverse-vending-machines/DRS-22",
              },
              {
                subchildItem: "RVM DRS 35",
                link: "/products/reverse-vending-machines/DRS-35",
              },
            ],
          },
        ],
      },

      // {
      //   id: 2,
      //   parentItem: "Organic Waste Composters",
      //   link: "/products/organic-waste-composter",
      // },
      // {
      //   id: 3,
      //   parentItem: "Custom Vending Machines",
      //   link: "/products/custom-vending-machine",
      // },
    ],
  },
];

export const CompanyDropdown = [
  {
    key: "Endlos Innovations",
    img: "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/other/company.png",
    title: "Endlos Innovations",
    paragraph: `At ENDLOS, we design, develop and manufacture Innovative Products and services in various segments. We believe in “The ENDLESS POSSIBILITIES" of solution.`,
    children: [
      {
        id: 2,
        parentItem: "About Endlos",
        link: "/company/about-endlos",
      },
      {
        id: 3,
        parentItem: "Our Team",
        link: "/company/our-team",
      },
      // {
      //   id: 4,
      //   parentItem: "Career",
      //   link: "/company/careers",
      // },

      // {
      //   id: 6,
      //   parentItem: "Contact",
      //   link: "/company/contact-us",
      // },
      // {
      //   id: 6,
      //   parentItem: "Blog",
      //   link: "/company/blog",
      // },
    ],
  },
];

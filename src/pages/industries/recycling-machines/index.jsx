"use client";
import React, { useEffect, useState } from "react";
// import "./recycling-machines.css";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import Head from "next/head";
import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";

const RecyclingMachines = () => {
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
        <title>
          Automatic Waste Recycling Machine for an Efficient Solution
        </title>
        <meta
          name="description"
          content="Endlos innovation leads the way in the recycling industry, by bringing automation recycling machines to create a greener, sustainable future."
        />
        <meta name="keywords" content="waste recyling machine" />
      </Head>

      <div
        className="bg-image d-flex align-items-center"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_family_photo/RVM_family_1600x900.jpg')`,
        }}
      >
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <div className="row">
            <div className="col-sm-12">
              <div className="container px-5 py-5 responsive-container">
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <div className="d-flex justify-between align-items-center">
                    <div>Home</div>{" "}
                    <div>
                      <AiOutlineRight />
                    </div>
                  </div>
                  <div className="d-flex justify-between align-items-center">
                    <div>Industries</div>{" "}
                    <div>
                      <AiOutlineRight />
                    </div>
                  </div>
                  <div className="d-flex justify-between align-items-center">
                    <div>Recycling Machines</div>{" "}
                    <div>
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>
                <div className="container py-2">
                  <h1 className="text-secondary text-center font-weight-bold py-5">
                    Automation Waste Recycling Machine Industry
                  </h1>
                  <p className="lead justify">
                    Automation has been transforming various industries, and the
                    waste recycling machine industry is no exception. Waste
                    Recycling machines are equipped with advanced technologies
                    such as sensors, artificial intelligence, and machine
                    learning algorithms to automate various tasks and improve
                    the efficiency of the recycling process.
                  </p>
                  <p className="lead justify">
                    One example of automation in the recycling industry is using
                    sensors in recycling machines to sort and separate different
                    types of materials. These sensors can detect different
                    colours, shapes, and sizes of materials and then sort them
                    into different categories, making recycling more efficient
                    and accurate.
                  </p>
                  <p className="lead justify">
                    Artificial intelligence and machine learning algorithms are
                    also being used in recycling machines to improve the
                    accuracy of sorting and reduce the chances of contamination.
                    These algorithms can learn from the data collected by
                    sensors and identify patterns in the material, making it
                    easier to sort them accurately.
                  </p>
                  <p className="lead justify">
                    Robotic arms are also being used in waste recycling machines
                    to pick up and sort materials, reducing the need for human
                    labour and improving the speed and accuracy of the recycling
                    process.
                  </p>
                  <p className="text-black fw-bold fs-5 justify">
                    “There{`'`}s a current push to recycle - thanks to media
                    coverage and increased public awareness worldwide. Recycling
                    isn't a new concept. The concept of conservation of
                    resources is a concept that has existed for ages and has had
                    varying successes and also a rise in popularity through the
                    decades.”
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <hr className="w-100" />
                </div>
                <div>
                  <h2 className="py-2 text-secondary">
                    The History of Recycling and How It Has Evolved
                  </h2>
                  <p className="lead justify">
                    Over the centuries, the reuse and use of natural and
                    artificial resources have been crucial in the evolution and
                    sustainability of civilizations throughout history,
                    especially in times of extreme poverty. The primary
                    objective of waste recycling machines is to eliminate
                    garbage by turning things that can't be utilized in their
                    present state (broken or depleted.) into brand new materials
                    by returning them to the substances they were constructed
                    from.
                  </p>
                </div>
                <div className="py-1">
                  <h3 className="text-secondary">
                    Recycling Throughout History
                  </h3>
                  <p className="lead justify">
                    By utilizing many processes and the most advanced
                    techniques, today, people can get similar items from
                    different made-from-source materials, but that was only
                    sometimes the case. For example, the absence of local
                    resources and the inability to produce complicated items,
                    like weapons made of metal, often led to civilisations
                    smashing the destroyed ones in addition to other metal
                    objects of all types, and then using them again to create
                    new weapons.
                  </p>
                </div>
                <div className="px-5 py-2">
                  <h3 className=" text-secondary">
                    Evolution Of Waste Recycling Machine
                  </h3>
                  <p className="lead justify">
                    In the Mediterranean region, glass has been broken, becoming
                    new objects. In early Rome, bronze coins were used to make
                    their appearance into jewellery. Ceramics were subjected to
                    a recycling process. Scrapping metal and textile recycling
                    was common throughout the Middle Ages.
                  </p>
                </div>
                <div className="px-5 py-4">
                  <h2 className=" text-secondary">The 20th Century</h2>
                  <p className="lead justify">
                    The early 20th century was defined by the rapid growth of
                    industrialization, and the recycling process was considered
                    to be the process of making materials. When the Second World
                    War broke out, the necessity of cautious use of resources
                    was evident. As a result, recycling products became
                    available. Wartime brought about a general shortage of
                    products for everyday use, along with food restrictions.
                    This also led to numerous campaigns urging the reuse and
                    recycling of all suitable items. Following the World War,
                    some countries maintained this trend, while others (mainly
                    Western ones) became more environmentally conscious.
                    Particularly in these countries, a growing interest in
                    recycling and environmental concerns developed in the 1960s.
                  </p>
                  <p className="lead justify">
                    In the 1960s, the hippie generation took an active part in
                    the struggle to rebel against consumerism and the power of
                    big corporations on markets and resources. In 1986, a law
                    was passed through Europe as a formal proposal to safeguard
                    the natural environment. Then, EU directives related to
                    avoiding excessive packaging and reducing waste came into
                    the market a couple of years later.
                  </p>
                </div>
                <div className="py-4">
                  <h2 className="text-secondary">Present Day</h2>
                  <p className="lead justify">
                    RVM machine is standard throughout all industrialized
                    countries, from private households to privately owned
                    businesses. The focus is on organic waste such as metals,
                    paper, glass, and plastic. It's widespread to recycle
                    textiles and electronic items.
                  </p>
                  <p className="lead justify">
                    Much attention is paid to Reverse Vending Machine is getting
                    more popular nowadays. The campaigns that promote recycling
                    are backed by mass media across the board and reach a broad
                    audience with higher success rates. Nowadays, it's not
                    simply a trend but an entire industry and comes with many
                    products to help it, like recycling bins, television shows
                    and publications, stickers, posters, and many more.
                  </p>
                </div>
                <div className="px-3 py-2">
                  <h4 className=" text-secondary px-4">
                    Solutions for Waste Recycling machines
                  </h4>
                  <p className="text-secondary px-4 py-2 justify text-lead">
                    Endlos Innovation has developed several solutions for
                    recycling machines, including:
                  </p>
                  <ul>
                    <h3 className="fw-bold text-secondary fs-5">
                      Reverse Vending Machines:
                    </h3>
                    <li className="lead justify">
                      These machines accept empty beverage containers, such as
                      plastic bottles and aluminium cans, and refund customers
                      in exchange for recyclable materials. The reverse vending
                      machines use advanced technology to identify the material
                      and determine its value, which makes the recycling process
                      faster and more efficient.
                    </li>
                    <h3 className="fw-bold text-secondary fs-5">
                      Organic Waste Composter:{" "}
                    </h3>
                    <li className="lead justify">
                      Endlos Innovation has also developed an organic waste
                      composter that can turn food waste into nutrient-rich
                      compost. The machine uses a combination of heat, moisture,
                      and bacteria to break down the organic waste, which can be
                      used to fertilize gardens or agriculture. The organic
                      waste composter process is environmentally friendly and
                      helps reduce the amount of organic waste that goes into
                      landfills.
                    </li>
                    <h3 className="fw-bold text-secondary fs-5">
                      Product Vending Machine:
                    </h3>
                    <li className="lead justify">
                      This Reverse Vending Machine dispenses reusable water
                      bottles, grocery bags, and other sustainable items. The
                      reverse vending machine encourages customers to adopt
                      eco-friendly habits and reduce their use of single-use
                      plastics. Endlos Innovation's product reverse vending
                      machine also uses innovative technology to track inventory
                      levels and automatically restock products when needed.
                    </li>
                  </ul>
                </div>
                <div className="py-4">
                  <p className="fs-3 text-secondary mb-5">
                    Smart Production for an advanced Recycling industry
                  </p>
                  <div className="embed-container">
                    <iframe
                      src="https://www.youtube.com/embed/yYwVirBx_NY"
                      title="Reverse Vending Machine in India by ENDLOS"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <small>
                    Automated ladder frame production: another endlos innovation
                    for the automotive industry
                  </small>
                </div>
                <p className="lead">
                  Overall, Endlos Innovation's recycling machines offer
                  practical solutions to reduce waste, promote sustainability,
                  and encourage environmental awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactUsEmail />
    </>
  );
};

export default RecyclingMachines;

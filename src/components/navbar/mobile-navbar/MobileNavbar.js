import React, { useState } from "react";
// import "./mobile-navbar.css";
import { BsArrowLeft } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
// import "./mobile-navbar.css";
import Link from "next/link";

const MobileNavbar = ({ sethamBurgerMenu }) => {
  const [toggle, setToggle] = useState({
    home: false,
    home1: false,
    home2: false,
    home3: false,
    home4: false,
    about: false,
  });

  const handleToggle = (key) => {
    setToggle({ ...toggle, [key]: !toggle[key] });
  };

  return (
    <div className="d-lg-none dropdown-section">
      <div className="dropdown-container ">
        <div className="multi-level-menu-wrapper">
          <div className="container">
            <div className="multi-level-menu-wrapper">
              <div className="mainMenu">
                <ul>
                  {/* <li className="hasSubMenu">
                    <Link href="/industries" onClick={()=>sethamBurgerMenu(false)}>Industries</Link>
                    <MdNavigateNext
                      onClick={() => handleToggle("about")}
                      className="trigger"
                    />
                  </li> */}
                  {/* <li className="hasSubMenu">
                    <Link href="/" onClick={() => sethamBurgerMenu(false)}>
                      Products
                    </Link>

                    <MdNavigateNext
                      onClick={() => handleToggle("home")}
                      className="trigger"
                    />
                  </li> */}
                  <li>
                    <Link
                      href="/products/reverse-vending-machines/"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      RVM
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/company" onClick={()=>sethamBurgerMenu(false)}>Company</Link>
                  </li> */}
                  <li>
                    <Link
                      href="/company/our-projects"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company/about-endlos"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      About Endlos
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/company/careers" onClick={()=>sethamBurgerMenu(false)}>Career</Link>
                  </li> */}
                  <li>
                    <Link
                      href="/company/contact-us"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company/blog"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={`${toggle.home ? "subMenu active" : "subMenu"}`}>
                <div className="backTrigger">
                  <BsArrowLeft onClick={() => handleToggle("home")} />
                </div>
                <ul>
                  <li>
                    <Link
                      href="/products"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Products
                    </Link>
                  </li>
                  <li className="hasSubMenu">
                    <Link
                      href="/products/reverse-vending-machines"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Reverse Vending Machines
                    </Link>
                    <MdNavigateNext
                      onClick={() => handleToggle("home1")}
                      className="trigger"
                    />
                  </li>
                  <li className="hasSubMenu">
                    <Link
                      href="/products/organic-waste-composter"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Organic Waste Composter
                    </Link>
                    <MdNavigateNext
                      onClick={() => handleToggle("home2")}
                      className="trigger"
                    />
                  </li>
                  <li className="hasSubMenu">
                    <Link
                      href="/products/custom-vending-machine"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Custom Vending Machine
                    </Link>
                    <MdNavigateNext
                      onClick={() => handleToggle("home3")}
                      className="trigger"
                    />
                  </li>
                </ul>
              </div>
              <div className={`${toggle.about ? "subMenu active" : "subMenu"}`}>
                <div className="backTrigger">
                  <BsArrowLeft onClick={() => handleToggle("about")} />
                </div>
                <ul>
                  <li className="hasSubMenu">
                    <Link
                      href="/industries"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/recycling-machines"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Recycling Machines
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/solid-waste-management"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Solid Waste Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/vending-machines"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Vending Machines
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/hospitality-case-goods"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Hospitality Case Goods
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={`${toggle.home1 ? "subMenu active" : "subMenu"}`}>
                <div className="backTrigger">
                  <BsArrowLeft onClick={() => handleToggle("home1")} />
                </div>
                <ul>
                  <li>
                    <Link
                      href="/products/reverse-vending-machines"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Reverse Vending Machines
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/reverse-vending-machines/RVM-ECO"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      RVM Eco
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/reverse-vending-machines/RVM-PRO"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      RVM Pro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/reverse-vending-machines/RVM-PREMIUM"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      RVM Premium
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/reverse-vending-machines/DRS-11"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      RVM DRS 11
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/reverse-vending-machines/DRS-22"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      RVM DRS 22
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/reverse-vending-machines/DRS-35"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      RVM DRS 35
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={`${toggle.home2 ? "subMenu active" : "subMenu"}`}>
                <div className="backTrigger">
                  <BsArrowLeft onClick={() => handleToggle("home2")} />
                </div>
                <ul>
                  <li>
                    <Link
                      href="/products/organic-waste-composter"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Organic Waste Composter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/organic-waste-composter/OWC-50"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      END OWC 50
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/organic-waste-composter/OWC-100"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      END OWC 100
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/organic-waste-composter/OWC-300"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      END OWC 300
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/organic-waste-composter/OWC-500"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      END OWC 500
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/organic-waste-composter/OWC-1000"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      END OWC 1000
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={`${toggle.home3 ? "subMenu active" : "subMenu"}`}>
                <div className="backTrigger">
                  <BsArrowLeft onClick={() => handleToggle("home3")} />
                </div>
                <ul>
                  <li>
                    <Link
                      href="/products/custom-vending-machine"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Custom Vending Machine
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/custom-vending-machine/mask-vending-machine"
                      onClick={() => sethamBurgerMenu(false)}
                    >
                      Mask Vending Machine
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;

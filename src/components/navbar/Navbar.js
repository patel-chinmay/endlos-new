"use client";
import React, { useEffect, useRef, useState } from "react";
// import "./navbar.css";
import { AiOutlineDown, AiOutlineUp, AiOutlineClose } from "react-icons/ai";

import {
  CompanyDropdown,
  Dropdown,
  HomeDropdown,
  ProductsDropdown,
  child,
  grandParent,
  navbar,
  subchild,
} from "./navdata";
import DropdownSection from "./navbar-components/dropdown-section/DropdownSection";
import Link from "next/link";
import { RiUserSharedLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
// import MobileNavbar from "../mobile-navbar/MobileNavbar";
import MobileNavbar from "./mobile-navbar/MobileNavbar";
import { PopupButton } from "react-calendly";

const Navbar = () => {
  const [innerWidth, setinnerWidth] = useState();
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [key, setkey] = useState("");
  const [hamBurgerMenu, sethamBurgerMenu] = useState(false);
  const [dropDownData, setdropDownData] = useState([]);
  const [mentionNav, setmentionNav] = useState({ key: undefined, show: false });
  const [width, setWidth] = useState(0);
  const [Body, setBody] = useState("");
  const ref = useRef();

  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBody(document.body);
    }
  }, []);

  useEffect(() => {
    if (mentionNav.key) {
      setmentionNav({ ...mentionNav, show: true });
    }
    if (mentionNav.key === "Products") {
      // setdropDownData(ProductsDropdown);
    }
    if (mentionNav.key === "Company") {
      // setdropDownData(CompanyDropdown);
    }
    if (mentionNav.key === "Blog") {
      setdropDownData([]);
    }
  }, [mentionNav.key]);
  const handleOnClickNav = (item) => {
    setkey(item);
    setmentionNav({ key: item, show: !mentionNav.show });
  };
  const handleClose = () => {
    setmentionNav({ key: undefined, show: false });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cls = visible ? "visible" : "hidden";

  function handleClickOutside(event) {
    if (ref.current && !ref.current?.contains(event.target)) {
      handleClose();
    }
  }

  const handleHamBurgerMenu = () => {
    sethamBurgerMenu(!hamBurgerMenu);
  };
  return (
    <nav
      className={`${
        width <= 991
          ? "main position-fixed top-0"
          : `main ${cls} ${
              position < 100 ? "position-absolute" : "position-sticky"
            }`
      } shadow `}
      ref={ref}
    >
      <div className="logo-container" onClick={() => handleClose()}>
        <Link href="/">
          <div className="logo">ENDLOS</div>
        </Link>
      </div>
      <div className="menu-container">
        {navbar.map((item, index) => (
          <div
            key={index}
            className={`d-flex align-items-center justify-content-center gap-1 pointer px-2 ${
              mentionNav.key === item.navItem && mentionNav.show
                ? "text-color"
                : ""
            }`}
            onClick={() => handleOnClickNav(item.navItem)}
          >
            <div className="font-size">
              <Link href={item.link}>{item.navItem}</Link>
            </div>

            {item.icon && (
              <span className="pointer">
                {mentionNav.key === item.navItem && mentionNav.show ? (
                  <AiOutlineUp />
                ) : (
                  <AiOutlineDown />
                )}
              </span>
            )}
          </div>
        ))}
      </div>

      {mentionNav.key === key &&
        mentionNav.show &&
        dropDownData.map((item, index) => (
          <DropdownSection
            key={index}
            handleClose={handleClose}
            title={item.title}
            src={item.img}
            paragraph={item.paragraph}
            childrens={item.children}
          />
        ))}
      {hamBurgerMenu ? (
        <MobileNavbar sethamBurgerMenu={sethamBurgerMenu} />
      ) : (
        ""
      )}
      <div className=" right-container d-flex justify-content-center align-items-center gap-3">
        <div className="d-none d-sm-flex align-items-center justify-content-center flex-column ">
          <PopupButton
            url="https://calendly.com/endlosinnovations/30min"
            rootElement={Body}
            text="Book a meeting"
            className="floating-btn"
          />
        </div>
        <div className="d-lg-none" onClick={() => handleHamBurgerMenu()}>
          {!hamBurgerMenu ? (
            <div className="d-flex align-items-center justify-content-center flex-column ">
              <GiHamburgerMenu className="pointer" size={30} />
              {/* <span>Menu</span> */}
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-center flex-column ">
              <AiOutlineClose className="pointer" size={30} />
              {/* <span>Menu</span> */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

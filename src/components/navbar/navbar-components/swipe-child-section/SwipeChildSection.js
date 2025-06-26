import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const SwipeChildSection = ({ trigger, subChild, settrigger, handleClose }) => {
  const path = usePathname();
  console.log(path);
  const router = useRouter();
  const NavigateOnClick = (link) => {
    if (link) {
      console.log(link);
      router.push(link);
      handleClose();
    }
  };
  return (
    <>
      <div
        className={`scrollable-container py-5 
      ${subChild[0]?.key === trigger ? "box child-block" : "child-none"}`}
      >
        {subChild[0]?.children.map((item, index) => (
          <div
            key={index}
            className="py-3 d-flex flex-column justify-content-center px-2"
          >
            <div
              className={`d-flex flex-row justify-content-between pointer ${
                item.link === path ? "text-color" : ""
              }`}
            >
              <div onClick={() => NavigateOnClick(item.link)}>
                <Link href={item.link}>{item.subchildItem}</Link>
              </div>
              {/* <div className={`${false && "right-icon"}`}>
              <AiOutlineRight />
            </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SwipeChildSection;

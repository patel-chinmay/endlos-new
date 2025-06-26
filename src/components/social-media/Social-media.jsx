import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialMedia = () => {
  return (
    <>
      <div class="container">
        <div
          style={{
            position: "fixed",
            right: "0px",
            top: "42%",

            display: "flex",
            flexDirection: "column",
            zIndex: 999,

            gap: "2px",
          }}
        >
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/yash-patel-9b4a65136/"}
            style={{
              //   background: "#0077B5",
              background: "#ff7722",
              padding: "6px",
              paddingInline: "10px",
              borderRadius: "5px 0px 0px 5px",
            }}
          >
            <ImLinkedin2 size={17} className="text-white my-1" />
          </Link>
          <Link
            target="_blank"
            href={"https://twitter.com/Endlostech"}
            style={{
              //   background: "#1DA1F2",
              background: "#ff7722",
              padding: "6px",
              paddingInline: "10px",
              borderRadius: "5px 0px 0px 5px",
            }}
          >
            <BsTwitter size={17} className="text-white my-1" />
          </Link>
          {/* <Link
            target="_blank"
            href={"https://www.linkedin.com/company/endlos-cloud"}
            style={{
              background: "#1773EA",
              padding: "6px",
              paddingInline: "10px",
              borderRadius: "5px 0px 0px 5px",
            }}
          >
            <ImFacebook className="text-white my-1" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/company/endlos-cloud"}
            style={{
              background: "#C53C85",
              padding: "6px",
              paddingInline: "10px",
              borderRadius: "5px 0px 0px 5px",
            }}
          >
            <BsInstagram className="text-white my-1" />
          </Link> */}
          <Link
            target="_blank"
            href={"https://www.youtube.com/watch?v=m4y3IUQdeTo&t=17s"}
            style={{
              background: "#ff7722",
              padding: "6px",
              paddingInline: "10px",
              borderRadius: "5px 0px 0px 5px",
            }}
          >
            <AiFillYoutube size={17} className="text-white my-1" />
          </Link>
          <Link
            target="_blank"
            href={"https://api.whatsapp.com/send?phone=919327777854"}
            style={{
              background: "#ff7722",
              padding: "6px",
              paddingInline: "10px",
              borderRadius: "5px 0px 0px 5px",
            }}
          >
            <IoLogoWhatsapp size={17} className="text-white my-1" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;

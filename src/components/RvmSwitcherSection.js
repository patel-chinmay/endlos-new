import { useState } from "react";
import { useRouter } from "next/router";

export default function RvmSwitcherSection() {
  const [activeTab, setActiveTab] = useState("hardware");
  const router = useRouter();

  // ───────────────────────────── content map ─────────────────────────────
  const content = {
    software: {
      heading: "Smart Software for Efficient Recycling Systems",
      text: "Ensuring smooth and scalable recycling operations through real-time tracking, reward automation, remote diagnostics, and performance analytics.",
      bgMedia: "/assets/images/why-choose-us/softwarebg.png",
      type: "image",
      path: "/products/reverse-vending-machines/",
    },
    hardware: {
      heading: "Robust and User-Friendly Reverse Vending Machines",
      text: "Durable and user-friendly RVMs designed for various environments — from public areas to commercial spaces. Built for efficiency, they simplify collection and support your sustainability goals.",
      bgMedia:
        "https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/products/DRS-22/RVM_DRS_22_om.mp4",
      type: "video",
      path: "/products/reverse-vending-machines/",
    },
  };


  const { heading, text, bgMedia, type, path } = content[activeTab];

  const handleExploreClick = () => {
    router.push(path);
  };
  return (
    <section
      className="py-5 rgb(255 255 255 / 94%)"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container text-center">
        <h1
          className="fw-bold mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Complete Solutions for Smarter Recycling
        </h1>

        <div
          className="d-inline-flex mb-5 shadow-sm"
          style={{
            backgroundColor: "#262626",
            borderRadius: "4rem",
            padding: "0.35rem",
          }}
        >
          <button
            className={`btn px-4 fw-semibold toggle-btn ${
              activeTab === "hardware" ? "active" : ""
            }`}
            onClick={() => setActiveTab("hardware")}
          >
            Harware Solutions
          </button>
          <button
            className={`btn px-4 fw-semibold toggle-btn ${
              activeTab === "software" ? "active" : ""
            }`}
            onClick={() => setActiveTab("software")}
          >
            Software Solutions
          </button>
        </div>
      </div>

      <div className="container my-4">
        <div className="position-relative rounded-4 overflow-hidden">
          {/* dynamic background media */}
          {type === "image" ? (
            <img
              src={bgMedia}
              alt={heading}
              className="w-100 d-block"
              style={{ height: "520px", objectFit: "cover" }}
            />
          ) : (
            <video
              src={bgMedia}
              autoPlay
              muted
              loop
              playsInline
              className="w-100 d-block"
              style={{ height: "520px", objectFit: "cover" }}
            />
          )}

          {/* floating content card */}
          <div
            className="position-absolute top-50 start-0 translate-middle-y bg-white text-dark p-5 rounded-4 shadow-lg"
            style={{
              maxWidth: "740px",
              width: "90%",
              marginLeft: "5%",
            }}
          >
            <h2
              className="fw-bold mb-3"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.7rem)" }}
            >
              {heading}
            </h2>
            <p className="lead mb-4" style={{ lineHeight: "1.6" }}>
              {text}
            </p>

            <button
              className="btn btn-dark btn-lg px-4"
              onClick={handleExploreClick}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────── custom styles ─────────────── */}
      <style jsx>{`
        .toggle-btn {
          background: transparent;
          border: none;
          color: #ffffff;
          border-radius: 3rem;
          transition: all 0.25s ease;
        }
        .toggle-btn:hover {
          color: #ffd966;
        }
        .toggle-btn.active {
          background: #ffffff;
          color: #000;
        }
      `}</style>
    </section>
  );
}

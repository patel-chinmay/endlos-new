import React from "react";
import Link from "next/link";
// Assuming Bootstrap CSS is imported globally in your project (e.g., in _app.js or layout.js)

const EvenOddImages = ({ EvenOddImagesData }) => {
  const OddImageComponent = ({ title, subtitle, images, link }) => {
    return (
      <div className="row mb-5 align-items-center g-4">
        {" "}
        {/* mb-5 for spacing between sections, align-items-center for vertical alignment, g-4 for consistent gutter */}
        {/* Image Column */}
        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
          {" "}
          {/* d-flex justify-content-center and align-items-center to center the image box */}
          <div
            className="shadow-lg rounded-3 overflow-hidden" // Apply shadow and rounded corners to this box
            style={{
              width: "100%", // Take full width of its column
              maxWidth: "600px", // Limit max width for better aesthetics
              height: "380px", // Fixed height for consistent image box size
              position: "relative", // For potential overlays/ribbons
            }}
          >
            <img
              src={images}
              alt={title || "Project Image"} // Use title for alt text, fallback if not available
              className="img-fluid w-100 h-100" // img-fluid for responsiveness, w-100 & h-100 to fill parent
              style={{
                objectFit: "cover", // Crop image to cover the box, maintains aspect ratio
                transition: "transform 0.3s ease-in-out", // Smooth zoom transition
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
        {/* Content Column */}
        <div className="col-lg-6 col-md-6 d-flex align-items-center">
          {" "}
          {/* d-flex align-items-center for vertical centering of content */}
          <div className="p-4 text-center text-md-start">
            {" "}
            {/* Padding for content, responsive text alignment */}
            <h2 className="fs-2 fw-bolder text-dark mb-3">{title}</h2>{" "}
            {/* Larger, bolder title */}
            <p
              className="fw-normal text-secondary mb-4" // Text color for better contrast, more margin below
              style={{ fontSize: "1.05rem", lineHeight: "1.6" }} // Slightly larger font, improved line height
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
            {link && (
              <Link href={link} passHref legacyBehavior>
                <a className="btn btn-light btn-lg rounded-pill px-5 shadow-sm mt-3">
                  {" "}
                  {/* Larger, darker button with shadow */}
                  Know More
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  };

  const EvenImageComponent = ({ title, subtitle, images, link }) => {
    return (
      <div className="row mb-5 align-items-center g-4">
        {" "}
        {/* Same styling as OddImageComponent for consistency */}
        {/* Content Column (comes first on medium-up screens) */}
        <div className="col-lg-6 col-md-6 d-flex align-items-center order-md-1">
          {" "}
          {/* order-md-1 to place content first on medium-up screens */}
          <div className="p-4 text-center text-md-start">
            <h2 className="fs-2 fw-bolder text-dark mb-3">{title}</h2>
            <p
              className="fw-normal text-secondary mb-4"
              style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
            {link && (
              <Link href={link} passHref legacyBehavior>
                <a className="btn btn-light btn-lg rounded-pill px-5 shadow-sm mt-3">
                  Know More
                </a>
              </Link>
            )}
          </div>
        </div>
        {/* Image Column (comes second on medium-up screens) */}
        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center order-md-2">
          {" "}
          {/* order-md-2 to place image second on medium-up screens, d-flex justify-content-center and align-items-center to center */}
          <div
            className="shadow-lg rounded-3 overflow-hidden" // Apply shadow and rounded corners to this box
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "380px",
              position: "relative",
            }}
          >
            <img
              src={images}
              alt={title || "Project Image"}
              className="img-fluid w-100 h-100"
              style={{
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white py-5">
      <div className="container">
        {EvenOddImagesData &&
          EvenOddImagesData.map((item, index) => {
            const { title, images, subtitle, link } = item;
            // Using index to determine odd/even for alternating layout
            // This is more reliable than relying on a 'type' property if it's not strictly enforced
            if (index % 2 !== 0) {
              // If index is odd (0-indexed: 1st, 3rd, etc.) -> OddImageComponent (Image left, Content right)
              return (
                <OddImageComponent
                  key={index}
                  title={title}
                  subtitle={subtitle}
                  images={images}
                  link={link}
                />
              );
            } else {
              // If index is even (0-indexed: 0th, 2nd, etc.) -> EvenImageComponent (Content left, Image right)
              return (
                <EvenImageComponent
                  key={index}
                  title={title}
                  subtitle={subtitle}
                  images={images}
                  link={link}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default EvenOddImages;

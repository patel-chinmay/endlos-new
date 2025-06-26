import Link from "next/link";

const OurTeam = ({ team }) => {
  return (
    <div className="row justify-content-center gy-5">
      {team.map((member, index) => (
        <div
          className="col-md-6 col-lg-5 d-flex justify-content-center"
          key={index}
        >
          <div
            className="card w-100 shadow-lg border-0 text-center p-4"
            style={{
              maxWidth: "480px",
              borderRadius: "20px",
              backgroundColor: "#ffffff",
            }}
          >
            <div className="card-body">
              {/* Profile Image */}
              <div className="mb-4 d-flex justify-content-center">
                <div
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    background:
                      "linear-gradient(135deg, #ffa726, #fb8c00, #f57c00)",
                    display: "inline-block",
                  }}
                >
                  <img
                    className="shadow"
                    src={member.src}
                    alt={`${member.title} avatar`}
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "contain",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.07)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="card-title fw-bold text-dark mb-2">
                {member.title}
              </h3>

              {/* Subtitle */}
              <p className="card-text text-muted fs-5 mb-3">
                {member.subtitle}
              </p>

              {/* LinkedIn Icon */}
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  className="d-inline-block"
                >
                  <img
                    src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/social/linkedin.svg"
                    alt="LinkedIn"
                    height={38}
                    width={38}
                    title="LinkedIn Profile"
                    style={{ transition: "transform 0.3s" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;

import Link from "next/link"; // Keep this one
import React from "react"; // Keep this one
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported if not globally

const ProductsContainer = ({ products, newproduct = false }) => {
  // Separate products into Non-DRS and DRS categories
  const nonDrsProducts = products.filter(
    (item) => !item.title.startsWith("RVM DRS")
  );
  const drsProducts = products.filter((item) =>
    item.title.startsWith("RVM DRS")
  );

  const renderProductCards = (productList) => (
    <div className="row g-4 justify-content-center">
      {productList.map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex">
          <div className="card h-100 shadow-lg border-0 product-card rounded-3">
            <div className="position-relative overflow-hidden">
              <img
                className="card-img-top p-4"
                src={item.src}
                alt={item.title}
                style={{
                  objectFit: "contain",
                  height: "280px",
                  width: "100%",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              {newproduct && <div className="ribbon">New</div>}
            </div>
            <div className="card-body text-center d-flex flex-column p-4">
              <h5 className="card-title fw-bolder text-dark mb-3 fs-4">
                {item.title}
              </h5>
              <p
                className="card-text text-secondary flex-grow-1 mb-4"
                style={{
                  textAlign: "center",
                  minHeight: "80px",
                  fontSize: "0.95rem",
                }}
                dangerouslySetInnerHTML={{ __html: item.subtitle }}
              />
              <div className="mt-auto">
                {item.link ? (
                  <Link href={item.link} passHref legacyBehavior>
                    <a className="btn btn-light btn-lg rounded-pill px-5 shadow-sm">
                      Know More
                    </a>
                  </Link>
                ) : (
                  <button
                    className="btn btn-secondary btn-lg rounded-pill px-5 shadow-sm"
                    disabled
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container my-5">
      {/* DRS Machines Section */}

      {drsProducts.length > 0 && (
        <>
          <h2 className="text-left mb-5 display-5 fw-bold text-dark">
            For DRS
          </h2>
          {renderProductCards(drsProducts)}
        </>
      )}
      {/* Separator Line */}
      {nonDrsProducts.length > 0 && drsProducts.length > 0 && (
        <hr className="my-5 border-dark border-3" />
      )}

      {/* Non-DRS Machines Section */}
      {nonDrsProducts.length > 0 && (
        <>
          <h3 className="text-left mb-5 display-5 fw-bold text-dark">
            For Non-DRS
          </h3>
          {renderProductCards(nonDrsProducts)}
        </>
      )}
    </div>
  );
};

export default ProductsContainer;

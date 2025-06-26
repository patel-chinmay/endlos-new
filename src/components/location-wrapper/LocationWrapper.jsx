import React from "react";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

const LocationWrapper = () => {
  return (
    <div className="container px-3 px-md-5 mb-5">
      <div className="card rounded shadow-sm">
        <div className="row align-items-center g-0">
          {/* Image Section */}
          <div className="col-12 col-lg-8">
            <img
              src="/map2.svg"
              alt="Location Map"
              className="img-fluid w-100 rounded-start"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Info Section */}
          <div className="col-12 col-lg-4">
            <div className="card-body d-flex flex-column align-items-center text-center p-4 gap-3">
              <h5 className="card-title text-muted mb-3">
                ENDLOS INNOVATIONS PVT. LTD.
              </h5>

              <div>
                <p className="mb-2">
                  <ImLocation size={24} className="me-2" />
                </p>
                <address className="mb-3">
                  Plot No 286, Near Valinath Dhamatwan Talav, Road, near Somnath
                  Estate, near Avi Steel Processors, Bakrol, Dhamatwan, Gujarat
                  382435
                </address>

                <p className="mb-2">
                  <FiPhone size={24} className="me-2" />
                </p>
                <p className="mb-3">+91 9327777854</p>

                <p className="mb-2">
                  <AiOutlineMail size={24} className="me-2" />
                </p>
                <p>
                  <a
                    href="mailto:info@endlos.in"
                    className="text-decoration-none"
                  >
                    info@endlos.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationWrapper;

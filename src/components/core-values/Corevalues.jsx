import React from "react";
import { FiUserCheck, FiThumbsUp } from "react-icons/fi";
import { BiCheckShield } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
const Corevalues = () => {
  return (
    <div className="row container mx-auto w-100 py-5 my-5">



      <div className="col-lg-3">
        <div className="d-flex flex-column align-items-center">
          <FiUserCheck size={45} />
          <p className="text-center py-2">Transparency</p>
          <p className="lead text-center">
            Being transparent is part of our DNA. We believe in transparency in
            the transactions we make.
          </p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="d-flex flex-column align-items-center">
          <BiCheckShield size={45} />
          <p className="text-center py-2">Trust</p>
          <p className="lead text-center">
            We serve as trusted advisors for our partners, customers, and
            employees.
          </p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="d-flex flex-column align-items-center">
          <FiThumbsUp size={45} />
          <p className="text-center py-2">Customer Success</p>
          <p className="lead text-center">
            As our clients, partners, as well as our employees, expand, so too
            do we.
          </p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="d-flex flex-column align-items-center">
          <TbBulb size={45} />
          <p className="text-center py-2">Innovation</p>
          <p className="lead text-center">
            We celebrate creativity and promote collaboration for innovation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Corevalues;

"use client"
import React from 'react'
// import './team-details.css'
import Image from 'next/image'
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { Divider } from '@mui/material';

const page = () => {
  return (
    <>
      <div className="details-image-section">
        <Image src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/cvm/cvm-background.jpg"  alt="cvm-background" fill />
      </div>
      <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <div className="row">
            <div className="col-sm-12">
              <div className="container pt-5 responsive-container">
                <div className="d-flex align-items-center px-5 gap-2">
                  <p>
                    <span>Home</span> <AiOutlineRight />
                  </p>
                  <p>
                    <span>Company</span> <AiOutlineRight />
                  </p>
                  <p>
                    <span>Managing Board</span> <AiOutlineRight />
                  </p>
                  <p>
                    <span>Khilan-Patel</span>
                  </p>
                </div>
                <div className="container py-2">
                  <p className="lead text-center text-dark fs-2">
                    Dr. Khilan Patel
                  </p>
                </div>
                <div className='row gy-5'>
                  <div className='col-xl-6 col-md-12'>
                  <img src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/cvm/cvm-background.jpg"  alt="cvm-background" className='img-fluid' />
                  </div>
                  <div className='col-xl-6 col-md-12'>
                    <strong className='fs-4 fw-bold'>Chief Financial Officer</strong>
                    <p className='lead pt-4'>Responsible for Corporate Communications, Public Policy & Brand, Corporate Development, Corporate Law, Integrity & Risk and Corporate Real Estate & Sustainability. </p>
                    <p className='lead'>Born in 1959 in Wilmington, Ohio, USA. Studied German, English and Japanese language and literature in Freiburg, Germany, Middlebury, VT, USA, and Zurich, Switzerland, earning her doctorate. Has been working in the Press and Public Relations office of the TRUMPF Group since 1985 and worked for the TRUMPF Corporation in Japan from 1988 to 1990. Managing Director of Berthold Leibinger Foundation GmbH from 1992 to 2010, holding partner of TRUMPF GmbH + Co. KG since 1994 and Managing Director of TRUMPF GmbH + Co. KG since January 2003. In November 2005, Dr. Leibinger-Kammueller was appointed President and Chairwoman of the Managing Board of the TRUMPF GmbH + Co. KG, the management holding of the TRUMPF Group. Chairwoman of the Managing Board of TRUMPF SE + Co. KG, previously TRUMPF GmbH + Co. KG since February 2022.</p>
                  <p className='lead'>Dr. Leibinger-Kammüller performs many honorary functions in the scientific, cultural, and social sector. She is also a member of the Advisory Boards of the Landesbank Baden-Wuerttemberg and the BW-Bank.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  )
}

export default page
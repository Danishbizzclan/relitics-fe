//import useState hook to create menu collapse state
import React, { useState } from "react";
import classes from "../Component/Navbar.module.css"
import Link from "next/link"
// // import MaterialDesignSwitchh from '../Component/Togle1'
// import MaterialDesignSwitchh from "../Component/Togle1";
// import Membership from "../Component/Data/MembershipData";







//import sidebar css from react-pro-sidebar module and our custom css 


const Dashnav = () => (
    <>
    <div className='dash-nav '>
    <div className="container ">
      <div className="row ms-0 w-100">
        <div className="col-12 ms-0 p-0 m-0">


          <nav className="navbar navbar-expand-lg p-0  navbar-light ">
            <div className="container-fluid p-0">
              {/* <Link href="/">
                <a href="/"><img  alt="reilitics" /></a></Link> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
                  <Link href="/" className="nav-item">

                    <a className="nav-link navbar-text text-end text-lg-start nav-bor font-13 py-2  dash-text" aria-current="page" ><p className="mt-3">Home</p></a>
                  </Link>
                  <Link href="/BecomeProfessional" className="nav-item">
                    <a className="nav-link navbar-text nav-bor text-end text-lg-start font-13 py-2  dash-text" aria-current="page" ><p className="mt-3">Pricing</p></a>
                  </Link>
                  <Link href="/About" className="nav-item">
                    <a className="nav-link navbar-text nav-bor text-end text-lg-start font-13  py-2  dash-text" aria-current="page" ><p className="mt-3">About</p></a>
                  </Link>

                  <Link href="/Blog" className="nav-item">
                    <a className="nav-link navbar-text font-13 text-end nav-bor text-lg-start py-2  nav-bordash-text dash-text" aria-current="page" ><p className="mt-3">Article</p></a>
                  </Link>
                  <Link href="/Contact" className="nav-item">
                    <a className="nav-link navbar-text font-13 text-end text-lg-start nav-bor py-2   dash-text" aria-current="page" ><p className="mt-3">contact</p></a>
                  </Link>
                  <img src={'/Group 221.png'} className="noti-bg ms-auto text-lg-0 my-3 p-2" style={{ objectFit: 'contain' }} />
                  <div className="d-flex rounded-pill my-3 ms-3 name-bg">
                    <img src={'/Mask Group 23.png'} className="img-sizee mb- w-50 " style={{ objectFit: 'contain' }} />
                    <p className="text-white my-auto">Tabish</p>
                  </div>

                </ul>
                {/* <img className="p-2 rounded-pill" src="Path 188.png" alt="" /> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  </>
   
);
export default Dashnav
      
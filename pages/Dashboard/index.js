import React, { useState, useEffect } from "react";
import Link from "next/link"
import Sidebar from "../../Component/SideNavbar";
import MaterialDesignSwitch from "../../Component/Togle1";
import Membership from "../../Component/Data/MembershipData";
import Dashnav from "../../Component/Dashnav";
import withAuth from "../../Component/Auth";
import "react-pro-sidebar/dist/css/styles.css";


const Dashboard = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  let firstName = JSON.parse(localStorage.getItem('user')).firstName;


  return (
    <>
      <div className="d-inline-flex w-100">
        <Sidebar />
        <div style={{ width: "inherit" }}>
          <Dashnav />
          <div className='container mx-auto mt-3 px-md-5'>
            <p className="fs-40 Gothic_3D">Hi {firstName}</p>
            <p className="fs-16">Welcome back to your dashboard</p>
            <div className="row g-5">
              <div className="col-lg-7 px-0">
                <div className="bg-dash px-5 py-3">
                  <p className="fs-30 mb-0 Gothic_3D">Overview</p>
                  <p className="fs-16 greyBlack">Let&#39;s start by finding you a city of intrest</p>
                  <div className="row">
                    <Link href={"./Appreciation"}>
                      <div className="col-sm-12 col-md-6 p-3">
                        <div className="bg-white text-center p-3 Hover pointer-cursor brdr_card brdr">
                          <img src={'/development1.svg'} />
                          <p className="my-3 fs-18 Bold greyBlack">Market Aprecation</p>

                        </div>
                      </div>
                    </Link>
                    <Link href={"./RentalGrowth"}>
                      <div className="col-sm-12 col-md-6 p-3">
                        <div className="bg-white text-center p-3 Hover pointer-cursor brdr_card brdr">
                          <img src={'/chart1.svg'} />
                          <p className="my-3 fs-18 Bold greyBlack">Rental Growth</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {Membership.map(mem => {
                  return (
                    <>
                      <div className="bg-dash mt-3 px-5 py-3">
                        <p className="fs-30 mb-0 Gothic_3D">MEMBERSHIP Details</p>
                        <div className="bg-white">
                          <p className="fs-16 greyBlack">Membership Package</p>
                          <div className="d-flex mt-3">
                            <p className=" fs-20 Bold greyBlack">Paid</p>
                            <p className="ms-auto fs-22 Bold greyBlack">{mem.price}</p>
                          </div>
                          <div className="d-flex mt-1">
                            <p className="my-auto fs-16 greyBlack">Status</p>
                            <button className="btn ms-auto light-BlueBtn px-5 fs-14">{mem.status ? "active" : "not-active"}</button>
                          </div>
                          <div className="d-flex mt-2">
                            <p className="my-auto fs-16 greyBlack">Membership Renewdate</p>
                            <p className="ms-auto my-auto fs-16 greyBlack">{mem.date}</p>
                          </div>
                          <div className="d-flex mt-2">
                            <div className="row w-100">
                              <div className="col-lg-4 d-flex brdr_card brdr">
                                <p className="my-auto fs-14 text-nowrap greyBlack">Auto renew</p>
                                <div className="mt-2 ms-3">
                                  <MaterialDesignSwitch className='mt-3' /></div>
                              </div>
                              <div className="col-lg-8 p-0 text-end">
                                <button className="btn mx-2 ny-2 fs-14 opac px-4 btnYelow">Deactivate</button>
                                <button className="btn mx-2 my-2 fs-14 opac px-4 btnYelow">Downground</button>
                                <button className="btn mx-2 ny-2 fs-14 opac px-4 btnYelow">Renew</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
              <div className="col-lg-5">
                <div className="bg-dash px-5 py-3">
                  <p className="fs-30 Gothic_3D mb-0">Detail</p>
                  <p className="fs-16 greyBlack">Let&#39;s go to the city statistics</p>
                  <div className="bg-white text-center px-3 mx-auto p-3">
                    <p className="fs-18 greyBlack" style={{ fontWeight: "medium" }}>By city detail Statistics</p>
                    <input type="text" value={state} name="state"
                      placeholder="select state"
                      onChange={(e) => setState(e.target.value)}
                      className="form-control dash-form  mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div className="row mt-3 ">
                      <div className="col-sm-12 col-md-8 px-0">
                        <input type="text" value={city} name="city"
                          placeholder="select city"
                          onChange={(e) => setCity(e.target.value)}
                          className="form-control dash-form  " id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <button className="btn ms-auto fs-15 bluebtn col-sm-12 col-md-4 brdr">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Dashboard);


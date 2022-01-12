//import useState hook to create menu collapse state
import React, { useState } from "react";
import classes from "../Component/Navbar.module.css"
import Link from "next/link"
import Sidebar from "../Component/Didebar";
// import MaterialDesignSwitchh from '../Component/Togle1'
import MaterialDesignSwitchh from "../Component/Togle1";
import Membership from "../Component/Data/MembershipData";
import Dashnav from "../Component/Dashnav";



//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";


import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";


const Dashboard = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');



  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div className="d-inline-flex w-100">
     <Sidebar />

        <div style={{ width: "inherit" }}>
          <Dashnav />

        
          <div className='container ms-3 mt-3'>
            <p className="fs-25 mb-0">Hi Tabish</p>
            <p className="fs-16">Welcome back to your dashboard</p>
            <div className="row">
              <div className="col-lg-6">
                <div className="bg-dash p-3">
                  <p className="fs-23 mb-0">Overview</p>
                  <p className="fs-16">Let's start by finding you a city of intrest</p>
                  <div className="d-flex">
                   
                    <div className="bg-white py-3 text-center w-50">
                    <a>
                      <img src={'/development1.png'} />
                      <p className="mt-3 fs-18">Market Aprecation</p>
                      </a>


                    </div>
                    <div className=" py-3 ms-3 text-center w-50">
                      <img src={'/chart1.png'} />
                      <p className="mt-3 fs-18">Rental Growth</p>


                    </div>
                  </div>

                </div>
                {Membership.map(mem =>{
                  return(
                    <>
                        <div className="bg-dash mt-3 p-3">
                  <p className="fs-23 mb-0">Package Details</p>
                  <div className="bg-white p-3">
                    <p className="fs-16">Membership Package</p>
                    <div className="d-flex mt-3">
                      <p className=" fs-20">Paid</p>
                      <p className="ms-auto fs-22 ">{mem.price}</p>
                    </div>
                    <div className="d-flex mt-1">
                      <p className="my-auto fs-16">Status</p>
                      <button className="btn ms-auto dash-button">{mem.status ? "active": "not-active"}</button>
                    </div>
                    <div className="d-flex mt-2">
                      <small className="my-auto fs-16">Membership Renewdate</small>
                      <p className="ms-auto my-auto fs-16">{mem.date}</p>
                    </div>
                    <div className="d-flex  mt-2">
                    <div className="row">

                    <div className="col-xl-4 d-flex">
                      <small className="my-auto fs-14 text-nowrap">Auto renew</small>
                      <div className="mt-2 ms-3">
                        
                        <MaterialDesignSwitchh className='mt-3' /></div>
                        </div>
                        <div className="col-xl-4 ms-auto d-flex">
                      <button className="ms-auto p-2 button-color  btn"><small>Deactivate</small></button>
                      <button className="ms-1 p-2 button-color  btn"><small>Downground</small></button>
                      <button className="ms-1 p-2 button-color  btn"><small>Renew</small></button>
                      </div>
                      </div>

                    </div>
                  </div>


                </div>
                    
                    </>
                  )
                })}
            

              </div>
              <div className="col-lg-4">
                <div className="bg-dash p-3">
                  <p className="fs-23 mb-0">Detail</p>
                  <p className="fs-16">Let's go to the city statistics</p>
                  <div className="bg-white text-center px-5 mx-auto p-3">
                    <p className="fs-18" style={{ fontWeight: "medium" }}>By city detail Statistics</p>
                    <input type="text" value={state} name="state" 
                      placeholder="select state"
                      onChange={(e) => setState(e.target.value)}
                      className="form-control dash-form  mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   <div className="d-flex mt-3 button-inline">  
                    <input type="text" value={city} name="city" 
                      placeholder="select city"
                      onChange={(e) => setCity(e.target.value)}
                      className="form-control dash-form w-75  " id="exampleInputEmail1" aria-describedby="emailHelp" />           
                      
                      
                      <button className=" button-color ms-3 btn">Search</button>
                      
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

export default Dashboard;


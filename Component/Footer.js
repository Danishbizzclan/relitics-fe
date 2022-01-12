import React from 'react'
import Link from "next/link"
import classes from "./Footer.module.css"

import { FaFacebook, FaPinterest, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { useState } from 'react'

// const Footer = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Footer


function Foter() {

    const [email, setEmail] = useState('');



    return (
        <div>
        <hr className="mt-5"/>
            <div className="container-fluid  p-0">
                <div className="row my-5">
                    <div className='col-9 mx-auto'>
                        <div className='row'>
                    <div className="col-md-3">
                        <p className={classes.fontbold}>Categories</p>
                     <Link href="/RealState"> 
                       <a className={classes.footerp}><p>Category 1</p></a>
                       </Link>
                     <Link href="/Dashboard">  
                      <a className={classes.footerp}> <p>Category 2</p></a>
                      </Link>
                      <Link href="/DroneVideo"> 
                       <a className={classes.footerp}> <p >Category 3</p></a>
                       </Link>
                    </div>


                    <div className="col-md-3">
                      <Link href="About">
                            <a className={classes.fontbold}><p>About us</p></a>
                      </Link>
                      <Link href="Privacy">
                      <a className={classes.footerp}><p>Privacy Policy</p></a>
                            </Link>
                       <Link href="Terms">
                       <a className={classes.footerp}><p>Terms & Conditions</p></a>
                            </Link>
                      
                    </div>

                    <div className="col-md-3">
                        <p className={classes.fontbold}>Pages</p>
                       <Link href="Blog"> 
                       <a className={classes.footerp}><p>Blog</p></a>
                       </Link>
                       <Link href="Contact">
                            <a className={classes.footerp}>  <p>Contact us</p></a>
                            </Link>
                      <Link href="BecomeProfessional">
                            <a className={classes.footerp}>  <p>Become a professional</p></a>
                            </Link>
                    </div>

                    <div className="col-lg-3 pb-5">
                        <p className={classes.fontbold}>Suscribe to Newsletter</p>
                        <p className="mx-auto fs-16">Email</p>
                        <input type="email" value={email} name="email" type={email}
                            placeholder="Enter your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            class="form-control py-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <button type="button" className={`btn py-3 mt-2 btn-lg fs-15 semi-bold w-100 btn-block ${classes.btninfo}`} >Subscribe</button>
                    </div>

                </div>
            </div>
            </div>


                <div className="container-fluid p-0">
                <div className={classes.footercolor}>


                    <div className="row ">
                        <div className='col-9 mx-auto'>
                            <div className='row p-0 '>


                        <div className="col-sm-6 mt-3">
                            <p className={`${classes.footerp} text-white fs-16 my-auto py-4`}>Copyright 2021 Website.com</p>
                        </div>


                        <div className="col-sm-6  ms-auto">
                            <diV className="float-end">
                             <img className='my-4' src={"/facebook.png"} alt="facebook"/ >
                             <img className="ms-3 my-4" src={"/twitter.png"} alt="facebook"/ >
                             <img className="ms-3 my-4" src={"/pinterest.png"} alt="facebook"/ >
                             <img className="ms-3 my-4" src={"/instagram.png"} alt="facebook"/ >
                             <img className="ms-3 my-4" src={"/linkedin.png"} alt="facebook"/ >

                            </diV>


                        </div>
                        </div>
                    </div>
            
                </div>

            </div>
        </div>
        </div>
        </div>
    )
}

export default Foter
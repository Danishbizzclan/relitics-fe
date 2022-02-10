import React, { useEffect, useState } from 'react'
import Link from "next/link"
import blogData from './Data/BlogData';
import classes from "./Footer.module.css"
import GetData from '../Api/GetData';
import PostData from '../Api/PostData';

import { FaFacebook, FaPinterest, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Foter() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');

    const [settingErrors, setSettingErrors] = useState('');
    const [data, setData] = useState([]);

    // const uniqueCategories = [...new Set( blogData.map(obj => obj.category)) ];
    // console.log(uniqueCategories)
    useEffect(() => {
        const response = GetData.BlogCatagory();
        console.log(response)
        response.then(value => {
            console.log('dfgh',value.data.categories)
          setData(value?.data?.categories)
        })
      }, [])

      const NewsLetter = e => {
        e.preventDefault();
        // nextStep();
        const res = PostData.CreateNewsLetter(email, settingErrors)
        res.then(value => {
            console.log(value)
            setSuccess(value.data.message)
        })
            .catch(error => {
                console.log("Error", error)
            })
    }
    return (
        <div>
            <hr className="mt-5" />
            <div className="container-fluid  p-0">
                <div className="row my-5">
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-3 col-sm-6">
                                <p className={classes.fontbold}>Categories</p>
                                {data.map((x) => {
                                    // console.log(x)
                                    return (
                                        <>

                                            <Link href={`/BlogCategory/${x.name}`}>
                                            <p className='fs-17 catagory'>{x.name}</p>
                                            </Link>
                                        </>
                                    )
                                })}


                                {/* <Link href="/RealState">
                                    <a className={classes.footerp}><p>Category 1</p></a>
                                </Link>
                                <Link href="/Dashboard">
                                    <a className={classes.footerp}> <p>Category 2</p></a>
                                </Link> */}
                            </div>


                            <div className="col-md-3 col-sm-6">
                                <Link href="/Dashboard">
                                    <a className={classes.fontbold}><p>About us (Dashboard)</p></a>
                                </Link>
                                <Link href="/Terms">
                                    <a className={classes.footerp}><p>Terms of Use</p></a>
                                </Link>
                                <Link href="/Privacy">
                                    <a className={classes.footerp}><p>Privacy Policy</p></a>
                                </Link>
                                <Link href="/CokiePolicy">
                                    <a className={classes.footerp}><p>Cookie Policy</p></a>
                                </Link>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <p className={classes.fontbold}>Pages</p>
                                <Link href="/Blog">
                                    <a className={classes.footerp}><p>Articles</p></a>
                                </Link>
                                <Link href="/Contact">
                                    <a className={classes.footerp}>  <p>Contact</p></a>
                                </Link>
                                <Link href="/About">
                                    <a className={classes.footerp}>  <p>About Us</p></a>
                                </Link>
                            </div>

                            <div className="col-lg-3 col-sm-6 pb-5">
                                <p className={classes.fontbold}>Subscribe to our newsletter</p>
                                <form onSubmit={NewsLetter}>
                                <p className="mx-auto Bold fs-16">Email</p>
                                <input type="email" value={email} name="email" 
                                    placeholder="Enter your Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control py-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    {settingErrors}
                                    <p className='fs-19 text-success'>{success}</p>
                                <button type="submit" className={`btn py-3 mt-2 btn-lg fs-15 semi-bold w-100 btn-block ${classes.btninfo}`} >Subscribe</button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>


                <div className="container-fluid p-0">
                    <div className={classes.footercolor}>


                        <div className="row ">
                            <div className='container'>
                                <div className='row p-0 '>


                                    <div className="col-sm-6 mt-3">
                                        <p className={`${classes.footerp} text-white fs-16 my-auto py-4`}>Copyright 2021 Website.com</p>
                                    </div>


                                    <div className="col-sm-6  ms-auto">
                                        <diV className="float-end">
                                            <img className='my-4' src={"/circleFb.svg"} alt="facebook" />
                                            <img className="ms-3 my-4" src={"/circlePinterest.svg"} alt="pinterest" />
                                            <img className="ms-3 my-4" src={"/circleTwitter.svg"} alt="twitter" />
                                            <img className="ms-3 my-4" src={"/circleLinkedin.svg"} alt="linkedin" />
                                            <img className="ms-3 my-4" src={"/circleInstagram.svg"} alt="instagram" />
                                        </diV>


                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Foter
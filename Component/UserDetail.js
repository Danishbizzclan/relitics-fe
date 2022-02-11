import React, { useState } from 'react'
import Avatarr from './Avatarr'
import Navbar from './Navbar'
import Link from "next/link"
import PersonalInfo from './PersonalInfo'
// import { makeStyles } from '@material-ui/core/styles';
import Acount from '../Api/Acount'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import next from 'next'
import AvatarUploader from 'react-avatar-uploader';


const UserDetails = ({ nextStep, handleChange, values }) => {

    // for continue event listener
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }


    return (
        <>
            <Navbar />
            <div className='container-fluid theme_bg p-5'>
                <div className="py-5">
                    <div className='mb-5'>
                        <PersonalInfo
                            values={values.step} />
                    </div>
                    <div className="container">
                        {/* email address */}
                        <div className="col-sm-11 mt-3 mx-auto">
                            <div className="bg-white brdr_div">
                                <div className="uper-color px-5 py-3">
                                    <p className="text-white px-5 my-auto fs-40 Gothic_3D pt-3">CREATE ACCOUNT</p>
                                    <div className="d-flex">
                                        <p className="text-white ps-5 fs-15">Already a Member?</p>
                                        <Link href="/Login">
                                            <a className="text-primary ms-3 fs-15">Login</a>
                                        </Link>
                                    </div>
                                </div>
                                <form onSubmit={Continue} className='p-5'>
                                    <div className="row px-5">
                                        <div className=''>
                                            <AvatarUploader
                                                size={150}
                                                uploadURL="http://localhost:3000"
                                                fileType={"image/png"} />
                                        </div>
                                        <div className="col-sm-6 my-3">
                                            <input
                                                className="w-100 form-bg form-control"
                                                placeholder="First Name"
                                                onChange={handleChange('firstName')}
                                                defaultValue={values.firstName}
                                                // variant="outlined"
                                                required
                                            />
                                        </div>
                                        {/* username */}
                                        <div className="col-sm-6 my-3">
                                            <input
                                                placeholder="Family Name*"
                                                className="form-control form-bg"
                                                onChange={handleChange('familyName')}
                                                defaultValue={values.familyName}
                                                required
                                                // variant="outlined"
                                                autoComplete="username"
                                            />
                                        </div>
                                    </div>
                                    <div className="row px-5">
                                        <div className="col-sm-6 my-3">
                                            <input
                                                placeholder="Username*"
                                                className="form-control form-bg w-100"
                                                onChange={handleChange('username')}
                                                defaultValue={values.username}
                                                // variant="outlined"
                                                required
                                                type="input"
                                            />
                                        </div>
                                        <div className="col-sm-6 my-3">
                                            <input
                                                placeholder="Email*"
                                                className="form-control form-bg w-100"
                                                onChange={handleChange('email')}
                                                defaultValue={values.email}
                                                type="email"
                                                // variant="outlined"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row px-5">
                                        <div className="col-sm-6  my-3">
                                            <input
                                                placeholder="Date of Birth*"
                                                className="form-control img-place form-bg w-100"

                                                onChange={handleChange('DOB')}
                                                defaultValue={values.DOB}
                                                // variant="outlined"
                                                required

                                                type="date"
                                            />
                                        </div>
                                        <div className="col-sm-6 my-3">
                                            <input
                                                placeholder="Country*"
                                                className="form-control form-bg w-100"
                                                onChange={handleChange('country')}
                                                defaultValue={values.country}
                                                type="text"
                                                // variant="outlined"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row px-5">
                                        <div className="col-sm-6 my-3">
                                            <input
                                                placeholder="state*"
                                                className="form-control form-bg w-100"
                                                required
                                                onChange={handleChange('state')}
                                                defaultValue={values.state}
                                                // variant="outlined"  
                                                type="text"
                                            />
                                        </div>
                                        <div className="col-sm-6 my-3">

                                            <input
                                                placeholder="Password*"
                                                className="form-control form-bg w-100"
                                                required
                                                onChange={handleChange('password')}
                                                defaultValue={values.password}
                                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                // variant="outlined"
                                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"

                                                type="password"
                                            />
                                        </div>

                                    </div>

                                    <div className="form-check mt-3 ms-5">
                                        <input className="form-check-input ms-3" type="checkbox" required value="" id="flexCheckDefault" />
                                        <label className="form-check-label fs-15 ms-3" htmlFor="flexCheckDefault">
                                            i agreed to the terms and conditions, Privacy Policy and Cockies Policy
                                        </label>
                                    </div>
                                    <div className="form-check mt-3 ms-5">
                                        <input className="form-check-input ms-3" required type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label fs-15 ms-3" htmlFor="flexCheckChecked">
                                            i would like to keep up to date on new features and new articles, Privacy Policy
                                        </label>
                                    </div>
                                    <br />
                                    <div className="text-center">
                                        <Button

                                            type="submit"
                                            className="w-50 login-button fs-15 mx-auto"

                                            variant="contained"
                                            color="primary"
                                        >
                                            Create Account
                                        </Button>
                                        {/* <p>{error}</p> */}
                                    </div>
                                </form>
                                <div className="text-center my-3">
                                    <p className='fs-15'>Sign up with a Social Media</p>
                                </div>
                                <div className="text-center pb-5 mt-2">
                                    <img src={"squareFb.svg"} className="ms-2 s-social" alt="facebook" />
                                    <img src={"squareTwitter.svg"} className="ms-3 s-social" alt="facebook" />
                                    <img src={"squareGmail.svg"} className="ms-3 s-social" alt="facebook" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default UserDetails
import React from 'react'
import Avatarr from './Avatarr'
import Navbar from './Navbar'
import Link from "next/link"
import PersonalInfo from './PersonalInfo'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const UserDetails = ({ nextStep, handleChange, values }) => {

    // for continue event listener
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div>
            <Navbar />



            <div className="loginbg">
                <div className='my-4'>
                    <PersonalInfo
                        values={values.step} />
                </div>

                <div className="container">


            

                        {/* email address */}
                        <div className="col-sm-10 mt-3 mx-auto">
                            <div className="uper-color px-5 p-3">
                                <p className="text-white px-5 my-auto fs-40 pt-3">CREATE ACCOUNT</p>
                                <div className="d-flex">
                                    <p className="text-white ps-5 fs-15">Already a Member?</p><Link href="/Login"><a className="text-primary ms-3 fs-15">Login</a></Link></div>

                            </div>
                            <div className="bg-white p-5">
                            <form onSubmit={Continue}>

                                <div className="row px-5">
                                    <div className='mx-5'>
                                        <Avatarr />
                                    </div>


                                    <div className="col-sm-6 my-3">


                                        <input
                                            className="w-100 form-bg form-control"
                                            placeholder="First Name"

                                            onChange={handleChange('firstName')}
                                            defaultValue={values.firstName}
                                            // variant="outlined"
                                            required
                                            fullWidth
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
                                            fullWidth
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
                                            fullWidth
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
                                            fullWidth
                                            type="input"
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
                                            fullWidth
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
                                            fullWidth
                                            type="input"
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

                                            fullWidth
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

                                            // variant="outlined"

                                            fullWidth
                                            type="password"
                                        />



                                    </div>

                                </div>

                                <div class="form-check mt-3 ms-5">
                                    <input class="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label fs-15 ms-3" for="flexCheckDefault">
                                        i agreed to the terms and conditions, Privacy Policy and Cockies Policy
                                    </label>
                                </div>
                                <div class="form-check mt-3 ms-5">
                                    <input class="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-15 ms-3" for="flexCheckChecked">
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
                                </div>
                                </form>

                                <div className="text-center my-3">
                                    <p className='fs-15'>Sign up with a Social Media</p>
                                </div>
                                <div className="text-center pb-5 mt-2">
                                    <img src={"Group 21.png"} className="ms-2 s-social" alt="facebook" />
                                    <img src={"Group 16.png"} className="ms-3 s-social" alt="facebook" />
                                    <img src={"Group 19.png"} className="ms-3 s-social" alt="facebook" />

                                </div>
                            </div>
                        </div>
                    

                </div>
            </div>
        </div>


    )
}

export default UserDetails
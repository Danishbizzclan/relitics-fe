import React, { useState } from 'react'
import Avatarr from './Avatarr'
import Navbar from './Navbar'
import Link from "next/link"
import CustomModal from "./Modal";
import PersonalInfo from './PersonalInfo'
// import { makeStyles } from '@material-ui/core/styles';
import Acount from '../Api/Acount'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import next from 'next'
import UploadAndDisplayImage from './Avatarr'
import { Imagees } from './Avatarr'


const UserDetails = ({ handleStep, nextStep, handleChange, values }) => {

    const [termsModel, settermsModel] = useState(false)
    const [privacyModel, setPrivacyModel] = useState(false)
    const [cookiesModel, setCookiesModel] = useState(false)
    // for continue event listener
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const VerifyUser = () => {
        // nextStep();
        // setEmail(email)
        const res = Acount.userValidation(email)
        res.then(value => {
            console.log('value', value.data)
            setReset(value.data.message)

        })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <>
            <Navbar />
            <div className='container-fluid theme_bg p-3'>
                <div className="py-5">
                    <div className='mb-5'>
                        <PersonalInfo
                            values={values.step}
                        handleStep={handleStep} />
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
                                <form onSubmit={Continue} className='py-3 px-5'>
                                    <div className="row px-5">
                                        <div className=''>
                                            {/* <AvatarUploader
                                                size={150}
                                                uploadURL="http://localhost:3000"
                                                fileType={"image/png"} /> */}
                                            {/* <UploadAndDisplayImage /> */}
                                            {/* <Imagees /> */}
                                            <img src={values.profilePic} className='avatar-style' alt="" />
                                            <input type="file" accept='jpg' onChange={handleChange('profilePic')} id="img" className='d-none'/>
                                            <label htmlFor="img" className='btn UploadBtn fs-15 ms-3 my-2'>Upload</label>
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
                                        <label className="form-check-label fs-15 ms-3" htmlFor='flexCheckDefault'>
                                            i agreed to the <span className='bluetxt' onClick={() => { settermsModel(true) }}>Terms of Use</span>, <span className='bluetxt' onClick={() => { setPrivacyModel(true) }}>Privacy Policy</span> and <span className='bluetxt' onClick={() => { setCookiesModel(true) }}> Cookies Policy</span>
                                        </label>
                                    </div>
                                    <div className="form-check mt-3 ms-5">
                                        <input className="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked" />
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
                                <div className="text-center pb-4 mt-2">
                                    <img src={"squareFb.svg"} className="ms-2 s-social" alt="facebook" />
                                    <img src={"squareTwitter.svg"} className="ms-3 s-social" alt="facebook" />
                                    <img src={"squareGmail.svg"} className="ms-3 s-social" alt="facebook" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CustomModal
                    title="Terms of Use"
                    customClass='modal-white'
                    isModalVisible={termsModel}
                    handleOk={settermsModel}
                    handleClose={()=>settermsModel(false)}
                    closable={true}
                >
                    <div className=''>
                        <p className='fs-22 text-center'>Terms of Use</p>
                        <ul className='fs-16'>
                            <li>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                            <li>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                            <li>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                        </ul>
                    </div>
                </CustomModal>
                <CustomModal
                    title="Privacy Policy"
                    customClass='modal-white'
                    isModalVisible={privacyModel}
                    handleOk={setPrivacyModel}
                    handleClose={()=>setPrivacyModel(false)}
                    closable={true}
                >
                    <div className=''>
                        <p className='fs-22 text-center'>Privacy Policy</p>
                        <ul className='fs-16'>
                            <li>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                            <li>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                            <li>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                        </ul>
                    </div>
                </CustomModal>
                <CustomModal
                    title="Cookies Policy"
                    customClass='modal-white'
                    isModalVisible={cookiesModel}
                    handleOk={setCookiesModel}
                    handleClose={()=>setCookiesModel(false)}
                    closable={true}
                >
                    <div className=''>
                        <p className='fs-22 text-center'>Cookies Policy</p>
                        <ul className='fs-16'>
                            <li>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                            <li>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                            <li>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                        </ul>
                    </div>
                </CustomModal>
            </div>
        </>


    )
}

export default UserDetails
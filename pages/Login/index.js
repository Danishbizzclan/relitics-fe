import React from 'react'
import Navbar from "../../Component/Navbar"
import classes from "./Login.module.css"
import Acount from '../../Api/Acount'
import { useState } from 'react'
import CustomModal from '../../Component/Modal'
import Link from "next/link"
import LoginModal from '../../Component/Login/EnterEmail'
import Otp from '../../Component/Login/Otp'
import Modal from 'antd/lib/modal/Modal'


const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [otpModal, setOtpModal] = useState(false)

    const [resetModel, setResetModel] = useState(false)
    const [errorModel, setErrorModel] = useState(false)
    const [succesModel, setSuccesModel] = useState(false)


    const loginHandler = e => {
        e.preventDefault();
        // nextStep();
        const res = Acount.Login(userName, password, setError, setErrorModel)
        res.then(value => {
            console.log(value)
            setSuccess(value.data.message)
            localStorage.setItem('user', JSON.stringify(value.data.user))
            localStorage.setItem('token', JSON.stringify(value.data.token))

            if (value.statusText == 'OK') {
                setSuccesModel(true)
            }
            else {
                setErrorModel(true)
            }
        })
            .catch(error => {
                console.log({error})
            })

    }

    const resetPasword = (email) => {
        // nextStep();
        setEmail(email)
        const res = Acount.EnterEmail(email, setError, setErrorModel)
        res.then(value => {
            console.log('value', value.data)
            if (value.data.success) {
                
                setOtpModal(true)
            }

        })
            .catch(err => {
                console.log(err)
            })
    }
    const verifyOtp = (otp) => {
        const res = Acount.verifyOtp(email, otp, setError)
        res.then(value => {
            console.log('value', value.data)
            if (value.data.success) {
                
                setSuccess(true)
            }

        })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div>
            {/* {console.log({ error })} */}
            <Navbar />
            <div className={`${classes.bgLogin}`}>
                <div className="container">
                    <div className="col-11 mx-auto p-5">
                        <div className={`my-5 ${classes.bgBlue}`}>
                            <div className="row">
                                <div className=" col-md-6 my-auto">
                                    <div className=" text-center p-5 m-0">
                                        <img src="Group 251.png" className='w-50' alt="reilitics" />
                                        <div>
                                            <p className="text-white mt-5 fs-15">Welcome, get started by logging into the REI Litics platform. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-auto px-0 ">
                                    <div className="login-right p-5">
                                        <p className="fs-40 Gothic_3D text-center mt-5">LOG IN</p>
                                        <p className='fs-15'>Username</p>
                                        <form onSubmit={loginHandler}>
                                            <input type="text"
                                                id="inputPassword6"
                                                className="form-control w-100 form-bg my-2"
                                                aria-describedby="passwordHelpInline"
                                                name="firstName"
                                                onChange={(e) => setUserName(e.target.value)}
                                                value={userName}
                                                required
                                                placeholder="Enter User Name"
                                            />
                                            <p className="fs-15 my-3">Password</p>
                                            <input type="password"
                                                id="inputPassword6"
                                                className="form-control form-bg  w-100"
                                                aria-describedby="passwordHelpInline"
                                                name="firstName"
                                                onChange={(e) => setPassword(e.target.value)}
                                                value={password}
                                                required
                                                placeholder="Enter Password"
                                            />
                                            <div className="mt-2 d-flex">
                                                <p className="fs-13 ">Forgot Password?
                                                    <a className='blueColor' type="primary" onClick={() => setResetModel(true)}>
                                                        Reaset Now
                                                    </a></p>
                                                <p className="fs-13 text-nowrap ms-auto">Not a Member<a href='/SignUp' className="ms-1 fs-13 text-link pointer-cursor">Sign up</a></p>
                                            </div>
                                            <div className="d-grid gap-2 col-12 mt-3 mx-auto">
                                                <button className="btn btn-primary login-button fs-15" type='submit'>Log in</button>
                                            </div>
                                        </form>
                                        <div className="text-center my-4">
                                            <p className='fs-14'>Sign up with a Social Media</p>
                                        </div>
                                        <div className="text-center my-5">
                                            <img src={"squareFb.svg"} className="ms-2  social" alt="facebook" />
                                            <img src={"squareTwitter.svg"} className="ms-3 social" alt="facebook" />
                                            <img src={"squareGmail.svg"} className="ms-3 social" alt="facebook" />

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LoginModal
                title="Reset Your Password"
                isModalVisible={resetModel}
                closable={false}
                setResetModel={setResetModel}
                resetPasword={resetPasword} />
            <CustomModal
                title="Succefull"
                isModalVisible={succesModel}
                closable={false}
            >
                <div className='p-5'>
                    <p className='fs-22 text-white text-center p-5'>{success}</p>
                    <div className='text-center'>
                        {/* {success} */}
                        {/* <p className='text-white fs-30'>you are login now</p> */}
                        <Link href="/Dashboard">
                            <button className='btn login-button fs-14 px-5 mx-auto'>View your dashboard</button></Link>
                    </div>
                </div>
            </CustomModal>
            <CustomModal
                title="Error"
                isModalVisible={errorModel}
                handleCancel={() => setErrorModel(false)}
                closable={true}
            >
                <p className='text-white'>{error}</p>
            </CustomModal>
            <Otp
                isModalVisible={otpModal}
                handleCancel={() => setErrorModel(false)}
                isModalVisiblee={resetModel}
                closable={false}
                setResetModel={setResetModel}
                verifyOtp={verifyOtp}

            />

        </div>
    )
}

export default Login

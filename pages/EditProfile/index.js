import React, { useState } from 'react'
import Link from "next/link"
import Dashnav from '../../Component/Dashnav';
import Sidebar from '../../Component/SideNavbar';
import Avatar from '../../Component/Avatar';


export default function index() {
    const [userInput, setuserInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        state: "",
        country: "",
    })
    const handleChange = (event) => {
        setuserInput(event.target.value)
    }
    const submitNotes = (event) => {
        event.preventDefault();
    }

    return (
        <div className="d-inline-flex w-100">
            {console.log(userInput)}
            <Sidebar />
            <div style={{ width: "inherit" }}>
                <Dashnav />
                <form className='container my-5 py-5' onSubmit={submitNotes}>
                    <Avatar />
                    <div className='row py-5 my-5'>
                        <div className='col-md-6 col-sm-12'>
                            <div className="form-group my-4">
                                <label className='fs-17'>First Name</label>
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={userInput.firstName}
                                    name="firstName"
                                    id="firstName"
                                    onChange={handleChange}
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="form-group my-4">
                                <label className='fs-17'>Email</label>
                                <input
                                    type="email"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={userInput.email}
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    placeholder="Email"
                                />

                            </div>
                            <div className="form-group my-4">
                                <label className='fs-17'>State</label>
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={userInput.state}
                                    name="state"
                                    id="state"
                                    onChange={handleChange}
                                    placeholder="State"
                                />
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <div className="form-group my-4">
                                <label className='fs-17'>Last Name</label>
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={userInput.lastName}
                                    name="lastName"
                                    id="lastName"
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="form-group my-4">
                                <label className='fs-17'>Password</label>
                                <input
                                    type="password"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={userInput.password}
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    placeholder="Password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                />
                            </div>
                            <div className="form-group my-4">
                                <label className='fs-17'>Country</label>
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={userInput.country}
                                    name="country"
                                    id="country"
                                    onChange={handleChange}
                                    placeholder="Country"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <Link href='/Dashboard'>
                            <button className='no_brdr fs-15 btn_width btnYelow' type='submit'>Change</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

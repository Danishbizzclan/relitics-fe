import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Dashnav from '../../Component/Dashnav';
import Sidebar from '../../Component/SideNavbar';
import Avatar from '../../Component/Avatar';
import GetData from '../../Api/GetData';


export default function EditProfile() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [image, setImage] = useState('');



    const handleChange = (event) => {
        setuserInput(event.target.value)
    }
    const submitNotes = (event) => {
        event.preventDefault();
    }
    useEffect(() => {
        const response = GetData.EditGet();
        console.log(response)
        response.then(value => {
            console.log(value)
          if(value){
          setFirstName(value.data.firstName);
          setLastName(value.data.lastName);
          setEmail(value.data.email);
          setPassword(value.data.password);
          setState(value.data.state);
          setCountry(value.data.country);
          setImage(value.data.image);


          console.log(value.data)
    
        }
        })
      }, [])

    return (
        <div className="d-inline-flex w-100">
            <Sidebar />
            <div style={{ width: "inherit" }}>
                <Dashnav />
                <form className='container mx-auto my-5 py-5' onSubmit={submitNotes}>
                    <Avatar image = {image} />
                    <div className='row gx-5 py-5 my-5'>
                        <div className='col-md-6 col-sm-12'>
                            <div className="form-group my-4">
                                <label className='fs-17'>First Name</label>
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={firstName}
                                    name="firstName"
                                    id="firstName"
                                    onChange={(e) => setFirstName(e.target.value)}
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
                                    value={email}
                                    name="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={state}
                                    name="state"
                                    id="state"
                                    onChange={(e) => setState(e.target.value)}
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
                                    value={lastName}
                                    name="lastName"
                                    id="lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Last Name"
                                />
                            </div>
                            {/* <div className="form-group my-4">
                                <label className='fs-17'>Password</label>
                                <input
                                    type="password"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={password}
                                    name="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                />
                            </div> */}
                            <div className="form-group my-4">
                                <label className='fs-17'>Country</label>
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={country}
                                    name="country"
                                    id="country"
                                    onChange={(e) => setCountry(e.target.value)}
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

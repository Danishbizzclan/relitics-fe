import React, { useState } from 'react';
import Sidebar from '../Component/SideNavbar';
import Dashnav from '../Component/Dashnav';
import Link from "next/link"
import PostData from '../Api/PostData';

export default function EditNotes() {
   const [title, setTitle]= useState('')
   const [details, setDetails]= useState('')
   const [userMessage, setUserMessage]= useState('')


    // const handleChange = (event) => {
    //     setuserInput(event.target.value)
    // }
    const submitNotes = e => {
        e.preventDefault();
        // nextStep();
        const res = PostData.EditNotes(title, details)
        res.then(value => {
            console.log(value)
            setUserMessage(value.data.message)
        })
            .catch(error => {
                console.log("Error",error)
            })
    }

    return <div>
        {/* {console.log(userInput)} */}
        <div className="d-inline-flex w-100">
            <Sidebar />
            <div style={{ width: "inherit" }}>
                <Dashnav />
                <div className='container py-3'>
                    <p className='fs-40 Gothic_3D my-3'>My Notes</p>
                    <p className='fs-30 Gothic_3D my-3'>City State</p>
                    <div className='div_grey p-5'>
                        <p className='fs-22 Bold greyBlack my-3'>Notes</p>
                        <form className='row form' onSubmit={submitNotes} >
                            <div className="form-group my-2">
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control textera-bg'
                                    value={title}
                                    id="title"
                                    name="title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Subject line/Title"
                                />
                            </div>
                            <div className="form-group my-2">
                                <textarea
                                    type="text"
                                    required
                                    className='form-control textera-bg'
                                    rows={13}
                                    name="details"
                                    value={details}
                                    id="details"
                                    onChange={(e) => setDetails(e.target.value)}
                                    placeholder="Add notes details"
                                />
                            </div>
                            <div className='mx-auto text-center'>
                            <p className='text-success fs-21'>  {userMessage}</p>
                               <button type='submit' className='btnYelow fs-16 brdr no_brdr py-3 px-5 mx-2'>Save</button>
                                <Link href='/MyNotes'><button className='btnYelow fs-16 brdr no_brdr py-3 px-5 mx-2'>Cancel</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

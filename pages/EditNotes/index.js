import React, { useState } from 'react';
import Sidebar from '../../Component/SideNavbar';
import Dashnav from '../../Component/Dashnav';
import Link from "next/link"
import PostData from '../../Api/PostData';
import { useRouter } from "next/router";

export default function EditNotes() {
    const router = useRouter();
    const [userInput, setuserInput] = useState({
        details: "",
        title: "",
        noteMessage:""
    })

    const handleChange = (e) => {
        setuserInput({...userInput, [e.target.name]:e.target.value})
    }
    const submitNotes = (e) => {
        e.preventDefault();
    }
    const AddNotes = (e) => {
        // nextStep();
        // setEmail(email)
        e.preventDefault();

        const res = PostData.AddNotes(userInput.details, userInput.title)
        res.then(value => {
            console.log('value', value.data)
            setuserInput({...userInput, noteMessage:value.data.message})

        })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            {console.log(userInput)}
            <div className="d-inline-flex w-100">
                <Sidebar />
                <div style={{ width: "inherit" }}>
                    <Dashnav />
                    <div className='container mx-auto py-3'>
                        <p className='fs-40 Gothic_3D my-3'>My Notes</p>
                        <p className='fs-30 Gothic_3D my-3'>City State</p>
                        <div className='div_grey p-5 notes_form'>
                            <p className='fs-22 Bold greyBlack my-3'>Notes</p>
                            <form className='row form' onSubmit={AddNotes} >
                                <div className="form-group  my-2">
                                    <input
                                        type="text"
                                        required
                                        autoComplete={false}
                                        className='form-control'
                                        value={userInput.title}
                                        id="title"
                                        name="title"
                                        onChange={handleChange}
                                        placeholder="Subject line/Title"
                                    />
                                </div>
                                <div className="form-group my-2">
                                    <textarea
                                        type="text"
                                        required
                                        className='form-control'
                                        rows={13}
                                        name="details"
                                        value={userInput.details}
                                        id="details"
                                        onChange={handleChange}
                                        placeholder="Add notes details"
                                    />
                                </div>
                                <div className='mx-auto text-center'>
                                    <p className='text-success fs-18'>{userInput.noteMessage}</p>
                                   <button type='submit' className='btnYelow fs-16 brdr no_brdr py-3 px-5 mx-2'>Save</button>
                                    <button onClick={() => router.back()} className='btnYelow fs-16 brdr no_brdr py-3 px-5 mx-2'>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

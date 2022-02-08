import React, { useState } from 'react';
import { useRouter } from "next/router";
import Sidebar from '../../Component/SideNavbar';
import Dashnav from '../../Component/Dashnav';
import Link from "next/link"
import { getEventById } from '../../Component/Data/NotesData';

export default function EditNotes() {
    const router = useRouter();
    const eventId = router.query.id
    const event = getEventById(eventId)

    const [userInput, setuserInput] = useState({
        details: event ? event?.details : '',
        title: event ? event?.details : ''
    })

    const handleChange = (e) => {
        setuserInput(e.target.value)
    }
    const submitNotes = (e) => {
        e.preventDefault();
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
                        {
                            eventId && !event ?
                                <h1>Not Found</h1>
                                : <>
                                    <p className='fs-30 Gothic_3D my-3'>City State</p>
                                    <div className='div_grey p-5 notes_form'>
                                        <p className='fs-22 Bold greyBlack my-3'>Notes</p>
                                        <form className='row form' onSubmit={submitNotes} >
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
                                                <Link href='/MyNotes'><button type='submit' className='btnYelow fs-16 brdr no_brdr py-3 px-5 mx-2'>Save</button></Link>
                                                <button onClick={() => router.back()} className='btnYelow fs-16 brdr no_brdr py-3 px-5 mx-2'>Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

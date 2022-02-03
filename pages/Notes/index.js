import React from 'react';
import Link from "next/link"
import Dashnav from '../../Component/Dashnav';
import NotesData from '../../Component/Data/NotesData';
import NotesComponent from '../../Component/NotesComponent';
import SecondNavbar from '../../Component/secondNavbar';
import Sidebar from '../../Component/SideNavbar';

export default function index() {
    return (
        <div>
            <div className="d-inline-flex w-100">
                <Sidebar />
                <div style={{ width: "inherit" }}>
                    <Dashnav />
                    <SecondNavbar />
                    <div className='container mx-auto p-4'>
                        <p className='fs-40 Gothic_3D my-3'>My Notes FOR City, state</p>
                        <div className='row'>
                            <div className='col-lg-3 col-md-4 col-6'>
                                <Link href="/EditNotes">
                                    <div className='bg-notes brdr d-flex flex-column h-100 pointer-cursor'>
                                        <div className='text-center my-auto'>
                                            <img src='./addNotes_Icon.svg' />
                                            <p className='fs-18 Bold mt-3'>Add Note</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {NotesData.map((notes) =>
                                <NotesComponent
                                    title={notes.title}
                                    details={notes.details} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

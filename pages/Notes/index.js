import React from 'react';
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
                    <div className='container py-3'>
                        <p className='fs-40 Gothic_3D my-3'>My Notes FOR City, state</p>
                        <div className='p-4'>
                            <div className='row'>
                                {NotesData.map((notes) =>
                                    <NotesComponent 
                                    title={notes.title}
                                    details={notes.details}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

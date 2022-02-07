import Link from "next/link"
import Dashnav from '../../Component/Dashnav';
import NotesData from '../../Component/Data/NotesData';
import NotesComponent from '../../Component/NotesComponent';
import Sidebar from '../../Component/SideNavbar';
import GetData from '../../Api/GetData';
import React, { useEffect, useState } from 'react'


export default function index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const response = GetData.AllNotes();
        console.log(response)
        response.then(value => {
            console.log("notes", value)
          setData(value.data.articles);
          console.log(value.data.articles)
        //   setLoading(false);
        })
      }, [])
    return (
        <div>
            <div className="d-inline-flex w-100">
                <Sidebar />
                <div style={{ width: "inherit" }}>
                    <Dashnav />
                    <div className='container mx-auto p-5'>
                        <p className='fs-40 Gothic_3D my-3'>My Notes</p>
                        <p className='fs-30 Gothic_3D my-3'>City, state</p>
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
                            {data.map((notes) =>
                                <NotesComponent
                                    title={notes.title}
                                    details={notes.detail} />
                            )}
                        </div>
                        <div>
                            <p className='fs-30 Gothic_3D my-3'>City, state</p>
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
                                {data.map((notes) =>
                                    <NotesComponent
                                        title={notes.title}
                                        details={notes.detail} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

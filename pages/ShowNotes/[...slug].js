import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Sidebar from '../../Component/SideNavbar';
import Dashnav from '../../Component/Dashnav';
import Link from "next/link"
import GetData from '../../Api/GetData';
import { getEventById } from '../../Component/Data/NotesData';




export default function EditNotes() {
    const [data, setData] = useState('')


    const router = useRouter();
    const eventId = router.query.id
    {console.log(eventId)}

    const getNotes =(eventId)=>{
        const response = GetData.showNotes(eventId);
        response.then(value => {
            
        console.log(value)
        //   setNotes(value.data.notes);
        //   console.log(value.data.notess)
        //   setLoading(false);
        })
      }
      useEffect(() => {
        getNotes()
      }, [])
    return (
        eventId && !data ?
            <h1>Not Found</h1>
            : <>
            <div>
                    <div className="d-inline-flex w-100">
                        <Sidebar />
                        <div style={{ width: "inherit" }}>
                            <Dashnav />
                            <div className='container mx-auto py-3'>
                                <p className='fs-40 Gothic_3D my-3'>My Notes</p>
                                <p className='fs-30 Gothic_3D my-3'>{data?.city}</p>
                                <div className='p-5 card'>
                                    <p className='fs-22 Bold greyBlack my-3'>Notes</p>
                                    <p className='fs-22 Bolder my-4'>{data?.title}</p>
                                    <p className='fs-16'>{data?.details}</p>
                                    <div className='mx-auto text-center'>
                                        <button onClick={() => router.back()} className='btnYelow fs-16 brdr no_brdr py-3 px-5 mx-2'>Back</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

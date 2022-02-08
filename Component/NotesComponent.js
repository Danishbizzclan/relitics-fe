import React from 'react';
import Link from "next/link"
import NotesData from './Data/NotesData';

export default function NotesComponent() {
    return (
        <>

            {NotesData.map((note) => {
                return (

                <div className='col-lg-3 col-md-4 col-6'>
                    <div className='bg-dash brdr d-flex flex-column h-100 overflow-hidden'>
                        <div className='d-inline-flex w-100 mt-2 p-3' style={{ flex: "1 1 auto" }}>
                            <p className='fs-18 Bold greyBlack w-75'>{note.title}</p>
                            <img src='./deleteIcon.svg' className='mb-auto ms-auto' />
                        </div>
                        <p className='fs-16 p-3'>{
                            note.details.length > 25
                                ? note.details.substring(0, 70) + '...'
                                : note.details
                        }</p>
                        <div className='d-inline-flex bg-lightBlue bottom_radius w-100'>
                            <button className='btn btn-lg py-3 w-50'>
                                <Link href={`/ShowNotes/${note.id}`} className='pointer-cursor'><img src='./eyeIcon.svg' /></Link>
                            </button>
                            <button className='btn btn-lg py-3 w-50'>
                                <Link href={`/EditNotes/${note.id}`} className='pointer-cursor'><img src='./edit_Icon.svg' /></Link>
                            </button>
                        </div>
                    </div>
                </div>
                )
            })}
        </>
    )
}

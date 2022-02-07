import React from 'react';
import Link from "next/link"

export default function NotesComponent(props) {
    return (
        <>
            <div className='col-lg-3 col-md-4 col-6'>
                <div className='bg-dash brdr d-flex flex-column h-100 overflow-hidden'>
                    <div className='d-inline-flex w-100 mt-2 p-3' style={{ flex: "1 1 auto" }}>
                        <p className='fs-18 Bold greyBlack w-75'>{props.title}</p>
                        <img src='./deleteIcon.svg' className='mb-auto ms-auto' />
                    </div>
                    <p className='fs-16 p-3'>{
                        props.details.length > 25
                            ? props.details.substring(0, 70) + '...'
                            : props.details
                    }</p>
                    <div className='d-inline-flex bg-lightBlue bottom_radius w-100'>
                        <button className='btn btn-lg py-3 w-50'>
                            <Link href="/EditNotes" className='pointer-cursor'><img src='./eyeIcon.svg' /></Link>
                        </button>
                        <button className='btn btn-lg py-3 w-50'>
                            <Link href="/EditNotes" className='pointer-cursor'><img src='./edit_Icon.svg' /></Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

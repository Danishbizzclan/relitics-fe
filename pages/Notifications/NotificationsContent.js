import React from 'react'
import classes from './Notifications.module.css'
import Navbar from '../../Component/Navbar'


export default function NotificationsContent(props) {
    const Noti = Object.keys(props.data.date).map(x => {
        return (

            <div>
                <div className='bluebtn px-5'>
                    <p className='ps-4 py-3 fs-18 Boldest'>{x}</p>
                </div>
                {props.data.date[x].map(y => {
                    console.log({ x, y })
                    return (
                        <div className='d-inline-flex w-100 px-5'>
                            <>
                                <img src={y.img} style={{ width: "10%" }} alt={y.altImg} />
                                <p className='my-auto fs-16 ms-3'>{y.text}</p>
                            </>
                        </div>
                    )
                })}
            </div>
        )
    })

    return (
        <>

            {Noti}
        </>
    )
}

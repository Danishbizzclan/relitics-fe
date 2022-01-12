import React from 'react'
import classes from './Notifications.module.css'
import Navbar from '../../Component/Navbar'


export default function NotificationsContent(props) {
    const Noti = Object.keys(props.data.date).map(x => {
        return (
        
            <div>
                <p className={`ps-4 py-2 ${classes.dateHeading}`}>{x}</p>
                {props.data.date[x].map(y => {
                    console.log({ x, y })
                    return (
                        <div className='d-inline-flex px-3'>
                            <>
                                <img src={y.img} style={{width:"10%"}} alt={y.altImg} />
                                <p className='my-auto ms-3'>{y.text}</p>
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

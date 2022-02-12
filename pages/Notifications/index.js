import React, { useState } from 'react'
import classes from './Notifications.module.css'
import NotificationsContent from './NotificationsContent';
import NotificationsData from '../../Component/Data/NotificationsData';
import MaterialDesignSwitch from '../../Component/Toggle';
import Navbar from '../../Component/Navbar';
import Foter from '../../Component/Footer';
// import Switch from "react-switch";
// import { Switch } from '@material-ui/core';
export default function Notifications() {
    const [online, setOnline] = useState(false)
    const handleChange = () => {
        setOnline(!online)
    }

    return (
        <>
            <Navbar />
            <div className={`${classes.bg1}`}>
                <div className={`container-fluid m-0 py-md-5 py-sm-0 ${classes.notificationsDiv1}`}>
                    <div className='container'>
                        <div className={`col-md-10 col-auto mx-auto my-md-5 my-sm-0${classes.notificationsDiv2}`}>
                            <div className={`card px-0 py-0 ${classes.cardShadow}`}>
                                <div className='d-inline-flex w-100 px-5'>
                                    <h2 className='m-4 me-auto fs-30 Gothic_3D greyBlack'>Notifications</h2>
                                    <div className='mt-4 me-3'>
                                        <MaterialDesignSwitch />
                                    </div>
                                </div>
                                <div className='min-vh-50'>
                                    <NotificationsContent
                                        data={NotificationsData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Foter />
                    </div>
                </div>
            </div>
        </>


    )
}

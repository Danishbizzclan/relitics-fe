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
                <div className={`container-fluid m-0 p-0 ${classes.notificationsDiv1}`}>
                    <div className={`col-lg-7 col-md-8 col-auto my-5 mx-auto ${classes.notificationsDiv2}`}>
                        <div className='d-inline-flex w-100'>
                            <h2 className={`m-4 me-auto ${classes.text}`}>Notifications</h2>
                            <div className='mt-4 me-3'>
                                <MaterialDesignSwitch />
                            </div>
                        </div>

                        <NotificationsContent
                            data={NotificationsData}
                        />

                    </div>
                    <div>
                        <Foter />
                    </div>
                </div>
            </div>

        </>


    )
}

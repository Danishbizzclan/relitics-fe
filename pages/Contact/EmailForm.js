import React from "react";
import classes from './ContactUs.module.css'



const EmailForm = () => {
    return (
        <>
            <h1 className={classes.subHeading2}>Send Message</h1>
            <h6 className={`text-nowrap ${classes.subHeading}`}>You can also contact us at:</h6>
            <div className="d-inline-flex">
                <div>
                    <img src={'../email_2.png'} alt="" className={classes.Email} />
                </div>
                <div>
                    <h4 className={classes.subHeading3}>Email</h4>
                    <h6 className={classes.subHeading}>info@reilitics.com</h6>
                </div>
            </div>
            <h4 className={`text-nowrap ${classes.subHeading3}`}>Get in contact on social media</h4>
            <div className="d-inline">
                <img className={`${classes.icon} me-1`}src={"/facebook.png"} alt="" />
                <img className={`${classes.icon} me-1`} src={"/twitter.png"} alt="" />
                <img className={`${classes.icon} me-1`} src={'/instagram.png'} alt="" />
                <img className={`${classes.icon} me-1`} src={'pinterest.png'} alt="" />
            </div>
        </>
    )
}
export default EmailForm
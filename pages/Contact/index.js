import React from 'react';
import classes from './ContactUs.module.css'
import EmailForm from './EmailForm';
import Navbar from '../../Component/Navbar';
import Foter from '../../Component/Footer';
import MessageForm from './MessageForm';
import HeadImage from '../../styles/UI/HeadImage';

const ContactUs = () => {
    return (
        <>
        <Navbar />
            <HeadImage header='Contact us now' />
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-10 mx-auto row">
                        <h1 className={classes.heading}>We'd love to hear from you</h1>
                        <h6 className={classes.subHeading}>Get in touch for any inqueries or suggestions.</h6>
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-12 my-5 px-3 py-3 card">
                                <h1 className={classes.subHeading2}>Send Message</h1>
                                <MessageForm />
                            </div>
                            <div className="col-lg-5 col-md-5 col-12 my-5 px-5 py-3">
                                <EmailForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Foter />
        </>
    )
}
export default ContactUs;
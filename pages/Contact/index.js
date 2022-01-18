import React from 'react';
import { useState } from "react";

import classes from './ContactUs.module.css'
import EmailForm from './EmailForm';
import Navbar from '../../Component/Navbar';
import Foter from '../../Component/Footer';
import MessageForm from './MessageForm';
import HeadImage from '../../styles/UI/HeadImage';
import Acount from '../../Api/Acount';
const ContactUs = () => {
     const [error, setError] = useState('')


        const [firstName, setFirstName] = useState('')

        const [lastName, setLastName] = useState('')
        const [email, setEmail] = useState('')
        const [subject, setSubject] = useState('')
        const [message, setMessage] = useState('')
        reCaptcha: false

 
   
    
    const SendMessage = e => {
        e.preventDefault();
        // nextStep();
        const res = Acount.Contact(userInput, setError)
        res.then(value => {
            console.log(value)
        })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <Navbar />
            <HeadImage header='REACH OUT TO US' />
            <div className="pb-5">
                <div className='container my-5'>
                    <div className="my-5">
                        <p className='fs-40 Gothic_3D Bold mb-0'>We'd love to hear from you</p>
                        <p className='fs-18 mb-0'>Use the form below to get in touch with us.</p>
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-12 my-5 p-3 card border_1">
                                <p className='fs-40 Gothic_3D Bold ml-4'>Send message</p>
                                <MessageForm 
                                // handleChange={handleChange}
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                subject={subject}
                                messagee={message}
                                message={SendMessage}
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 my-5 px-5">
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
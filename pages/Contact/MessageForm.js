import React, { useState } from "react";
import classes from './ContactUs.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'


const MessageForm = () => {
    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        reCaptcha: false
    })
    const [value, setValue] = useState('')
    const submitMessage = event => {
        event.preventDefault();
    }
    const handleChange = (event) => {
        setUserInput(event.target.value)
    }
    const onChangeRecaptcha = (value) => {
        console.log("Captcha value:", value);
    }

    return (
        <>
            <form onSubmit={submitMessage}>
                <div className="row form">
                    {console.log(userInput)}
                    <div className="row px-0 w-100 m-0">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="form-group my-2">
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={userInput.firstName}
                                    id="firstName"
                                    onChange={handleChange}
                                    placeholder="First Name"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group my-2">
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={userInput.lastName}
                                    id="lastName"
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group my-2">
                        <input
                            type="email"
                            required
                            autoComplete={false}
                            className='form-control'
                            value={userInput.email}
                            id="email"
                            onChange={handleChange}
                            placeholder="Email address"
                        />
                    </div>
                    <div className="col-12">
                        <div class="form-group my-2">
                            <input
                                type="text"
                                required
                                className='form-control'
                                value={userInput.subject}
                                id="subject"
                                onChange={handleChange}
                                placeholder="Subject" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="form-group my-2">
                            <textarea
                                type="text"
                                required
                                className='form-control'
                                rows={4}
                                value={userInput.message}
                                id="message"
                                onChange={handleChange}
                                placeholder="Message" />
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-lg-9 col-md-9 col-12">
                            <h6 className="mb-0 fs-14">Please check the box below to complete</h6>
                            <div className="ps-0">
                                <ReCAPTCHA
                                    sitekey="6LdlkHUdAAAAAMp28lUJMQixeXECX2BU4VkJvUYl"
                                    id="reCaptcha"
                                    style={{ transform: 'scale(0.7)', transformOrigin: 'left' }}
                                    onChange={onChangeRecaptcha}
                                    name="reCaptcha"
                                    value={userInput}
                                />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-2 col-12 my-auto'>
                            <button type="submit" className='btn btn-lg fs-15 px-5 py-4 btnYelow'>Send</button>
                        </div>
                    </div>
                </div>
            </form>
            <form className=" loginForm" onSubmit={submitMessage}>
            </form>
        </>
    )
}
export default MessageForm;
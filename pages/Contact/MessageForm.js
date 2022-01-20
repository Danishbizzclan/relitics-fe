import React, { useState } from "react";
import classes from './ContactUs.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'
import { message } from "antd";


const MessageForm = (props) => {
    console.log (props)

    // const [value, setValue] = useState('')
  
  
    // const onChangeRecaptcha = (value) => {
    //     console.log("Captcha value:", value);
    // }

    return (
        <>
                <div className="row form">
                    {console.log(props.state)}
                    <form onSubmit={props.message}>

                    <div className="row px-0 w-100 m-0">
                        <div className="col-12 col-md-6 col-lg-6">

                            <div className="form-group my-2">
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={props.firstName}
                                    name="firstName"
                                    id="firstName"
                                    onChange={props.handleChange}
                                    placeholder="First Name"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="form-group my-2">
                                <input
                                    type="text"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={props.lastname}
                                    id="lastName"
                                    onChange={props.handleChange}
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group my-2">
                        <input
                            type="email"
                            required
                            autoComplete={false}
                            className='form-control'
                            value={props.email}
                            id="email"
                            onChange={props.handleChange}
                            placeholder="Email address"
                        />
                    </div>
                    <div className="col-12">
                        <div className="form-group my-2">
                            <input
                                type="text"
                                required
                                className='form-control'
                                value={props.subject}
                                id="subject"
                                onChange={props.handleChange}
                                placeholder="Subject" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group my-2">
                            <textarea
                                type="text"
                                required
                                className='form-control'
                                rows={4}
                                value={props.message}
                                id="message"
                                onChange={props.handleChange}
                                placeholder="Message" 
                                />
                             {console.log(props.state.message)}

                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-lg-9 col-md-9 col-12">
                            <h6 className="mb-0 fs-14 mt-2">Please check the box below to complete</h6>
                            <div className="ps-0">
                                <ReCAPTCHA
                                    sitekey="6LdlkHUdAAAAAMp28lUJMQixeXECX2BU4VkJvUYl"
                                    id="reCaptcha"
                                    style={{ transform: 'scale(0.7)', transformOrigin: 'left' }}
                                    onChange={onChangeRecaptcha}
                                    name="reCaptcha"
                                    value={props.state}
                                />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-2 col-3 my-auto'>
                            <button type="submit" className='btn fs-15 w-100 px-5 py-4 btnYelow'>Send</button>
                        </div>
                    </div>
                    </form>

                </div>
           
        </>
    )
}
export default MessageForm;
import React from "react";
import classes from './ContactUs.module.css'



const EmailForm = () => {
    return (
        <>
            <p className="fs-40 Gothic_3D Bolder greyBlack">Send Email</p>
            <p className="text-nowrap mb-0 fs-18" subHeading>You can also contact us at:</p>
            <div className="d-inline-flex my-5">
                <div className=" d-flex">
                    <img src={"email_2.png"} alt="" className="me-4 my-auto hover" />
                </div>
                <div>
                    <p className="font-17 mb-0 Bold greyBlack my-2">Email</p>
                    <p className="fs-19 mb-0 greyBlack my-2">info@reilitics.com</p>
                </div>
            </div>
            <p className=' fs-21 Boldest greyBlack'>Get in contact on social media</p>
            <div className="d-flex linksDiv mt-0">
                <img className="links hover" style={{width:'44px', height:'44px'}} src={"facebook_square.png"} alt="" />
                <img className="links hover" style={{width:'44px', height:'44px'}} src={"twitter_square.png"} alt="" />
                <img className="links hover" style={{width:'44px', height:'44px'}} src={"instagram_square.png"} alt="" />
                <img className="links hover" style={{width:'44px', height:'44px'}} src={"pinterest.png"} alt="" />
            </div>
        </>
    )
}
export default EmailForm
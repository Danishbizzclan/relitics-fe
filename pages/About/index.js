import React from 'react';
import classes from '../../styles/UI/Text.module.css';
import './AboutUs.module.css';
import Navbar from '../../Component/Navbar'
import HeadImage from '../../styles/UI/HeadImage';
import Foter from '../../Component/Footer'

const AboutUs = () => {
    return (
        <>
        <Navbar />
            <HeadImage header='About us'/>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-10 mx-auto row">
                        <div className="col-lg-6 col-md-10 col-sm-10">
                            <div className={classes.bg_text}>
                                <p className='fs-16'>And why is it best buy iMac? The 2 MacBook Air models have Apple’s M1 System
                                    on a Ship, which features an 8-core CPU, 16-core Neural Engine, and 8GB of RAM
                                    (upgradable to 16GB). It offers15 hours of battery life for
                                    wireless web and 18 hours Apple TV app movie playback. When it involves purchasing
                                    a Mac you should know which one is best buy iMac?, we have got the lowdown on each model
                                    to assist you create a buying decision.</p>
                                <p>If you’re reading this text , the likelihood is that you’re brooding about
                                    buying a replacement Mac and should be in need of a touch of guidance.
                                    Fortunately, Who’s it for? The MacBook Air is right for the budget conscious.
                                    It’s also for anyone who is usually on the go, doesn’t want to be caught up
                                    by a regular-size laptop, and wishes a computer that’s more versatile than an iPad
                                </p>
                                <p>What are the specificationswe’re quite conversant in Apple’s Macs, and we’re
                                    happy to assist you select the proper Mac for you.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-10 col-sm-10">
                            <img src={'./AboutUsImg.png'} style={{ width: '550px', height: '500px' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Foter />
        </>
    )
}
export default AboutUs;
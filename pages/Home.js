import React from 'react'
import classes from "./Home.module.css"
import FeatureCard from '../Component/FeatureCard'
import PriceCard from '../Component/PriceCard'

const HomePage = () => {
    return (
        <div>
            <div className={classes.mainn}>
                <div className="container">
                <div className="row default-padding">
                    <div className="col-sm-8 py-5">
                        <p className="text-white fs-70">WE'RE HERE TO SIMPLIFY THE MARKET RESEARCH</p>
                        <p className="text-white font-17">Eliminate hours of pain-staking research with a single platform that has updated market, economic, and demographic data for the top metro markets across the United States.</p>
                      <div className="mt-4"> <button type="button" class="btn btn-primary fs-15 home-button">See Pricing</button></div> 

                    </div>
                </div>
                </div>

            </div>
            <div className="container">
                <div className="row default-padding">
                    <div className="col-sm-6">
                        <p className='fs-40'>MAKE SMARTER DECISIONS</p>
                        <div className={`${classes.homeline} mb-3 mt-4`}></div>
                        <p className=" font-17">REI Litics offers an intuitive and easy-to-use dashboard to help you quickly compare data on the top metro markets across the U.S.</p>
                        <p className='font-17 mt-5'>Imagine the time you’ll save and the advantage you’ll have with information on pricing, appreciation, rental returns, property taxes, demand, and other economic and demographic factors instantly available at your fingertips.</p>
                        <p className='font-17 mt-5'>Our mission is simple - To create the most versatile market research platform available for real estate investors.  </p>
                    </div>
                <div className="col-sm-6 my-5">
                <iframe class="embed-responsive-item h-100 w-100" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>

                </div>
                </div>

            </div>
            <div className={classes.mainn}>
                <div className="container">
                <div className="row default-padding">
                   <p className="text-white fs-40 my-4">FEATURES</p>
                   <div className={`ms-2 ${classes.homeline1}`}> </div>
                       <p className={"font-17 text-white mt-4"}>REI Litics is a comprehensive and complete collection of widely available data to help you narrow down your market when it comes to real estate investing. </p>
            <div className="row mt-3">  <FeatureCard /></div>
                </div>
                </div>

            </div>
            <div className="container mt-3">
                <div className="row default-padding">
                <p className='fs-40 '>PRICING</p>
                <div className={`${classes.homeline} ms-3`}></div>
                <p className=" font-17 mt-3">Pick the plan that works best for your needs. No contracts or long-term agreements. Use REI Litics as long as it’s helpful to you and your goals.</p>
                    <PriceCard />
                </div>
        

            </div>
        </div>
    )
}

export default HomePage

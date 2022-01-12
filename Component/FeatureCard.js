import React from 'react'
import HomeFeature from './FeatureData'

const FeatureCard = () => {
    return (
        <>
            {HomeFeature.map(data =>{
                return(
                    
                    <div className="col-sm-3 d-flex flex-column ">
                        <div className="card-bg py-5 px-5 zoom text-center" style={{ flex: "1 1 auto" }}>
                            <img src={data.img} className="img-fluid w-25" alt="..."></img>
                            <p className="my-3 fs-16 semi-bold">{data.Feature}</p>
                            <p className="fs-14">{data.Deatail}</p>
                        </div>
                </div>
        
                )
            })} 
       </> 
    )
}

export default FeatureCard

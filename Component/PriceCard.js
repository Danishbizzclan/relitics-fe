import React, { useEffect, useState } from 'react'
import GetData from "../Api/GetData";


const PriceCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const response = GetData.AllPackeges();
        console.log(response)
        response.then(value => {
            if(value){
          setData(value?.data?.packages);
          console.log(value.data.packages)
        }
        })
      }, [])
    return (
        <>
            {data.map(data => {
                return (
                    <>
                        <div className="col-lg-4 col-md-6 my-5 mx-auto" >
                            <div className=" zoom d-flex text-center h-100 Card-color flex-column shadow p-3 brdr" >
                                <div className='px-3' style={{ flex: "1 1 auto" }}>
                                    <p className="fs-30-normal Gothic_3D  my-auto ">{data.name}</p>
                                    <div className="text-center w-75 price-border div-color edge px-4  mx-auto">
                                        <p className="my-auto Gothic_3D fs-40" >{data.price}</p>
                                        <p className="mt-2 fs-22 Gothic_3D mb-0" >{data.packageType}</p>
                                        <div className="price-line my-5 mx-auto"></div>
                                        <div className="d-flex mt-3">
                                            <img src={"check-circle-fill.png"} className="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                                            <p className="my-auto ms-2 fs-15" >{data.options[0]}</p>
                                        </div>
                                        <div className="d-flex mt-3">
                                            <img src={"check-circle-fill.png"} className="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                                            <p className="my-auto ms-2 fs-15" >{data.options[1]}</p>
                                        </div>
                                        <div className="d-flex mt-3">
                                            <img src={"check-circle-fill.png"} className="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                                            <p className="my-auto ms-2 fs-15" >{data.options[2]}</p>
                                        </div>
                                        <div className="d-flex mt-3 mb-4">
                                            <img src={"check-circle-fill.png"} className="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                                            <p className="my-auto ms-2 fs-15">{data.options[3]}</p>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn_width btnYelow zoom buy-color mb-5 fs-15 mt-5">Buy Now</button>
                                </div>
                            </div>

                        </div>
                    </>
                )
            })}

        </>
    )
}

export default PriceCard

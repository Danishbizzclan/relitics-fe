import React from 'react'
import PriceCardData from './PriceCardData'

const PriceCard = () => {
    return (
        <>
{PriceCardData.map(data =>{
    return(
        <>
        <div className="col-lg-4 col-md-6 mt-5 " >
            <div className=" zoom d-flex text-center h-100 Card-color flex-column shadow mb-3" >
                <div className=' pb-5 px-3'  style={{ flex: "1 1 auto" }}>
                <p className="fs-30-normal  my-auto" style={{fontWeight: "300" }}>{data.Price}</p>


                <div className="text-center w-75 price-border div-color edge px-4  mx-auto">
                    <p className="my-auto fs-40" >{data.Amount}</p>
                    <p className="mt-2 fs-22 mb-0" style={{fontWeight: "300" }}>{data.Package}</p>
                    <div className="price-line my-5 mx-auto"></div>

                    <div className="d-flex mt-3">
                        <img src={"check-circle-fill.png"} class="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                        <p className="my-auto ms-2 fs-15" >Option 1</p>

                    </div>

                    <div className="d-flex mt-3">
                        <img src={"check-circle-fill.png"} class="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                        <p className="my-auto ms-2 fs-15" >Option 1</p>

                    </div>
                    <div className="d-flex mt-3">
                        <img src={"check-circle-fill.png"} class="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                        <p className="my-auto ms-2 fs-15" >Option 1</p>

                    </div>
                    <div className="d-flex mt-3 mb-4">
                        <img src={"check-circle-fill.png"} class="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                        <p className="my-auto ms-2 fs-15">Option 1</p>

                    </div>

                </div>
                <button type="button" class="btn btn-info zoom buy-color mb-5 fs-15 mt-5">Buy Now</button>

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

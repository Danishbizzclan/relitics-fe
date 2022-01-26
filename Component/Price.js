import React from 'react'
// import PriceCardData from './PriceCardData'

const Price = (props) => {
    return (
        <div className="mx-auto text-center py-5 px-3 w-100 Card-color ">
            <p className="my-auto fs-30 Gothic_3D">{props.Price}</p>
            <div className="text-center w-75 price-border div-color edge px-4  mx-auto">
                <p className="my-auto fs-40 Gothic_3D Bold text-nowrap" >{props.Amount}</p>
                <p className="mt-2 fs-22 Gothic_3D text-nowrap mb-0">{props.Package}</p>
                <div className="price-line mt-2 mb-5 mx-auto"></div>
                <div className="d-flex mb-4">
                    <img src={"check-circle-fill.png"} className="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                    <p className="my-auto  ms-2 fs-14" >Option 1</p>
                </div>
                <div className="d-flex mb-4">
                    <img src={"check-circle-fill.png"} className="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                    <p className="my-auto ms-2 fs-14" >Option 1</p>
                </div>
                <div className="d-flex mb-4">
                    <img src={"check-circle-fill.png"} className="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                    <p className="my-auto ms-2 fs-14" >Option 1</p>
                </div>
                <div className="d-flex mb-4 mb-4">
                    <img src={"check-circle-fill.png"} className="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                    <p className="my-auto ms-2 fs-14">Option 1</p>
                </div>
            </div>
            <button type="submit" onClick={props.Continue} className="btn btnYelow btn_width brdr-2 py-3 mt-5">Buy Now</button>
            <hr className='d-sm-flex d-md-none mt-5'/>
        </div>
    )
}

export default Price
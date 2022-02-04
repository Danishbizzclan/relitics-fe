import React from 'react';

export default function GraphComponent(props) {
    return (
        <div className='card my-4 hover'>
            <div className='d-lg-inline-flex w-100'>
                <div className='w-50'>
                    <p className='fs-30 mb-0 Gothic_3D'>{props.heading}</p>
                </div>
                <div className='ms-auto d-lg-inline-flex d-md-inline-flex d-sm-block'>
                    <p className='fs-12 my-auto greyBlack'>Provided via the Zillow Public Records API</p>
                    <img src='./ZilowLogo.svg' className='w-25 ms-auto' />
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </div>)
}
import React from 'react';
import ApexChart from './PriceCompareGraph';

export default function MedianGraph() {
    return <div className='card'>
        <div className='d-lg-inline-flex w-100'>
            <div className='w-50'>
                <p className='fs-30 mb-0 Gothic_3D'>MEDIAN List Price Vs MEDIAN Sale Price</p>
            </div>
            <div className='ms-auto d-lg-inline-flex d-md-inline-flex d-sm-block'>
                <p className='fs-12 my-auto greyBlack'>Provided via the Zillow Public Records API</p>
                <img src='./ZilowLogo.svg' className='w-25 ms-auto' />
            </div>
        </div>
        <div className='p-3'>
            <ApexChart />
        </div>
    </div>;
}

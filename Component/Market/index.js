import React from 'react';
import ApreciationTableComponent from '../ApreciationTableComponent'
import RentalTableComponent from '../RentalTableComponent'
import MedianGraph from './MarketPageGraph';

export default function Market() {
    const stateSort = (event) => [
        sortedInfo = {
            order: 'descend',
            columnKey: 'age',
        }]
    const CitySort = (event) => [
        sortedInfo = {
            order: 'descend',
            columnKey: 'age',
        }]

    return (
        <div>
            <p className='fs-40 Gothic_3D my-3'>New york City, NY</p>
            <div className='d-flex my-3'>
                <div className='row w-25 my-auto'>
                    <div className='d-block col-6'>
                        <label className='bluetxt fs-13'>State</label>
                        <select className="form-control form-select form-control-sm" onClick={stateSort}>
                            <option>All</option>
                        </select>
                    </div>
                    <div className='d-block col-6'>
                        <label className='bluetxt fs-13'>City</label>
                        <select className="form-control form-select form-control-sm" onClick={CitySort}>
                            <option>state</option>
                        </select>
                    </div>
                </div>
                <div className='ms-auto my-auto'>
                    <button className='btn bluebtn px-4 fs-14 m-1'>Search properties on  Zillow </button>
                    <button className='btn bluebtn px-4 fs-14 m-1'>Add to Favourite <img src='unfilledHeart1.svg' className='ms-2 my-auto' /></button>
                    <button className='btn bluebtn px-4 fs-14 m-1'>Print <img src='./print.svg' className='ms-2 my-auto' /></button>
                    <button className='btn bluebtn px-4 fs-14 m-1'>Download PDF <img src='./Download_Icon1.svg' className='ms-2 my-auto' /></button>
                </div>
            </div>
            <div className='d-lg-inline-flex'>
                <div className='p-3 mx-2 paginetion_none bg_table'>
                    <ApreciationTableComponent />
                </div>
                <div className='p-3 mx-2 paginetion_none bg_table'>
                    <RentalTableComponent />
                </div>
            </div>
            <div className=''>
                <MedianGraph />
            </div>
            <footer className='text-center mt-5'>
                <p>DISCLAIMER - Data is provided “as is” via the Public Records API.</p>
                <p>© Zillow, Inc. 2006-2020. Use is subject to Term of Use.</p>
                </footer>
        </div>
    );
}

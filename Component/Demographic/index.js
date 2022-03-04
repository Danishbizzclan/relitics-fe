import React from 'react';
import Population from './Population';
import PopulationByAge from './PopulationByAge';


export default function Demographic() {
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
            <div className='row my-3'>
                <div className='col-lg-3 col-12'>
                    <p className='fs-40 Gothic_3D my-3'>New york City, NY</p>
                </div>
                <div className='col-lg-9 col-12 mt-auto'>
                    <p className='fs-17 ms-2'>REI Litics uses the Census Bureau Data API but is not endorsed or certified by the Census Bureau.</p>
                </div>
            </div>
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
                            <option>State</option>
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
            <div className='card p-3 bg_light'>
                <Population />
            </div>
            <div className='card p-3 my-4 bg_light'>
                <PopulationByAge />
            </div>
            <footer className='text-center mt-5'>
                <p>DISCLAIMER - Data is provided “as is” via the Public Records API.</p>
                <p>© Zillow, Inc. 2006-2020. Use is subject to Term of Use.</p>
            </footer>
        </div>
    );
}

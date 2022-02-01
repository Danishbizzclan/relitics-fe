import React from 'react';

export default function index() {
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
                        <select class="form-control form-control-sm" onClick={stateSort}>
                            <option>All</option>
                        </select>
                    </div>
                    <div className='d-block col-6'>
                        <label className='bluetxt fs-13'>City</label>
                        <select class="form-control form-control-sm" onClick={CitySort}>
                            <option>Ascending</option>
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
        </div>
    );
}

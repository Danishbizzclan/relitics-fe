import React from 'react';

export default function GraphComponent(props) {
    const yearSort = (event) => [
        sortedInfo = {
            order: 'descend',
            columnKey: 'age',
        }]
    return (
        <div className='card p-3 my-4 bg_light'>
            <div className='card'>
                <div className='d-lg-inline-flex w-100'>
                    <div className='w-50'>
                        <p className='fs-30 mb-0 Gothic_3D'>{props.heading}</p>
                    </div>
                    <div className='ms-auto d-lg-inline-flex d-md-inline-flex d-sm-block'>
                        <p className='fs-12 my-auto greyBlack'>Provided via the Zillow Public Records API</p>
                        <img src='./ZilowLogo.svg' className='w-25 ms-auto' />
                    </div>
                </div>
                <div className='d-block w-25'>
                    <div className='d-inline-flex w-50'>
                        <label className='fs-14 w-25 my-auto'>Year</label>
                        <select className="form-control form-select form-control-sm" onClick={yearSort}>
                            <option>All</option>
                        </select>
                    </div>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>)
}
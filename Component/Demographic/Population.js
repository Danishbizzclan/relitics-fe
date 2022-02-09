import React from 'react';
import PopulationGraph from './PopulationGraph';

export default function Population() {
    return (
        <div className='card my-4 hover'>
            <div className='w-50'>
                <p className='fs-30 mb-0 Gothic_3D'>Population</p>
                <p className='fs-30 mb-0 Gothic_3D'>887,232</p>
            </div>
            <PopulationGraph />
            <div>
            </div>
        </div>
    );
}

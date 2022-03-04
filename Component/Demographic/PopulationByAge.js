import React from 'react';
import PopulationByAgeGraph from './PopulationByAgeGraph';

export default function PopulationByAge() {
    return (
        <div className='card my-4'>
            <div className='w-50'>
                <p className='fs-30 mb-0 Gothic_3D'>Population By Age</p>
            </div>
            <PopulationByAgeGraph />
            <div>
            </div>
        </div>
    );
}

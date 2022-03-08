import React from 'react';
import UnemploymentRateGraph from './UnemploymentRateGraph';
import EmploymentSectorsGraph from './EmploymentSectorsGraph';

export default function EconomicGraphs() {
    return (
        <>
            <div className='card p-3 bg_light'>
                <div className='card my-4'>
                    <div className='w-50'>
                        <p className='fs-30 mb-0 Gothic_3D'>Unemployment Rate</p>
                    </div>
                    <div>
                        <UnemploymentRateGraph />
                    </div>
                </div>
            </div>
            
            <div className='card p-3 bg_light'>
                <div className='card my-4'>
                    <div className='d-lg-inline-flex w-100'>
                        <div className='w-50'>
                            <p className='fs-30 mb-0 Gothic_3D'>EMPLOYMENT SECTORS</p>
                        </div>

                    </div>
                    <div>
                        <EmploymentSectorsGraph />
                    </div>
                </div></div>
        </>
    )
}

import React from 'react'
import IncomeHHByTypeGraph from './IncomeHHByTypeGraph'
import IncomeHHByTypeTable from './IncomeHHByTypeTable'
import IncomeHHTMMGraph from './IncomeHHTMMGraph'

export default function IncomeHHByType() {
    return (
        <div>
            <div className='row container p-2 my-5'>
                <div className='col-sm-12 col-lg-7 my-auto'>
                    <div className='paginetion_none Income_table'>
                        <p className='fs-30 mb-0 ms-5 Gothic_3D text-light'>Household Types</p>
                        <IncomeHHByTypeTable />
                    </div>
                </div>
                <div className='col-sm-12 col-lg-5'>
                    <div className='card'>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-15'><span className='fs-20 Bold'>3.42</span> Average Family Size</p>
                        <p className='fs-15'><span className='fs-20 Bold'>3.42</span> Average Family Size</p>
                    </div>
                        <IncomeHHByTypeGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

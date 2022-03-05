import React from 'react'
import IncomeHHByTypeGraph from './IncomeHHByTypeGraph'
import IncomeHHByTypeTable from './IncomeHHByTypeTable'
import IncomeHHTMMGraph from './IncomeHHTMMGraph'

export default function IncomeHHByType() {
    return (
        <div>
            <div className='row container p-5 my-5'>
                <div className='col-sm-12 col-lg-6 my-auto'>
                    <div className='paginetion_none Income_table'>
                    <p className='fs-30 mb-0 ms-5 Gothic_3D text-light'>Household Types</p>
                        <IncomeHHByTypeTable />
                    </div>
                </div>
                <div className='col-sm-12 col-lg-6 my-auto'>
                    <div>
                        <IncomeHHByTypeGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

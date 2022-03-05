import React from 'react'
import IncomeHHTGraph from './IncomeHHTGraph'
import IncomeHHTMMGraph from './IncomeHHTMMGraph'
import IncomeHHTTable from './IncomeHHTTable'

export default function IncomeHHT() {
    return (
        <div className='card my-4'>
            <div className='w-50'>
                <p className='fs-30 mb-0 Gothic_3D'>Income by Household Type</p>
            </div>
            <IncomeHHTGraph />
            <div className='row container p-5 my-5'>
                <div className='col-sm-12 col-lg-5 my-auto'>
                    <div className='paginetion_none Income_table'>
                        <IncomeHHTTable />
                    </div>
                </div>
                <div className='col-sm-12 col-lg-7 my-auto'>
                    <div>
                        <IncomeHHTMMGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

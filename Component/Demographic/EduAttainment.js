import React from 'react'
import EduAttainmentGraph from './EduAttainmentGraph'
import EduAttainmentPieGraph from './EduAttainmentPieGraph'
import EduAttainmentTable from './EduAttainmentTable'

export default function EduAttainment() {
    return (
        <div className='card my-4'>
            <p className='fs-30 mb-0 Gothic_3D'>Educational Attainment by Sex (over 25)</p>
            <div>
                <EduAttainmentGraph />
            </div>
            <div className='row container my-5'>
                <div className='col-sm-12 col-lg-5 my-auto'>
                    <div className='paginetion_none Income_table'>
                        <EduAttainmentTable />
                    </div>
                </div>
                <div className='col-sm-12 col-lg-7 my-auto'>
                    <EduAttainmentPieGraph />
                </div>
            </div>
        </div>
    )
}

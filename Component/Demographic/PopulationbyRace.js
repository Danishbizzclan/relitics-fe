import React from 'react'
import PopulationbyRaceGraph from './PopulationbyRaceGraph'
import PopulationbyRaceTable from './PopulationbyRaceTable'

export default function PopulationbyRace() {
    return (
        <div className='row container gx-0 p-2 my-5'>
            <div className='col-sm-12 col-lg-7 my-auto'>
                <div className='paginetion_none Income_table'>
                    <div className='d-flex justify-content-between px-5 text-light'>
                    <p className='fs-30 Gothic_3D mb-0'>Population by Race</p>
                    <p className='fs-30 Gothic_3D mb-0'>Hispanic</p>
                    <p className='fs-30 Gothic_3D mb-0'>Non-Hispanic</p>
                    </div>
                    <PopulationbyRaceTable />
                </div>
            </div>
            <div className='col-sm-12 col-lg-5'>
                <div className='bg-white brdr_card brdr p-5'>
                    <PopulationbyRaceGraph />
                </div>
            </div>
        </div>
    )
}

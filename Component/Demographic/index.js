import React, { useEffect, useState } from 'react';
import EduAttainment from './EduAttainment';
import HouseholdTypes from './HouseholdTypes';
import IncomeHHByType from './IncomeHHByType';
import IncomeHHT from './IncomeHHT';
import Population from './Population';
import PopulationByAge from './PopulationByAge';
import PopulationbyRace from './PopulationbyRace';
import GraphData from '../../Api/Grapgh'
import { useRouter } from "next/router";


export default function Demographic() {
    const [regionName, setRegionName] = useState([])
    const [region, setRegion] = useState([])
    const [population, setPopulation] = useState([])
    const [populationDate, setPopulationDate] = useState([])
    // const [race, setRace] = useState([])
    // const [raceDate, setRaceDate] = useState([])
    const [educationn, setEducationn] = useState([])
    const [educationDate, setEducationDate] = useState([])



    // const stateSort = (event) => [
    //     sortedInfo = {
    //         order: 'descend',
    //         columnKey: 'age',
    //     }]
    // const CitySort = (event) => [
    //     sortedInfo = {
    //         order: 'descend',
    //         columnKey: 'age',
    //     }]
    function handleChange(e) {
        setRegion(e.target.value);
        populationCountary(e.target.value)
        // populationRace(e.target.value)
        education(e.target.value)

    }
    const router = useRouter();

    const eventId = router.query.id
    useEffect(() => {
        Region()
    }, [eventId]);

    const Region = () => {
        const response = GraphData.populationRegion();
        console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                setRegionName(value.data.Data);

            }
        })
    }
    const populationCountary = (region) => {
        const response = GraphData.population(region);
        response.then(value => {
            // console.log('>>>>>>>>>>>',value)
            if (value) {
                let data1 = []
                let data2 = []
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }
                

                setPopulationDate(data1)
                setPopulation(data2)

            }
        })
    }
    // const populationRace = (region) => {
    //     const response = GraphData.populationRace(region);
    //     response.then(value => {
    //         console.log('>>>>>>>>>>>',value)
    //         if (value) {
    //             let data1 = []
    //             let data2 = []
    //             for (const key in value.data.Data) {
    //                 if(index=1){

    //                 }
    //                 else if(index%2){
    //                 data1.push(key)
    //                 data2.push(value.data.Data[key]);

    //                 }
    //                 else{
    //                     dataPercentage.push(value.data.Data[key])
    //                 }
    //             }
                

    //             setRaceDate(data1)
    //             setRace(data2)

    //         }
    //     })
    // }
    const education = (region) => {
        const response = GraphData.population(region);
        response.then(value => {
            console.log('>>>>>>>>>>>',value)
            if (value) {
                let data1 = []
                let data2 = []
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }
                

                setEducationDate(data1)
                setEducationn(data2)

            }
        })
    }

    return (
        <div>
            <div className='row'>
                <div className='col-lg-3 col-12'>
                    <p className='fs-40 Gothic_3D my-3'>New york City, NY</p>
                </div>
                <div className='col-lg-9 col-12 mt-auto'>
                    <p className='fs-17 ms-2'>REI Litics uses the Census Bureau Data API but is not endorsed or certified by the Census Bureau.</p>
                </div>
            </div>
            <div className='d-flex my-3'>
                <div className='row w-25 my-auto'>
                    <div className='d-block col-6'>
                        <label className='bluetxt fs-13'>Region Nameeeee</label>
                        <select className="form-control form-select form-control-sm" onChange={handleChange} value={region}>
                            
                            {regionName.map((state) => {
                                return (
                                    <option value={state}>{state}</option>
                                )
                            })}
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
            <div className='card p-3 bg_light'>
                <Population population={population} populationDate={populationDate}/>
            </div>
            <div className='card p-3 my-4 bg_light'>
                <PopulationByAge />
            </div>
            <div className='card p-3 my-4 bg_light'>
                <HouseholdTypes />
            </div>
            <div className='card p-3 my-4 bg_light'>
                <IncomeHHT />
            </div>
            <div className='card p-3 my-4 bg_light'>
                <IncomeHHByType />
            </div>
            <div className='card p-3 my-4 bg_light'>
                <EduAttainment Education={educationn} educationDate={educationDate}/>
            </div>
            <div className='card p-3 my-4 bg_light'>
                <PopulationbyRace />
            </div>
            <footer className='text-center mt-5'>
                <p>DISCLAIMER - Data is provided “as is” via the Public Records API.</p>
                <p>© Zillow, Inc. 2006-2020. Use is subject to Term of Use.</p>
            </footer>
        </div>
    );
}

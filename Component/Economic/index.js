import React, {useState, useEffect} from 'react';
import EconomicGraphs from './EconomicGraphs';
import GraphData from "../../Api/Grapgh"

export default function Economic() {
    const [regionName, setRegionName] = useState([])
    const [region, setRegion] = useState([])
    const [unEmploymentData, setUnEmploymentData] = useState([])
    const [employmentDate, setEmploymentDate] = useState([])
    const [sector, setSector] = useState([])
    const [sectorDate, setSectorDate] = useState([])




    function handleChange(e) {
        setRegion(e.target.value);
        unEmployment(e.target.value);
        industry(e.target.value);


    }
    // const router = useRouter();

    // const eventId = router.query.id
    useEffect(() => {
        RegionGet()

    }, []);
    const RegionGet = () => {
        const response = GraphData.populationEconomic();
        console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                setRegionName(value.data.Data);

            }
        })
    }
    const unEmployment = (region) => {
        const response = GraphData.unEmployment(region);
        // console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data)
                let data1 = []
                let data2 = []
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                setEmploymentDate(data1)
                setUnEmploymentData(data2)

            }
        })
    }
    const industry = (region) => {
        const response = GraphData.industary(region);
        // console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data)
                let data1 = []
                let data2 = []
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                setSectorDate(data1)
                setSector(data2)

            }
        })
    }

    return (
        <div>
            <p className='fs-40 Gothic_3D my-3'>United States</p>
            <div className='d-flex my-3'>
                <div className='row w-25 my-auto'>
                    <div className='d-block col-6'>
                        <label className='bluetxt fs-13'>Region Name</label>
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
                    <button className='btn bluebtn px-4 fs-14 m-1'>Add to Favourite <img src='/unfilledHeart1.svg' className='ms-2 my-auto' /></button>
                    <button className='btn bluebtn px-4 fs-14 m-1'>Print <img src='/print.svg' className='ms-2 my-auto' /></button>
                    <button className='btn bluebtn px-4 fs-14 m-1'>Download PDF <img src='/Download_Icon1.svg' className='ms-2 my-auto' /></button>
                </div>
            </div>
            <div className=''>
                <EconomicGraphs employmentDate={employmentDate} unEmploymentData={unEmploymentData} sector={sector} sectorDate={sectorDate}/>
            </div>
            <footer className='text-center mt-5'>
                <p>DISCLAIMER - Data is provided “as is” via the Public Records API.</p>
                <p>© Zillow, Inc. 2006-2020. Use is subject to Term of Use.</p>
                </footer>
        </div>
    );
}

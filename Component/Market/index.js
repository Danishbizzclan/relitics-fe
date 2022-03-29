import { React, useEffect, useState } from 'react';
import ApreciationTableComponent from '../ApreciationTableComponent'
import RentalTableComponent from '../RentalTableComponent'
import MedianGraph from './MarketPageGraph';
import GraphData from "../../Api/Grapgh"
import GetData from '../../Api/GetData'
import { useRouter } from "next/router";


export default function Market(props) {
    console.log('Markey', props)
    const [rental, setRental] = useState([])
    const [Apprecation, setApprecation] = useState([])
    const [region, setRegion] = useState([])
    const [regions, setRegions] = useState([])


    // const router = useRouter();
    // const eventId = router.query.id
    // {console.log({eventId})}


    const stateSort = (event) => [
        sortedInfo = {
            order: 'descend',
            columnKey: 'age',
        }]
    const CitySort = (event) => [
        sortedInfo = {
            order: 'descend',
            columnKey: 'age',
        }]



    useEffect(() => {
        // setLoading(true)
        // console.log({eventId})
        const response = GraphData.RentalAprecation(props.id);
        response.then(value => {
            console.log('Rental Res', value)
            let data = []
            data.push(value?.data?.Data?.appreciation)
            setApprecation(data)

            let data1 = []
            data1.push(value?.data?.Data?.rental)
            setRental(data1)
            Region()
            // setRental(value?.data?.Data?.rental)

            //   setEvent(value?.data?.article);
            //   setLoading(false)
            //   console.log(value?.data?.article)
            //   setLoading(false);
        })
    }, [props.id]);

    const Region = () => {
        // setLoading(true)
        // console.log({eventId})
        const response = GetData.Region();
        response.then(value => {
            console.log('Region Res', value)
            setRegion(value.data.Regions)

        })
    }
    function handleChange(e) {
        setRegions(e.target.value)
    }
    const print = () => {

        var content = document.getElementsByClassName('Market_pg');
        var pri = document.getElementById('ifmcontentstoprint').contentWindow;
        pri.document.open();
        pri.document.write(content[0].innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }

    return (
        <div>

            {/* <p className='fs-40 Gothic_3D my-3'>{regions}</p> */}
            <div className='d-flex my-3'>
                <div className='row w-25 my-auto'>
                    <div className='d-block col-8'>
                        <label className='bluetxt fs-13'>Region Name</label>
                        <select className="form-control form-select w-100 form-control-sm" onChange={handleChange} value={regions}>
                            {region.map((reg) => {
                                return (
                                    <>
                                        <option value={reg.RegionID}>{reg.RegionName}</option>
                                    </>

                                )


                            })}
                        </select>
                    </div>
                </div>
                <div className='ms-auto my-auto'>
                    <button onClick={() => window.open("https://www.zillow.com/")} className='btn bluebtn px-4 fs-14 m-1'  >Search properties on  Zillow </button>
                    <button className='btn bluebtn px-4 fs-14 m-1'>Add to Favourite <img src='/unfilledHeart1.svg' className='ms-2 my-auto' /></button>
                    <button className='btn bluebtn px-4 fs-14 m-1' onClick={print}>Print <img src='/print.svg' className='ms-2 my-auto' /></button>
                    <button className='btn bluebtn px-4 fs-14 m-1'>Download PDF <img src='/Download_Icon1.svg' className='ms-2 my-auto' /></button>
                </div>
            </div>
            <div className='Market_pg'>
                <div className='d-lg-inline-flex'>
                    <div className='p-3 mx-2 paginetion_none bg_table'>
                        {console.log('Apprecation Data', Apprecation)}
                        {Apprecation ? <ApreciationTableComponent AppreciationData={Apprecation} /> : <p>Loading</p>}
                    </div>
                    <div className='p-3 mx-2 paginetion_none bg_table'>
                        <RentalTableComponent rental={rental} />
                    </div>
                </div>
                <div className=''>
                    <MedianGraph />
                </div>
                <footer className='text-center mt-5'>
                    <p>DISCLAIMER - Data is provided “as is” via the Public Records API.</p>
                    <p>© Zillow, Inc. 2006-2020. Use is subject to Term of Use.</p>
                </footer>
                <iframe id="ifmcontentstoprint"
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        display: 'none',
                    }}></iframe>
            </div>
        </div>
    );
}

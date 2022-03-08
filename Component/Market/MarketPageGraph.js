import React from 'react';
import GraphComponent from '../GraphCard.js';
import ApexMedianChart from './ApexMedianChart.js';
import SaleInventoryGraph from './SaleInventoryGraph.js';
import SharePriceCutGraph from './SharePriceCutGraph.js';
import MedianPriceCut from './MedianPriceCut.js';
import MedianRental from './MedianRental.js';
import { useEffect, useState } from 'react';
import GraphData from '../../Api/Grapgh'
import { useRouter } from "next/router";

import MedianDaystoPendingGraph from './MedianDaystoPendingGraph.js';

export default function MedianGraph(props) {

    const [inventryDate, setInventryDate] = useState([])
    const [inventry, setInventry] = useState([])
    const [id, setId] = useState("")

    const router = useRouter();

    const eventId = router.query.id
    { console.log(eventId) }



    useEffect(() => {
        const response = GraphData.Inventory(eventId);
        console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                let data1 = []
                let data2 =[]
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                setInventryDate(data1)
                setInventry(data2)
                
            }
        })
    }, [eventId])


    return (<div>
        {console.log({inventryDate})}
        {console.log({inventry})}
        <GraphComponent
            heading='MEDIAN List Price Vs MEDIAN Sale Price'>
            <ApexMedianChart />
        </GraphComponent>
        <GraphComponent
            heading='For Sale Inventory'>
            <SaleInventoryGraph inventryDate={inventryDate} inventry={inventry} />
        </GraphComponent>
        <GraphComponent
            heading='Median Days to Pending'>
            <MedianDaystoPendingGraph />
        </GraphComponent>
        <GraphComponent
            heading='SHARE OF LISTINGS WITH PRICE CUT'>
            <SharePriceCutGraph />
        </GraphComponent>
        <GraphComponent
            heading='Median PRICE CUT'>
            <MedianPriceCut />
        </GraphComponent>
        <GraphComponent
            heading='MEDIAN Rental'>
            <MedianRental />
        </GraphComponent>
    </div>)
}

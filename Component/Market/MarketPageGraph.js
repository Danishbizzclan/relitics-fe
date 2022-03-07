import React from 'react';
import GraphComponent from '../GraphCard.js';
import ApexMedianChart from './ApexMedianChart.js';
import SaleInventoryGraph from './SaleInventoryGraph.js';
import SharePriceCutGraph from './SharePriceCutGraph.js';
import MedianPriceCut from './MedianPriceCut.js';
import MedianRental from './MedianRental.js';
import {useEffect, useState} from 'react';
import GraphData from '../../Api/Grapgh'

export default function MedianGraph(props) {

    const [inventry, setInventry] =useState([])
    const [id, setId] =useState("")

    
    useEffect(() => {
        const response = GraphData.Inventory('394913');
        console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                setInventry(value?.data?.contry);
            }
        })
    }, [])


    return (<div>
        <GraphComponent
            heading='MEDIAN List Price Vs MEDIAN Sale Price'>
            <ApexMedianChart />
        </GraphComponent>
        <GraphComponent
            heading='For Sale Inventory'>
            <SaleInventoryGraph />
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

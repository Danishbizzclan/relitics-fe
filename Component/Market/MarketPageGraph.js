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
    const [pending, setPending] = useState([])
    const [pendingDate, setPendingDate] = useState([])
    const [list, setList] = useState([])
    const [listDate, setListDate] = useState([])
    const [sales, setSales] = useState([])
    const [salesDate, setSalesDate] = useState([])
    const [ShareListings, setShareListings] = useState([])
    const [ShareListingDate, setShareListingDate] = useState([])





    const [id, setId] = useState("")

    const router = useRouter();

    const eventId = router.query.id
    { console.log(eventId) }



    useEffect(() => {
        const response = GraphData.Inventory(eventId);
        // console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data)
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
        pendingData();
        listPrice();
        ShareListing();
    }, [eventId])

    const pendingData = () => {
        const response = GraphData.Pending(eventId);
        // console.log(eventId)
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data)

                let data1 = []
                let data2 =[]
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                setPendingDate(data1)
                setPending(data2)
                
            }
        })
    }
    
    const listPrice = () => {
        const response = GraphData.ListPrice(eventId);
        // console.log(eventId)
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data.listing)

                let data1 = []
                let data2 =[]
                for (const key in value.data.Data.listing) {
                    data1.push(key)
                    data2.push(value.data.Data.listing[key]);
                }

                setListDate(data1)
                setList(data2)

                let data3 = []
                let data4 =[]
                for (const key in value.data.Data.listing) {
                    data3.push(key)
                    data4.push(value.data.Data.listing[key]);
                }
                setSalesDate(data3)
                setSales(data4)

                
            }
        })
    }
    const ShareListing = () => {
        const response = GraphData.ShareListing(eventId);
        console.log(eventId)
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data.listing)

                let data1 = []
                let data2 =[]
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                setShareListingDate(data1)
                setShareListings(data2)

               

                
            }
        })
    }


    return (<div>
        {console.log({ShareListings})}
        {console.log({ShareListingDate})}
        <GraphComponent
            heading='MEDIAN List Price Vs MEDIAN Sale Price'>
            <ApexMedianChart sales={sales} salesDate={salesDate} list={list} listDate={listDate}/>
        </GraphComponent>
        <GraphComponent
            heading='For Sale Inventory'>
            <SaleInventoryGraph inventryDate={inventryDate} inventry={inventry} />
        </GraphComponent>
        <GraphComponent
            heading='Median Days to Pending'>
            <MedianDaystoPendingGraph pendingDate={pendingDate} pending={pending}/>
        </GraphComponent>
        <GraphComponent
            heading='SHARE OF LISTINGS WITH PRICE CUT'>
            <SharePriceCutGraph  shareList={ShareListings} shareDate={ShareListingDate}/>
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

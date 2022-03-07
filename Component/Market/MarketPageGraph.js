import React from 'react';
import GraphComponent from '../GraphCard.js';
import ApexMedianChart from './ApexMedianChart.js';
import SaleInventoryGraph from './SaleInventoryGraph.js';
import SharePriceCutGraph from './SharePriceCutGraph.js';
import MedianPriceCut from './MedianPriceCut.js';
import MedianRental from './MedianRental.js';
import MedianDaystoPendingGraph from './MedianDaystoPendingGraph.js';

export default function MedianGraph(props) {
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

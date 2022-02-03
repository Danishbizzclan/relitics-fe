import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
import RentalGraphData from '../Data/RentalGraphData'


export default function PriceCompareGraph() {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch ({ RentalGraphData })
            .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
            console.log('fetch data failed', error);
        });
};
const config = {
    data,
    xField: 'year',
    yField: 'value',
    xAxis: {
        range: [0, 1],
        tickCount: 5,
    },
    stroke: {
        curve: 'smooth'
    },
    areaStyle: () => {
        return {
            fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
        };
    },
};

return <Area {...config} />;
};

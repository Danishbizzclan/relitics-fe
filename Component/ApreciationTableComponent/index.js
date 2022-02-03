import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';


const columns = [
    {
        title: 'Market Appreciation',
        dataIndex: 'MarketAppreciation',
        width: '10%'
    },
    {
        title: null,
        dataIndex: 'OverallAverage',
        fixed: 'left',
        bordered:true,
    },
    {
        title: '2018',
        dataIndex: '2018',
    },
    {
        title: '2019',
        dataIndex: '2019',
    },
    {
        title: '2020',
        dataIndex: '2020',
    },
    {
        title: '2021',
        dataIndex: '2021',
    },
    {
        title: '2022',
        dataIndex: '2022',
    },
    {
        title: 'Median Sale',
        dataIndex: 'MedianSale',
    },
];
const ApreciationTableData = [
    {
        key: '1',
        MarketAppreciation: 'Overall Average',
        OverallAverage: '20%',
        2018: '18%',
        2019: '19%',
        2020: '20%',
        2021: '21%',
        2022: '22%',
        MedianSale: '$136%',
    }
];
export default function ApreciationTableComponent() {
    return (<div>
        <Table columns={columns} dataSource={ApreciationTableData} size="small" />
    </div>
    )
}
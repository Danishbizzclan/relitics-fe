import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';


const columns = [
    {
        title: 'Rental Growth',
        dataIndex: 'RentalGrowth',
        width: '10%'
    },
    {
        title: null,
        dataIndex: 'OverallAverage',
        fixed: 'left',
        bordered: true,
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
        title: 'Median Rental',
        dataIndex: 'MedianRental ',
    },
];
const RentalTableData = [
    {
        key: '1',
        RentalGrowth: 'Overall Average',
        OverallAverage: '20%',
        2018: '18%',
        2019: '19%',
        2020: '20%',
        2021: '21%',
        2022: '22%',
        MedianSale: '$136%',
    }
];
export default function RentalTableComponent() {
    return (<div>
        <Table columns={columns} dataSource={RentalTableData} size="small" />
    </div>
    )
}
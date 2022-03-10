import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';


const columns = [
    {
        title: 'Rental Growth',
        render: (record, text, index) => <p>Rental Growth</p>,
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
        dataIndex: 'y2018',
    },
    {
        title: '2019',
        dataIndex: 'y2019',
    },
    {
        title: '2020',
        dataIndex: 'y2020',
    },
    {
        title: '2021',
        dataIndex: 'y2021',
    },
    {
        title: '2022',
        dataIndex: 'y2022',
    },
    {
        title: 'Median Rental',
        dataIndex: 'median',
    },
];

export default function RentalTableComponent(props) {
    console.log(props);
    return (<div>
        <Table columns={columns} dataSource={props.rental} size="small" />
    </div>
    )
}
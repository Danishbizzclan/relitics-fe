import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';


const columns = [
    {
        title: 'Average appreciation',
        render: (record, text, index) => <p>{record.avgGrowth}</p>,
        width: '10%',
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
        title: 'Median Sale',
        dataIndex: 'median',
    },
];
export default function ApreciationTableComponent(props) {

    return (<div>
        <Table columns={columns} dataSource={props.AppreciationData} size="small" />
    </div>
    )
}
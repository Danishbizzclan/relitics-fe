import React from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Space, Select, message } from 'antd';
import GetData from '../../Api/GetData';
import { Spin } from 'antd';



class HouseholdTypesTable extends React.Component {
    state = {
        loading: true,
    };
    componentDidMount() {
        this.tableData(1)
    }

    tableData = (pageNo) => {
        const response = GetData.RentalGrowth(pageNo);
        response.then(value => {
            console.log('dfgh', value)
            this.setState({
                data: value?.data?.rentalGrowth,
                totalPages: value?.data?.pages,
                loading: false
            })
        })
    }

    render() {
        const columns = [
            {
                title: 'Type',
                dataIndex: 'type',
            },
            {
                title: 'Owner',
                dataIndex: 'owner',
            },
            {
                title: 'Renter',
                dataIndex: 'renter',
            },
        ];
        const data = [
            {
                key: '1',
                type: 'All',
                owner: '60.90 %',
                renter: '60.90%',
            },
            {
                key: '2',
                type: 'Female',
                owner: '28.55%',
                renter: '28.55%',
            },
            {
                key: '3',
                type: 'Male',
                owner: '3.47%',
                renter: '3.47%',
            },
            {
                key: '4',
                type: 'Married',
                owner: '3.44%',
                renter: '3.43%',
            },
            {
                key: '5',
                type: 'Non Family',
                owner: '3.44%',
                renter: '3.43%',
            },
        ];
        return (
            <>
                {this.state.loading ? (
                    <div className='text-center mt-5'><Spin /></div>

                ) : (
                    <>
                        <div >
                            <Table columns={columns}
                                size="middle"
                                pagination='false'
                                dataSource={data} />
                        </div>
                    </>
                )}
            </>
        );
    }
}
export default HouseholdTypesTable
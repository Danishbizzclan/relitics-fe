import React from 'react'
import 'antd/dist/antd.css';
import { Table, Button, Space, Select, message } from 'antd';
import GetData from '../../Api/GetData';
import { Spin } from 'antd';

class PopulationbyRaceTable extends React.Component {
    state = {
        loading: true,
    };
    componentDidMount() {
        this.tableData(1)
    }

    tableData = (pageNo) => {
        const response = GetData.RentalGrowth(pageNo);
        console.log(response)
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
                title: 'Race',
                dataIndex: 'race',
            },
            {
                title: 'Population',
                dataIndex: 'population',
            },
            {
                title: 'Percentage',
                dataIndex: 'percentage',
            },
        ];
        const data = [
            {
                key: '1',
                race: 'White',
                population: '29,660',
                percentage: '60.90',
            },
            {
                key: '2',
                race: 'Black or African American',
                population: '29,660',
                percentage: '28.55',
            },
            {
                key: '3',
                race: 'Some Other Race',
                population: '29,660',
                percentage: '3.47',
            },
            {
                key: '4',
                race: 'Asian',
                population: '29,660',
                percentage: '3.47',
            },
            {
                key: '5',
                race: 'Two or more races',
                population: '29,660',
                percentage: '3.43',
            },
            {
                key: '6',
                race: 'American Indian and Alaska Native',
                population: '29,660',
                percentage: '3.47',
            },
            {
                key: '7',
                race: 'Native Hawaiian and Other Pacific Islander',
                population: '29,660',
                percentage: '3.47',
            }
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
export default PopulationbyRaceTable
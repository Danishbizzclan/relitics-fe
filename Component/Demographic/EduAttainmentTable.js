
import React from 'react'
import 'antd/dist/antd.css';
import { Table, Button, Space, Select, message } from 'antd';
import GetData from '../../Api/GetData';
import { Spin } from 'antd';

class EduAttainmentTable extends React.Component {
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
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Count',
                dataIndex: 'count',
            },
            {
                title: 'Percentage',
                dataIndex: 'percentage',
            },
        ];
        const data = [
            {
                key: '1',
                name: 'Less Than 9th Grade                ',
                count: '29,660',
                percentage: '60.90',
            },
            {
                key: '2',
                name: '9th to 12th Grade',
                count: '29,660',
                percentage: '28.55',
            },
            {
                key: '3',
                name: 'High School Graduate',
                count: '29,660',
                percentage: '3.47',
            },
            {
                key: '4',
                name: 'Some College',
                count: '29,660',
                percentage: '3.47',
            },
            {
                key: '5',
                name: 'Associates Degree',
                count: '29,660',
                percentage: '3.43',
            },
            {
                key: '6',
                name: 'Bachelors Degree',
                count: '29,660',
                percentage: '3.47',
            },
            {
                key: '7',
                name: 'Graduate Degree',
                count: '29,660',
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
export default EduAttainmentTable
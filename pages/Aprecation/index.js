import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Table, Button, Space } from 'antd';
import Dashnav from '../../Component/Dashnav';
import Sidebar from '../../Component/Didebar';

const data = [
  {
    key: '1',
    Region: 'John Brown',
    Averageaprecation: "18%",
    2018: '18%',
    2019: '18%',
    2020: '18%',
    2021: '18%',
    Averagesaleprice: '$13600',
    Averagepropertytax: "18%",
    population: '136000',
  },
  {
    key: '2',
    Region: 'Sialkot',
    Averageaprecation: '18%',
    2018: '18%',
    2019: '18%',
    2020: '18%',
    2021: '18%',
    Averagesaleprice: '$13600',
    Averagepropertytax: "18%",
    population: '136000',
 },
  {
    key: '3',
    Region: 'Multan',
    Averageaprecation: '18%',
    2018: '18%',
    2019: '18%',
    2020: '18%',
    2021: '18%',
    Averagesaleprice: '$13600',
    Averagepropertytax: "18%",
    population: '136000',
  },
  {
    key: '4',
    Region: 'Faisalbad',
    Averageaprecation: '18%',
    2018: '18%',
    2019: '18%',
    2020: '18%',
    2021: '18%',
    Averagesaleprice: '$13600',
    Averagepropertytax: "18%",
    population: '136000',
  },
  {
    key: '5',
    Region: 'Lahore',
    Averageaprecation: '18%',
    2018: '18%',
    2019: '18%',
    2020: '18%',
    2021: '18%',
    Averagesaleprice: '$13600',
    Averagepropertytax: "18%",
    population: '136000',
  },
  {
    key: '6',
    Region: 'Karachi',
    Averageaprecation: '18%',
    2018: '18%',
    2019: '18%',
    2020: '18%',
    2021: '18%',
    Averagesaleprice: '$13600',
    Averagepropertytax: "18%",
    population: '136000',
  },
  {
    key: '7',
    Region: 'Peshawar',
    Averageaprecation: '18%',
    2018: '18%',
    2019: '18%',
    2020: '18%',
    2021: '18%',
    Averagesaleprice: '$13600',
    Averagepropertytax: "18%",
    population: '136000',
  },
  {
    key: '8',
    Region: 'Islamabad',
    Averageaprecation: '18%',
    2018: '18%',
    2019: '18%',
    2020: '18%',
    2021: '18%',
    Averagesaleprice: '$13600',
    Averagepropertytax: "18%",
    population: '136000',
  },
  {
    key: '9',
    Region: 'Rawalpindi',
    Averageaprecation: '18%',
    2018: '18%',
    2019: '18%',
    2020: '18%',
    2021: '18%',
    Averagesaleprice: '$13600',
    Averagepropertytax: "18%",
    population: '136000',
  },
];

class Aprecation extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Region',
        dataIndex: 'Region',
        key: 'Region',
        // filters: [
        //   { text: 'Joe', value: 'Joe' },
        //   { text: 'Jim', value: 'Jim' },
        // ],
        filteredValue: filteredInfo.name || null,
        // onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.Region.length - b.Region.length,
        sortOrder: sortedInfo.columnKey === 'Region' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Average Aprecation',
        dataIndex: 'Averageaprecation',
        key: 'Averageaprecation',
        sorter: (a, b) => a.age - b.Averageaprecation,
        sortOrder: sortedInfo.columnKey === 'Averageaprecation' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '2018',
        dataIndex: '2018',
        key: '2018',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.2018 || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 2018 && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '2019',
        dataIndex: '2019',
        key: '2019',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 2019 && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '2020',
        dataIndex: '2020',
        key: '2020',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 2020 && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '2021',
        dataIndex: '2021',
        key: '2021',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 2021 && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Average Sale Price',
        dataIndex: 'Averagesaleprice',
        key: 'Averagesaleprice',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Acerage Property Tax',
        dataIndex: 'Averagepropertytax',
        key: 'Averagepropertytax',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Population',
        dataIndex: 'population',
        key: 'population',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <>
    <div className="d-inline-flex w-100">
     <Sidebar />

        <div style={{ width: "inherit" }}>
          <Dashnav />
          {/* <div className='container'> */}
              <div className='col-xl-10 mx-auto mt-5' >
                  <p className='fs-25'>Market Aprecation</p>
                  <div className='d-flex'>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </Space>
        <div className='ms-auto'>
            <button className='btn btn-primary'>Print</button>
            <button className='btn btn-primary ms-2'>Download PDF</button>

        </div>
        </div>
        <Table columns={columns}
 colors={['#123123', 'rgba(123,123,123,12)']}
 averageDuplicates
 inferBlanks
        dataSource={data} onChange={this.handleChange} />
        </div>
        </div>
        {/* </div>    */}
        </div> 
      </>
    );
  }
}
export default Aprecation
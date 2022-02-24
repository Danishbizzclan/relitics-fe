import React from "react"
import { CSVLink } from "react-csv"
import 'antd/dist/antd.css';
// import './index.css';
import { Table, Button, Space, Select, message } from 'antd';
import Dashnav from '../../Component/Dashnav';
import Sidebar from '../../Component/SideNavbar';
import ApreciationData from '../../Component/Data/ApericiationData';
import GetData from '../../Api/GetData';
import { Spin } from 'antd';
import withAuth from '../../Component/Auth';


class Aprecation extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    data: [],
    currentPage: 1,
    totalPages: 1,
    loading: true
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    if (pagination.current !== 1) {
      this.tableData(pagination.current)
    }
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

  setRegionSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'Region',
      },
    });
  };
  componentDidMount() {
    this.tableData(1)
  }
  tableData = (pageNo) => {
    const response = GetData.Aprecation(pageNo);
    console.log(response)
    response.then(value => {
      console.log('dfgh', value)
      this.setState({
        data: value?.data?.allRecords,
        totalPages: value?.data?.pages,
        loading: false
      })
    })
  }
  print() {
    var content = document.getElementsByClassName('ant-table-content');
    var pri = document.getElementById('ifmcontentstoprint').contentWindow;
    pri.document.open();
    pri.document.write(content[0].innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Region',
        info: "zxcvbn",
        fixed: 'left',
        key: 'region',
        width: '15%',
        // filters: [
        //   { text: 'Joe', value: 'Joe' },
        //   { text: 'Jim', value: 'Jim' },
        // ],
        filteredValue: filteredInfo.name || null,
        // onFilter: (value, record) => record.name.includes(value),
        sortOrder: sortedInfo.columnKey === 'region' && sortedInfo.order,
        sorter: (a, b) => a.region.length - b.region.length,
        ellipsis: true,
        render: (record, text, index) => <div className='d-flex my-auto'>
          <p className='my-auto mx-2'>{record.region}</p>{!record.isFavourite ? <img src='./filledHeart.svg' className='ms-auto my-auto' /> : <img src='./unfilledHeart.svg' className='ms-auto' />}
        </div>
      },
      {
        title: 'Overall Average Aprecation',
        fixed: 'left',
        bordered: true,
        dataIndex: 'avgGrowth',
        key: 'avgGrowth',
        width: '15%',
        sorter: (a, b) => a.avgGrowth - b.avgGrowth,
        sortOrder: sortedInfo.columnKey === 'AverageAppreciation' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '2018',
        render: (record, text, index) => Math.round(record.y2018 * 100) / 100 ,
        key: 'y2018',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.2018 || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.y2018 - b.y2018,
        sortOrder: sortedInfo.columnKey === 2018 && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '2019',
        // dataIndex: 'y2019',
        render: (record, text, index) => <>{Math.round(record.y2019 * 100) / 100}%</> ,
        key: 'y2019',
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
        dataIndex: 'y2020',
        key: 'y2020',
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
        dataIndex: 'y2021',
        key: 'y2021',
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
        title: '2022',
        dataIndex: 'y2022',
        key: 'y2022',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 2022 && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Median Sale Price',
        dataIndex: 'median',
        key: 'median',
        width: '11%',
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
        title: 'Average State Property Tax',
        dataIndex: 'avgTax',
        key: 'avgTax',
        width: '13%',
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
            <div className='container mx-auto mt-3 px-md-5' >
              <p className='fs-40 Gothic_3D'>Market Appreciation</p>
              <div className='d-flex my-3'>
                <div className='row w-25 my-auto'>
                  <div className='d-block col-6'>
                    <label className='bluetxt fs-13'>State</label>
                    <select className="form-control form-select form-control-sm" onClick={this.setRegionSort}>
                      <option>All</option>
                    </select>
                  </div>
                  <div className='d-block col-6'>
                    <label className='bluetxt fs-13'>City</label>
                    <select className="form-control form-select form-control-sm " onClick={this.setCitySort}>
                      <option>State</option>
                    </select>
                  </div>
                </div>
                <div className='ms-auto my-auto'>
                  <button className='btn bluebtn px-4 fs-14' onClick={this.print}>Print</button>
                  <CSVLink
                    filename={"Market_Appreciation_Table.csv"}
                    className='btn bluebtn px-4 fs-14 ms-2'
                    data={this.state.data}
                    onClick={() => {
                      message.success("The file is downloading")
                    }}
                  >
                    Download CSV
                  </CSVLink>
                </div>
              </div>
              {this.state.loading ? (
                <div className='text-center mt-5'><Spin /></div>
              ) : (

                <div >
                    <Table columns={columns}
                      colors={['#123123', 'rgba(123,123,123,12)']}
                      averageDuplicates
                      inferBlanks
                      pagination={{ pageSize: 10, defaultCurrent: this.state.currentPage, total: this.state.totalPages * 10 }}
                      dataSource={this.state.data} onChange={this.handleChange}
                      scroll={{ x: 768 }}
                    />

                  <iframe id="ifmcontentstoprint" style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    display: 'none',
                  }}></iframe>
                </div>
              )}
            </div>
          </div>
          {/* </div>    */}
        </div>
      </>
    );
  }
}
export default withAuth(Aprecation);
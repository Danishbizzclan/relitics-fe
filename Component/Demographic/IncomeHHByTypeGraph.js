
import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class IncomeHHByTypeGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [25, 25, 25, 25],
      options: {
        labels: ['Married', 'Male', 'Female', 'Non family'],
        colors: ['#AED3EA', '#46A1D6', '#1F78B4', '#022945'],
        chart: {
          width: 380,
          type: 'donut',
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          position: 'bottom',
          horizontalAlign: 'left',
          fontSize: '16'
        },
        plotOptions: {
          pie: {
            customScale: 1.5,
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10
            },
            donut: {
              size: '55%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '15px',
                  color: 'black',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                },
                value: {
                  show: true,
                  fontSize: '15px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                },
                total: {
                  name: 'Households by type',
                  show: true,
                  showAlways: false,
                  label: 'Households by type',
                  fontSize: '13px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 300,
                  color: 'black',
                }
              }
            },
          }
        }
      },


    };
  }

  render() {
    return (


      <div id="chart" className='mx-auto'>
        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
      </div>
    );
  }
}

export default IncomeHHByTypeGraph
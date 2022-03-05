
import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class IncomeHHByTypeGraph extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [25, 25, 25, 25],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          dataLabels: {
            enabled: false
        },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 400
              },
              legend: {
                show: false
              }
            }
          }],
          legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
          }
        },
      
      
      };
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
            </div>
        );
    }
}

export default IncomeHHByTypeGraph
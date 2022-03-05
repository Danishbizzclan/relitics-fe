
import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class IncomeHHTGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Households',
                color: '#1F78B4',
                data: [44, 55, 41, 64, 22, 43, 21, 64, 22, 43, 21]
            },
            {
                name: 'Families',
                color: '#3594CB',
                data: [0, 32, 64, 22, 43, 21, 33, 52, 13, 44, 32]
            },
            {
                name: 'MarriedFamilies',
                color: '#5EB5E8',
                data: [44, 55, 41, 64, 22, 43, 21, 64, 22, 43, 21]
            },
            {
                name: 'NonFamilies',
                color: '#0B486C',
                data: [53, 64, 22, 43, 21, 32, 33, 52, 13, 44, 32]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 550,
                    toolbar: {
                        show: false,
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'top',
                    horizontalAlign: 'right',
                    fontSize: '16',
                    offsetY: 10,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '80%'
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"]
                },
                tooltip: {
                    shared: true,
                    intersect: false
                },
                
                grid: {
                    show: false,
                },
                xaxis: {
                    labels: {
                        rotate: 330,
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    },
                    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
                },
                yaxis: {
                    show:'true',
                    labels: {
                        rotate: 330,
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    },
                    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
                },
            },

        };
    }

    render() {
        return (


            <div id="chart" className='p-5'>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={550} />
            </div>
        );
    }
}

export default IncomeHHTGraph
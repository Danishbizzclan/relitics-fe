
import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class PopulationByAgeGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Males',
                data: [5, 4, 4.1, 0.88, 1.5, 2.1, 3, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
                    3.9, 3.5, 3,
                ],
                color: '#1F78B4',
            },
            {
                name: 'Females',
                data: [-5, -4, -4.1, -2.2, -2.85, -1.18, -1.4, -3.7, -3.96, -4.22, -4.3, -4.4, -4.3, -4.4, -4.3, -4.4,
                -4.1, -4, -4.1
                ],
                color: '#2F97D3'
            }
            ],
            options: {
                chart: {
                    type: 'bar',
                    stacked: true,
                    height: 350,
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'top',
                    horizontalAlign: 'right',
                    fontSize: '16'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '100%',
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 10,
                    lineCap: 'round',
                    colors: ["#fff"]
                },
                grid: {
                    show: false,
                },
                yaxis: {
                    min: -5,
                    max: 5,
                    title: {
                        text: 'Growth',
                    },
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
                        '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
                        '2012-01-01', '2012-02-01', '2012-03-01','2012-04-01','2012-05-01','2012-06-01'
                    ],
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                }
            },


        };
    }



    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default PopulationByAgeGraph
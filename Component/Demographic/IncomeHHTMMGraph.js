import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class IncomeHHTMMGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: "Mean",
                    data: [2, 40, 9, 45],
                    color: '#0F74AF',
                },
                {
                    name: "Median",
                    data: [2, 23, 19, 45],
                    color: '#5EB5E8',
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: false,
                    },
                },
                fill: {
                    opacity: 1
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        columnWidth: '100%'
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'top',
                    horizontalAlign: 'right',
                    fontSize: '16',
                    offsetY: 10,
                },
                dataLabels: {
                    enabled: false
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
                yaxis: {
                    show: true,
                    labels: {
                        rotate: 330,
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                },
                xaxis: {
                    show: true,
                    categories: ["Married", "All", "Male", "Family", "Non Family"],
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                        rotate: 330,
                    }
                },
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

export default IncomeHHTMMGraph
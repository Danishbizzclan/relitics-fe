import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class HouseholdTypesGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: "Population",
                    data: [2, 40, 9, 45, 18, 32, 45],
                    color: '#0F74AF',
                },
                {
                    name: "Population",
                    data: [2, 23, 19, 45, 38, 52, 45],
                    color: '#5EB5E8',
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'area',
                    stacked: true,
                    stackType: '100%',
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
                    position: 'bottom',
                    horizontalAlign: 'left',
                    fontSize: '16',
                    offsetY: 10,
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                yaxis: {
                    show: true,
                    labels: {
                        rotate: 330,
                        style: {
                            colors: ['#555555'],
                            fontSize: '12px',
                        },
                    }
                },
                xaxis: {
                    show: true,
                    categories: ["Married", "All", "Male", "Family", "Non Family"],
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '12px',
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

export default HouseholdTypesGraph
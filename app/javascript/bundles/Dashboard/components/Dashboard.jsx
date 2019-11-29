import React, { Component } from 'react';
import axios from 'axios';
import { Line, Doughnut } from 'react-chartjs-2'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        window.dashboardCharts = this
        this.state = {
            loading: true,
            data: {
                labels: [],
                datasets: [{
                        label: "",
                        backgroundColor: "",
                        data: []
                    },
                    {
                        label: "",
                        backgroundColor: "",
                        data: []
                    }
                ]
            },
            dataAmount: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [],
                    hoverBackgroundColor: []
                }]
            },
            dataKwh: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [],
                    hoverBackgroundColor: []
                }]
            },
            dataDanger: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [],
                    hoverBackgroundColor: []
                }]
            }
        }
    }

    load = () => this.setState({loading: true})

    bill = () => {
        axios.get(`/bills.json`)
        .then(res => { 
            const startDate = []
            const endDate = []
            const kwh = []
            const amounts = []  
            res.data.map(field => {
                amounts.push(field.amount_cents / 100)
                kwh.push(field.kilowatt_hours)
                startDate.push(field.start_date)
                endDate.push(field.end_date)
            })
            const totalAmounts = amounts.reduce((a,b) => a + b)
            const totalEnergy = kwh.reduce((a,b) => a + b)
            let plus = 0;
            let less = 0;
            for(let i = 0; i < kwh.length; i++){
                if(kwh[i] <= 1000){
                    less += 1
                }else{
                    plus += 1
                }
            }

            this.setState({
                loading: false,
                data: {
                    labels: endDate, 
                    datasets: [
                        {
                            label: "$",
                            backgroundColor: "rgba(113, 214, 75, 0.9)",
                            data: amounts
                        },
                        {
                            label: "KWH",
                            backgroundColor: "rgba(253, 197, 73, 0.85)",
                            data: kwh
                        }
                    ]},
                    dataAmount: {
                        labels: [
                            'Total Payment History',
                            'Last Bill Amount'
                        ],
                        datasets: [{
                            data: [totalAmounts, amounts[amounts.length -1]],
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384',
                                '#36A2EB'
                            ]
                        }]
                    },
                    dataKwh: {
                        labels: [
                            'Total Consume of Energy',
                            'Higher Power Consumption'
                        ],
                        datasets: [{
                            data: [totalEnergy, Math.max(...kwh)],
                            backgroundColor: [
                                '#36A2EB',
                                '#FFCE56'
                            ],
                            hoverBackgroundColor: [
                                '#36A2EB',
                                '#FFCE56'
                            ]
                        }]
                    },
                    dataDanger: {
                        labels: [
                            'Exceeded Your Electricity Consumption (+1000Kwh x month)',
                            'Conserved Energy Consumption (-1000Kwh x month)'
                        ],
                        datasets: [{
                            data: [plus, less],
                            backgroundColor: [
                                '#FF6384',
                                '#FFCE56'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384',
                                '#FFCE56'
                            ]
                        }]
                    }
            })
        })
        .catch((error) => {
          console.log(error.response);
        })
    }

    datasetKeyProvider () {return Math.random (); } 

    render(){
    if (this.state.loading) return <div className="loading-page-to">Loading...</div>
    return(
        <>
        <div className="containerDashboard">
            <div className="mainChartContainer">
                <h2>HISTORY</h2>
                <Line
                    datasetKeyProvider = {this.datasetKeyProvider}
                    width={175}
                    height={50}
                    options={{
                        responsive: true
                    }}
                    data={this.state.data}
                />
            </div>
        </div>
        <div className="containerSecondaryDashboard">
            <div className="wrapperSecondaryChart">
                <h2>TOTAL PAYMENTS $$</h2>
                <div className="secondaryChartContainer">
                    <Doughnut
                        width={200}
                        height={100}
                        options={{
                            responsive: true
                        }}
                        data={this.state.dataAmount}
                    />
                </div>
            </div>
            <div className="wrapperSecondaryChart">
                <h2>TOTAL CONSUME OF ENERGY</h2>
                <div className="secondaryChartContainer">
                    <Doughnut
                        width={200}
                        height={100}
                        options={{
                            responsive: true
                        }}
                        data={this.state.dataKwh}
                    />
                </div>
            </div>
            <div className="wrapperSecondaryChart">
                <h2>BROKEN LINE OF 1000KWH</h2>
                <div className="secondaryChartContainer">
                    <Doughnut
                        width={200}
                        height={100}
                        options={{
                            responsive: true
                        }}
                        data={this.state.dataDanger}
                    />
            </div>
            </div>
        </div>
        </>
    );
  }

  componentDidMount() {
    this.bill()
  }

}

import React, { Component } from 'react';
import axios from 'axios';

export default class Dashboard extends Component {
    state = { 
        allDataSelect: []
    }

    bill = () => {
        axios.get(`/bills.json`)
        .then(res => {
        const allMyBills = res.data
          this.setState({ allDataSelect: allMyBills});
        })
        .catch((error) => {
          console.log(error.response);
        })
    }

  render(){
    const { allDataSelect } = this.state;
    return(
        <>
        <table>
            <caption>Bills</caption>
            <thead>
                <tr>
                    <th>Billing Period</th>
                    <th>Kilowatt Hours</th>
                    <th>Bill Amount</th>
                </tr>
            </thead>
        <tbody>
            {  
             allDataSelect.map((field, index) => {
                return(
                    <tr key={index}>
                        <td>{field.start_date} to {field.end_date}</td>
                        <td>{field.kilowatt_hours} kwh</td>
                        <td>{field.amount_cents}</td>
                    </tr>
                );
              })   
            }
        </tbody>
        </table>
        </>
    );
  }

  componentDidMount() {
    this.bill()
  }

}


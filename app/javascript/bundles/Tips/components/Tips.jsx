import React, { Component } from 'react'
import axios from 'axios'

export default class tips extends Component {
  state = {
    tips: [],
  }

  allTips = () => {
    axios.get(`/tips.json`)
    .then(res => this.setState({ tips: res.data }))
  }
  

  render(){
    const { tips } = this.state
    return(
      <>
      <h1>Tips</h1>
      <hr></hr>
      <div className="wrapper-container-tips">
        <div className="container-alltips">
        <h1>Always On</h1>
          {
            tips
            .map((eachTip, index) => {
              if(eachTip.type_id == "Always On"){
                return(
                  <div
                  key={index}
                  id={index}
                  className="tips-each-tips"
                  >
                    <h3>{eachTip.title}</h3>
                    <p>{eachTip.description}</p>
                  </div>
                  
                )
              }
            })
          }
        <h1>Cooking</h1>  
        {
          tips
          .map((eachTip, index) => {
            if(eachTip.type_id == "Cooking"){
              return(
                <div
                key={index}
                id={index}
                className="tips-each-tips"
                >
                  <h3>{eachTip.title}</h3>
                  <p>{eachTip.description}</p>
                  </div>

              )
            }
          }
          )
        }
        <h1>Cooling</h1>
        {
          tips
          .map((eachTip, index) => {
            if(eachTip.type_id == "Cooling"){
              return(
                <div
                key={index}
                id={index}
                className="tips-each-tips"
                >
                  <h3>{eachTip.title}</h3>
                  <p>{eachTip.description}</p>
                  </div>
              )
            }
          }
          )
        }
        <h1>Laundry & Cleaning</h1>
        {
          tips
          .map((eachTip, index) => {
            if(eachTip.type_id == "Laundry & Cleaning"){
              return(
                <div
                key={index}
                id={index}
                className="tips-each-tips"
                >
                  <h3>{eachTip.title}</h3>
                  <p>{eachTip.description}</p>
                  </div>
              )
            }
          }
          )
        }
        <h1>Lighting</h1>
        {
          tips
          .map((eachTip, index) => {
            if(eachTip.type_id == "Lighting"){
              return(
                <div
                key={index}
                id={index}
                className="tips-each-tips"
                >
                  <h3>{eachTip.title}</h3>
                  <p>{eachTip.description}</p>
                  </div>
              )
            }
          }
          )
        }
        <h1>Miscellaneous Tips</h1>
        {
          tips
          .map((eachTip, index) => {
            if(eachTip.type_id == "Miscellaneous Tips"){
              return(
                <div 
                key={index}
                id={index}
                className="tips-each-tips"
                >
                  <h3>{eachTip.title}</h3>
                  <p>{eachTip.description}</p>
                  </div>
              )
            }
           }
          )
        }
        <h1>Refrigeration</h1>
        {
          tips
          .map((eachTip, index) => {
            if(eachTip.type_id == "Refrigeration"){
              return(
                <div
                key={index}
                id={index}
                className="tips-each-tips"
                >
                  <h3>{eachTip.title}</h3>
                  <p>{eachTip.description}</p>
                  </div>
              )
            }
          }
          )
        }
        <h1>Water Heating</h1>
        {
          tips
          .map((eachTip, index) => {
            if(eachTip.type_id == "Water Heating"){
              return(
                <div
                key={index}
                id={index}
                className="tips-each-tips"
                >
                  <h3>{eachTip.title}</h3>
                  <p>{eachTip.description}</p>
                  </div>
              )
            }
          }
          )
        }
        </div>
      </div>
      </>
    )
  }

  componentDidMount(){
    this.allTips()
  }

}

import React from 'react'
import axios from 'axios'


export default class Network extends React.Component{
    state = {
        myNetwork: [],
        totalPoints: [],
        zipcode: ""
    }
    

    neighborhood = () => {
        axios.get(`/fpl_accounts.json`)
            .then(res => {
                const sumPoints = []
                const neighborhood = []
                res.data.map(allData => {
                    sumPoints.push(allData.points)
                    neighborhood.push(allData.zipcode)
                })
                const sum = sumPoints.reduce((a,b) => a + b)
                const theZipcode = neighborhood[0]
                this.setState({ 
                    myNetwork: res.data,
                    totalPoints: sum,
                    zipcode: theZipcode
                })
            })
    }
    
    render(){
        return(
            <>
            <div>
                <h1>My Network Zipcode</h1>
                <hr></hr>
            </div>
            <div className="big-wrapper-network">     
                <div className="status-neighborhood">
                    <div className="neighborhood-points">
                        <i class="fab fa-font-awesome-flag"></i>
                        Total Points: {this.state.totalPoints}
                    </div>
                    <h1>My Neighborhood</h1>
                    <div className="neighborhood-zipcode">
                        <i class="fas fa-map-marked-alt"></i>
                        Network Zipcode: {this.state.zipcode}
                    </div>
                </div>
                <div className="container-network">
                    <div className="network-wrapper">
                        {
                            this.state.myNetwork.map((person, i) => {
                                return(
                                    <div
                                    className="person-profile"
                                    key={i}
                                    id={i}
                                    >
                                        <div className="network-person-avatar">
                                            <img className="network-person-avatar" src={`${person.avatar}`} alt="user"/>
                                        </div>
                                        <div>
                                            <p className="person-points"> Points: {person.points}</p>                        
                                            <p>{person.user_email}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </>
        )
    }

    componentDidMount(){
        this.neighborhood()
    }

}
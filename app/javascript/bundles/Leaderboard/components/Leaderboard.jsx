import React from 'react'
import axios from 'axios'

export default class Leaderboard extends React.Component {
  state={
    users: []
  }

  fetchAllUsers = () => {
    axios.get(`/leaderboard.json`)
    .then(res => this.setState({ users: res.data }))
  }

  render() {
    let rank = 4
    return (
      <main id="leaderboard-main">
        <div className="rank-container">
          <div className="rank-header"> 
            <h1 className="leaderboard-title">
              All Zipcode Rank
            </h1>
            <div className="rank-group">
              <h2>02</h2>
              <div className="rank-two-img">Image</div>
              <h1>01</h1>
              <div className="rank-one-img">Image</div>
              <h3>03</h3>
              <div className="rank-three-img">Image</div>
            </div>
          </div>
          <div className="rank-box">
            {
              this.state.users.map((user, i ) =>{
                if (i < 5){
                  return(
                    <div className="rank-user-box" key={user.id}>
                      <div>Image</div>
                      <h1>{rank++}</h1>
                      <h4>
                        {user.user_email}
                      </h4>
                      <h3>
                        {user.zipcode}
                      </h3>
                      <h2>
                        {user.points}
                      </h2>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        <div className="rank-container">
          <div className="rank-header">
            <h1 className="leaderboard-title">
              My Network Rank
            </h1>
            <div className="rank-group">
              <h2>02</h2>
              <div className="rank-two-img">Image</div>
              <h1>01</h1>
              <div className="rank-one-img">Image</div>
              <h3>03</h3>
              <div className="rank-three-img">Image</div>
            </div>
          </div>
          <div className="rank-box">
            {
              this.state.users.map((user, i ) =>{
                if (i < 5){
                  return(
                    <div className="rank-user-box" key={user.id}>
                      <div>Image</div>
                      <h1>{rank++}</h1>
                      <h4>
                        {user.user_email}
                      </h4>
                      <h3>
                        {user.zipcode}
                      </h3>
                      <h2>PTS</h2>
                    </div>
                  )
                }
              })
            }
            
          </div>
        </div>
      </main>
    )
  }

  componentDidMount(){
    this.fetchAllUsers()
  }
}

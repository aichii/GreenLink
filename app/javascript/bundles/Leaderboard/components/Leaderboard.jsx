import React from 'react'
import axios from 'axios'

export default class Leaderboard extends React.Component {
  state={
    users: [],
    current_user: (this.props.current_user),
    userIndex: null,
    currentZip: 33024
  }

  fetchAllUsers = () => {
    const { current_user } = this.props;
    axios.get(`/leaderboard.json`)
    .then(({ data }) => {
      const currentUserIndex = data.findIndex(({ id }) => id === current_user.id) 
      this.setState({ users: data, userIndex: currentUserIndex })
    })
  }

  // checkZipcode = () => {
  //   this.state.users.map( user => {
  //     if (user.id === this.state.current_user.id){
  //       this.setState({currentZip: user.zipcode})
  //     }else{
  //       console.log("it broke")
  //     } 
  //   })
  // }

  render() {
    const { users, current_user, userIndex, currentZip } = this.state
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
              users.map((user, i ) =>{
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
            {
              users.map((user, i ) =>{
                if (current_user.id === user.id){
                  return(
                    <div className="rank-user-box" key={user.id}>
                      <div>Image</div>
                      <h1>{userIndex}</h1>
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
              My Zipcode Rank
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
              users.filter(user => {
                return currentZip === user.zipcode
              })
              .map((user, i ) =>{
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
                      <h2>{user.points}</h2>
                    </div>
                  )
                }
              })
            }
            {
              users.map((user, i ) =>{
                if (current_user.id === user.id){
                  return(
                    <div className="rank-user-box" key={user.id}>
                      <div>Image</div>
                      <h1>{userIndex}</h1>
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
      </main>
    )
  }

  componentDidMount(){
    this.fetchAllUsers()
  }
}

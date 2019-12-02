import React from 'react'
import axios from 'axios'

export default class Leaderboard extends React.Component {
  state={
    users: [],
    userIndex: null,
  }

  fetchAllUsers = () => {
    const { current_user } = this.props;
    axios.get(`/leaderboard.json`)
    .then(({ data }) => {
      const currentUserIndex = data.findIndex(({ id }) => id === current_user.id) 
      this.setState({ users: data, userIndex: currentUserIndex })
    })
  }

  currentUserCard = () => {
    const {  userIndex } = this.state;
    const { current_user } = this.props;
    return (
      <div className="rank-user-box" key={current_user.id}>
      <div>Image</div>
      <h1>{userIndex}</h1>
      <h4>
        {current_user.email}
      </h4>
      <h3>
        {current_user.zipcode}
      </h3>
      <h2>
        {current_user.points}
      </h2>
    </div>
    )
  }

  render() {
    const { users, userIndex } = this.state
    const { current_user } = this.props;
    let rank = 1
    let rank2 = 1
    return (
      <>
      <h1 className="first-big-title">Leaderboard</h1>
      <hr></hr>
      <div id="leaderboard-main">
        <div className="rank-container">
          <div className="rank-header"> 
            <h1 className="leaderboard-title">
              All Zipcode Rank
            </h1>
          </div>
          <div className="rank-box">
            {
              [...users.slice(0, 6).reduce((acc, user) =>
                {
                  const isCurrentUser = user.id === current_user.id
                  if (isCurrentUser || acc.length >= 6) return acc;
                  acc.push(
                    <div className="rank-user-box" key={user.id}>
                      <div>
                        <img className="network-person-avatar" src={`${user.avatar}`} alt="user"/>
                      </div>
                      <h1>{isCurrentUser ? userIndex : rank++}</h1>
                      <h4>
                        {user.user_email || user.email}
                      </h4>
                      <h3>
                        {user.zipcode}
                      </h3>
                      <h2>
                        {user.points}
                      </h2>
                    </div>
                  )
                  return acc;
                }, []),]
            }
          </div>
        </div>
        <div className="line-leaderboard-page"></div>
        <div className="rank-container">
          <div className="rank-header">
            <h1 className="leaderboard-title">
              My Zipcode Rank
            </h1>
          </div>
          <div className="rank-box">
            {[...users.reduce((acc, user) => {
              if (user.zipcode !== current_user.zipcode) return acc;
              const isCurrentUser = user.id === current_user.id
              if (acc.length >= 6 || isCurrentUser) return acc;
              const Fragment = (
                <div className="rank-user-box" key={user.id}>
                <div>
                  <img className="network-person-avatar" src={`${user.avatar}`} alt="user"/>
                </div>
                <h1>{rank2++}</h1>
                <h4>
                  {user.user_email}
                </h4>
                <h3>
                  {user.zipcode}
                </h3>
                <h2>{user.points}</h2>
              </div>
              )
              acc.push(Fragment)
              return acc;
            }, []),]
            }
          </div>
        </div>
      </div>
      </>
    )
  }

  componentDidMount(){
    this.fetchAllUsers()
  }
}

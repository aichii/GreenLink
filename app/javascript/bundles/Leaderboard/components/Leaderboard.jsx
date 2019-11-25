import React from 'react'
import axios from 'axios'
import styles from './leaderboard.module.css'

export default class Leaderboard extends React.Component {
  state={
    users: []
  }

  fetchAllUsers = () => {
    axios.get(`/leaderboard.json`)
    .then(res => this.setState({ users: res.data }))
  }

  render() {
    return (
      <main id={styles.mainBox}>
        <div className={styles.rankContainer}>
          <div> 
            <h1>All Zipcode Rank</h1>
            <h2>Images go here</h2>
          </div>
          <div className={styles.rankBox}>
            {
              this.state.users.map((user, i ) =>{
                if (i < 8){
                  return(
                    <h1 key={user.id}>
                      {user.user_email}
                    </h1> 
                  )
                }
              })
            }
          </div>
        </div>
        <div className={styles.rankContainer}>
          <div>
            <h1>My Network Rank</h1>
            <h2>Images go here</h2>
          </div>
          <div className={styles.rankBox}>
            {
              this.state.users.map((user, i ) =>{
                if (i < 8){
                  return(
                    <h1 
                      key={user.id}
                    >
                      {user.user_email}
                    </h1> 
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

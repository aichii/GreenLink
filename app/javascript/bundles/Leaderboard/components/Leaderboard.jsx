import React from 'react'
import axios from 'axios'

export default class Leaderboard extends React.Component {
  state={
    users: []
  }

  fetchUsers = () => {
    axios.get(`/leaderboard.json`)
    .then(res => this.setState({ users: res.data }))
  }

  render() {
    return (
      <main style={{ marginLeft: "100px" }}>
        <h1>Hello from the leaderboard page</h1>
        {
          this.state.users.map(user => (
            <h1>{user.user_email}</h1>
          ))
        }
      </main>
    )
  }

  componentDidMount(){
    this.fetchUsers()
  }
}

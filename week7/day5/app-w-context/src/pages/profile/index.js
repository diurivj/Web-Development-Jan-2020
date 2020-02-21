import React, { Component } from 'react'
import { MyContext } from '../../context'
import ProfileCard from '../../components/ProfileCard'

class Profile extends Component {
  componentDidMount() {
    const { loggedUser, isLoggedIn } = this.context.state
    if (!loggedUser && !isLoggedIn) {
      this.props.history.push('/login')
    }
  }

  render() {
    return <ProfileCard />
  }
}

export default Profile

Profile.contextType = MyContext

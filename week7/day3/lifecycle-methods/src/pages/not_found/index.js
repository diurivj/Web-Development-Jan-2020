import React from 'react'

class NotFound extends React.Component {
  componentDidMount() {
    this.props.history.push('/')
  }
  render() {
    return (
      <>
        <h1>Not found</h1>
      </>
    )
  }
}

export default NotFound

import React, { Component } from 'react'
import UserContext from './userContext'
import MovieRow from './movieRow'

class MovieList extends Component {
  static contextType = UserContext

  componentDidMount() {
    console.log('context', this.context)
  }
  render() {
    return (
      <UserContext.Consumer>
        {userContext => (
          <div>
            Movie List: {userContext.currentUser ? userContext.currentUser.name : ''} <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    )
  }
}

// Can declare up top or like below, same result
// MovieList.contextType = UserContext

export default MovieList

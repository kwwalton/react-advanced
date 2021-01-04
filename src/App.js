import React, { Component, Fragment } from 'react'

import Movie from './hoc/Movie'
import Counter from './hooks/counter'
import Users from './hooks/users'
import MoviePage from './context/moviePage'
import UserContext from './context/userContext'
import Login from './context/login'
import CartContext from './context/cartContext'
import './App.css'

class App extends Component {
  handleLoggedIn = username => {
    console.log('Getting the user: ' + username)
    const user = { name: 'Kenny' }
    this.setState({ currentUser: user })
  }
  state = { currentUser: { name: null } }

  render() {
    return (
      <Fragment>
        <Movie id="123" />
        <Counter />
        <Users />
        <CartContext.Provider value={{ cart: [] }}>
          <UserContext.Provider
            value={{
              currentUser: this.state.currentUser,
              onLoggedIn: this.handleLoggedIn,
            }}
          >
            <MoviePage />
            <Login />
          </UserContext.Provider>
        </CartContext.Provider>
      </Fragment>
    )
  }
}

export default App

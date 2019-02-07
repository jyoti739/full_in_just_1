import React, { Component } from 'react'
import Address from '../routerComponents/address'
import Profile from '../routerComponents/profile'
import Bag from '../routerComponents/bag'
import Orders from '../routerComponents/orders'
import Wishlist from '../routerComponents/wishlist'
import Login from '../routerComponents/Login'
import Links from './links'
import {Route, Switch} from 'react-router-dom'

import {connect} from 'react-redux'

class Main extends Component {
  render() {
    return (
      <div>
        <Route path = '/links' render ={() =>(this.props.loggedIn ? <Links /> : <Login />)} />
        <Switch>
          <Route path = '/login' component = {Login} />
          <Route path = '/links/profile' component = {Profile} />
          <Route path = '/links/address' component = {Address} />
          <Route path = '/links/bag' component = {Bag} />
          <Route path = '/links/orders' component = {Orders} />
          <Route path = '/links/wishlist' component = {Wishlist} />
        </Switch>
      </div>
    )
  }
}
const mapToStore = store =>{
	return{
		loggedIn : store.loggedIn
	}
}
export default connect(mapToStore)(Main)
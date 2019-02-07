import React, { Component } from 'react'
import Address from '../routerComponents/address'
import Profile from '../routerComponents/profile'
import Bag from '../routerComponents/bag'
import Orders from '../routerComponents/orders'
import Wishlist from '../routerComponents/wishlist'
import Login from '../routerComponents/Login'
import {Route, Switch} from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div>
          <Route path = '/login' component = {Login} />
          <Route path = '/profile' component = {Profile} />
          <Route path = '/address' component = {Address} />
          <Route path = '/bag' component = {Bag} />
          <Route path = '/orders' component = {Orders} />
          <Route path = '/wishlist' component = {Wishlist} />
      </div>
    )
  }
}

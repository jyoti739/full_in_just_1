import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to = '/profile'>Profile</Link></li>
          <li><Link to = '/address'>Address</Link></li>
          <li><Link to = '/bag'>Bag</Link></li>
          <li><Link to = '/orders'>Orders</Link></li>
          <li><Link to = '/wishlist'>Wishlist</Link></li>
        </ul>
      </div>
    )
  }
}

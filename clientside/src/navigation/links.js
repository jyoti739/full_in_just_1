import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default class Links extends React.Component{
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const {activeItem} = this.state
        return (
            <div>
                <Menu pointing secondary>
								<Menu.Item name='profile' active={activeItem === 'profile'} 
									onClick={this.handleItemClick}
									to = '/links/profile' as = {NavLink} />
                <Menu.Item
                    name='address'
                    active={activeItem === 'address'}
										onClick={this.handleItemClick}
										to  = '/links/address' as = {NavLink}
                />
                <Menu.Item
                    name='bag'
                    active={activeItem === 'bag'}
										onClick={this.handleItemClick}
										to = '/links/bag' as = {NavLink}
                />
                <Menu.Item
                    name='orders'
                    active={activeItem === 'orders'}
										onClick={this.handleItemClick}
										to = '/links/orders' as = {NavLink}
                />
                <Menu.Item
                    name='wishlist'
                    active={activeItem === 'wishlist'}
										onClick={this.handleItemClick}
										to = '/links/wishlist' as = {NavLink}
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
										onClick={this.handleItemClick}
										to = '/login' as = {NavLink}
                    />
                </Menu.Menu>
                </Menu>

                {/* <Segment>
                  <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Segment> */}
            </div>
        )
    }
}


export  class MenuExampleSecondaryPointing extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>to be removed soon!</div>
    )
  }
}
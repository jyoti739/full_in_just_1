import React from 'react'
import {Menu, Image, Segment} from 'semantic-ui-react'
import {connect} from 'react-redux'

const EditProfile = () =>{
    return(
        <div>
            
        </div>
    )
}
const Profile = props => {
  return (			
    <div>
				<Menu>
					<Menu.Item>
						<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGtCyHQeuQbMYELDT8pqLn2qB-ppI1vacmLvI0W_PeXnxYLIv' size='small' circular />
						<Segment>
							<p>Name</p>
							<p>email</p>
							<p>dob</p>
							<p>gender</p>
							<p>phone</p>
						</Segment>
					</Menu.Item>
					<Menu.Item>
					<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdP8_WHYu5wR9VU33Q1He28nvajJAuTOANiB84Cfq0nArDVMAf' size='small' circular />
						<Segment>
							<p>Name : {props.name}</p>
							<p>email</p>
							<p>dob</p>
							<p>gender</p>
							<p>phone</p>
						</Segment>
					</Menu.Item>
					<Menu.Item>
					<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZnvusKziH7sHTMaUa0eQJzqiNnz19ajT3rYW1J5tXqIBSn74' size='small' circular />
						<Segment>
							<p>Name : {props.name[1]}</p>
							<p>email</p>
							<p>dob</p>
							<p>gender</p>
							<p>phone</p>
						</Segment>
					</Menu.Item>
				</Menu>
    </div>
  )
}
const mapToStore = store =>{
	return{
		name : store.name,
		email : store.email,
		dob : store.dob,
		gender : store.gender,
		phone : store.phone
	}
}
const mapToDispatch = dispatch =>{
	return{
		onText : () => dispatch({type : "textInput"})
	}
}
export default connect(mapToStore, mapToDispatch) (Profile)
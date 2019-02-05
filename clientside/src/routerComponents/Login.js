import React from 'react'
import {Button, Form, Checkbox} from 'semantic-ui-react'
import LoginStore from '../stores/loginStore'
import LoginReducer from '../actions/loginReducer'
import {connect} from 'react-redux'

// import {}
class Login extends React.Component{
  state = {
    flag : true
  }
  onToggle = () =>{
    this.setState({flag : !this.state.flag})
  }
  render(){
    return(
      this.state.flag ?
					<Login_form onToggle = {this.onToggle} /> :
          <Register onToggle  = {this.onToggle}/>
    )}
}

const Login_form = props => (
	<Form style ={{backgroundColor : "grey", height : "250px", width : '500px',
		borderRadius : "20px", margin : "90px 290px", padding : "auto"}}>
    <Form.Field style = {{marginTop : "50px", paddingTop : "40px"}}> 
      <input placeholder='UserName' style = {{width : '400px'}} name  = "userName" value = "to be written"/>
    </Form.Field>
    <Form.Field>
      <input placeholder='password' style = {{width : '400px'}} />
    </Form.Field>
    {/* <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field> */}
    <Button type='submit'>Login</Button>
    <p>new to this site <a style = {{cursor : "pointer"}}
      onClick = {props.onToggle}>Register</a></p>
  </Form>
)

const Register = props =>(
  <Form >
    <Form.Field style  = {{width : '400px', marginLeft : "200px", marginTop : "90px", 
    marginLeft :"430px", padding : "20px"}}>
      <input placeholder = 'First Name'  />
      <input placeholder = 'Last Name' />
      <input placeholder = 'password' />
      <input placeholder = 'phone' />
      <input placeholder = 'email' />
    </Form.Field>
    <Button> Register </Button>
    <p>click <a style = {{cursor : "pointer"}}
      onClick = {props.onToggle}>here</a> to login</p>
  </Form>
)
export default connect(LoginStore, LoginReducer)(Login)
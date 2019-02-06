import React from 'react'
import {Button, Form, Input} from 'semantic-ui-react'
import {connect} from 'react-redux'

// import {}
class Login extends React.Component{
  
  // onToggle = () =>{
  //   this.setState({flag : !this.state.flag})
  // }
  render(){
    return(
      this.props.flag ?
          <LoginForm userName = {this.props.userName}
            password = {this.props.password} onToggle = {this.props.onToggle} /> :
          <Register onToggle  = {this.props.onToggle}/>
    )}
}

const LoginForm = props =>{
  return( 
	<Form style ={{backgroundColor : "grey", height : "250px", width : '500px',
		borderRadius : "20px", margin : "90px 290px", padding : "auto"}}>
    <Form.Field style = {{marginTop : "50px", paddingTop : "40px", marginLeft : "50px"}}> 
      <Input placeholder='UserName' style = {{width : '400px'}} name  = "userName" value = {props.userName}/>
    </Form.Field>
    <Form.Field>
      <input placeholder='password' type = 'password' style = {{width : '400px', marginLeft: "50px"}} name = "password"
        value = {props.password} onChange = {props.login}/>
    </Form.Field>
    {/* <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field> */}
    <Button type='submit' style = {{marginLeft : '180px'}}>Login</Button>
    <p style = {{ marginLeft : "160px"}}>new to this site <a style = {{cursor : "pointer"}}
      onClick = {props.onToggle}>Register</a></p>
  </Form>
)
  }
const Register = props =>{
  return(
  <Form >
    <Form.Field style  = {{width : '400px', marginTop : "90px", 
    marginLeft :"430px", padding : "20px"}}>
      <input placeholder = 'First Name' name = "FirstName" value ={props.userName} />
      <input placeholder = 'Last Name' />
      <input placeholder = 'password' />
      <input placeholder = 'phone' />
      <input placeholder = 'email'/>
    </Form.Field>
    <Button> Register </Button>
    <p>click <a style = {{cursor : "pointer"}}
      onClick = {props.onToggle}>here</a> to login</p>
  </Form>
)
  }
export const mapToStore = store =>{
  return{
      userName : store.userName,
      password : store.password,
      flag : store.flag
  }
}
export const mapToDispatch = dispatch =>{
  return{
    onToggle : () => dispatch({type : 'toggle'}),
    loginInput : (event) => dispatch({type : 'login', event})
 }
}

export default connect(mapToStore, mapToDispatch)(Login)
import React from 'react'
import {Button, Form, Input} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import axios from 'axios'

// import {}
class Login extends React.Component{
  
  // onToggle = () =>{
  //   this.setState({flag : !this.state.flag})
  // }


  onRegister = (e) =>{
    e.preventDefault()
    const newUser = {
      firstName : this.props.firstName,
      lastName : this.props.lastName,
      password : this.props.password,
      phone : this.props.phone,
      email : this.props.email
    }
    axios.post('/users/register', newUser).then(res => console.log(res.data)).catch(err  => console.log(err))
  }

  onSuccessLogin = () =>{
        const user = {
          email : this.props.email,
          password : this.props.password
        }
      axios.post('/users/login', user).then(res => console.log(res.data)).catch(err =>console.log(err.response.data))    
  }


  render(){
    return(
      this.props.flag ?
          <LoginForm userName = {this.props.userName}
            password = {this.props.password} 
            onToggle = {this.props.onToggle}
            onInput = {this.props.onInput}
            onLoginSubmit = {this.props.loginSubmit}
            loggedIn = {this.props.loggedIn}
            onLoggedIn = {this.props.onLoggedIn} /> :
          <Register onToggle  = {this.props.onToggle}
                    onRegister = {this.onRegister}  
                    firstName = {this.props.firstName}
                    onInput = {this.props.onInput} />
    )}
}

export const LoginForm = props =>{
  return( 
	<Form style ={{backgroundColor : "grey", height : "250px", width : '500px',
		borderRadius : "20px", margin : "90px 290px", padding : "auto"}}>
    <Form.Field style = {{marginTop : "50px", paddingTop : "40px", marginLeft : "50px"}}> 
      <input placeholder='email' style = {{width : '400px'}} name  = "email" value = {props.email}
      onChange = {props.onInput} />
    </Form.Field>
    <Form.Field>
      <input placeholder='password' type = 'password' style = {{width : '400px', marginLeft: "50px"}} name = "password"
        value = {props.password} onChange = {props.onInput}/>
    </Form.Field>
    {/* <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field> */}
    <Button type='submit' style = {{marginLeft : '180px'}}
        onClick = {props.onLoginSubmit} onClick = {props.onLoggedIn} to = '/links' as = {NavLink}>Login</Button>
    <p style = {{ marginLeft : "160px"}}>new to this site <a style = {{cursor : "pointer"}}
      onClick = {props.onToggle} to = '/register' as = {NavLink}>Register</a></p>
  </Form>
)
  }
export const Register = props =>{
  return(
  <Form >
    <Form.Field style  = {{width : '400px', marginTop : "90px", 
      marginLeft :"430px", padding : "20px"}}>
      <input placeholder = 'First Name' name = "firstName" value ={props.firstName} onChange = {props.onInput} />
      <input placeholder = 'Last Name' name = "lastName" value ={props.lastName} onChange = {props.onInput}/>
      <input placeholder = 'password' name = "password" value ={props.password} onChange = {props.onInput} />
      <input placeholder = 'phone' name = "phone" value ={props.phone} onChange = {props.onInput}/>
      <input placeholder = 'email' name = "email" value ={props.email} onChange = {props.onInput}/>
    </Form.Field>
    <Button style  =  {{marginLeft : "590px"}} onClick = {props.onRegister}> Register </Button>
    <p style  =  {{marginLeft : "590px"}}>click <a style = {{cursor : "pointer"}}
      onClick = {props.onToggle}>here</a> to login</p>
  </Form>
)
  }
export const mapToStore = store =>{
  return{
      userName : store.userName,
      password : store.password,
      flag : store.flag,
      firstName : store.firstName,
      lastName : store.lastName,
      phone : store.phone,
      email : store.email
  }
}
export const mapToDispatch = dispatch =>{
  return{
    onToggle : () => dispatch({type : 'toggle'}),
    onInput : (event) => dispatch({type : "input", event}),
    loginSubmit : () => dispatch({type : "loginSubmit"}),
    onLoggedIn : () => dispatch({type : "check_login"})

 }
}

export default connect(mapToStore, mapToDispatch)(Login) 
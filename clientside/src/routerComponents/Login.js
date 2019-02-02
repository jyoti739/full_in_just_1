import React from 'react'
import {Button, Form, Checkbox} from 'semantic-ui-react'
// import {}
const Login = () =>{
    return(
					<FormExampleForm />
    )
}

const FormExampleForm = () => (
	<Form style ={{backgroundColor : "grey", height : "250px", width : '500px',
		borderRadius : "20px", margin : "90px 290px", padding : "auto"}}>
    <Form.Field style = {{marginTop : "50px", paddingTop : "40px"}}> 
      <input placeholder='UserName' style = {{width : '400px'}}/>
    </Form.Field>
    <Form.Field>
      <input placeholder='password' style = {{width : '400px'}} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)
export default Login
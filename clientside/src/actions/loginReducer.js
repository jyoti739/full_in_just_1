import axios from 'axios'

const initialState = {
    userName : "jyoti_",
    password  : "tistusu",
    flag : true
}

const LoginReducer = (state  = initialState, action) =>{
		console.log(action)
		
    switch(action.type){
				case  "login" : 
					const userData = axios.get('http://localhost:5000/users')
					const target = action.event.target
					const value = target.value
					const name = target.name
					return {
							...state,
							[name] : value
						}
        case 'toggle' : 
            return{
                ...state,
                flag : !state.flag
            }
        default : console.log("this is default case from switch")
    
    }console.log(state.flag)
    return state
}

export default LoginReducer
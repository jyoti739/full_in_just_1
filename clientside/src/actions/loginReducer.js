import axios from 'axios'

const initialState = {
    userName : [],
    password  : "tistusu",
		flag : true,
		firstName : "",
		lastName : "",
		name : [],
		loginFlag : false
}

const LoginReducer = (state  = initialState, action) =>{

    switch(action.type){
		case  "input" : 
			const target = action.event.target
			const value = target.value
			const name = target.name
			console.log("value ", value)
			return {
					...state,
					[name] : value
				}
        case 'toggle' : 
            return{
                ...state,
                flag : !state.flag
						}
				case 'loginSubmit':
						const tempArr = []
					fetch('http://localhost:5000/users/')
					.then(data => data.json()).then(data =>{
						// data.filter(d => console.log(d.name == state.firstName))
						for(let i = 0; i<data.length; i++){
							if(data[i].name == state.firstName && data[i].password == state.password){
								console.log("user is verified!")
								return{
									...state,
									loginFlag : !state.loginFlag
								}
							}  // wrong as it only works for first username only for second, 
							//as the first name does not match, so return else part, which shpould not be the case, else return{...state}
						}
					}).then(data => {
						if(data.loginFlag){
							console.log("go to the home page!")
						}else console.log("username is invalid")
					})
					
        default : console.log("this is default case from switch")    
    }console.log(state.flag)
    return state
}

export default LoginReducer
import axios from 'axios'

const initialState = {
    userName : [],
    password  : "",
		flag : true,
		firstName : "",
		lastName : "",
		phone : '',
		email : '',
		name : [],
		loginFlag : false,
		loggedIn : false
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
				case 'check_login':
						return{
							...state, 
							loggedIn : !state.loggedIn
						}
				case 'loginSubmit':
						let tempArr = []
					fetch('http://localhost:5000/users/')
					.then(data => data.json()).then(data =>{
						// data.filter(d => console.log(d.name == state.firstName))
						
						// to store the name into name array
						for(let i = 0; i< data.length; i++){
							tempArr.push(data[i].name)
							console.log("j", tempArr)
						}
						// check the password
						for(let i = 0; i<data.length; i++){
							if(data[i].name == state.firstName && data[i].password == state.password){
								console.log("user is verified!", state.name)
								return{
									...state,
									loginFlag : !state.loginFlag,
									firstName : '',
									password : '',
									name :  state.name.push(tempArr)  //[tempArr, ...state.name]
								}
							}  // wrong as it only works for first username only for second, 
							//as the first name does not match, so return else part, which shpould not be the case, else return{...state}
						}
					}).then(data => {
						console.log("name from tempArr ", state.name)
						if(data.loginFlag){
							console.log("go to the home page!")
						}else console.log("username is invalid")
					})
					
        default : console.log("this is default case from switch")    
    }console.log(state.name)
    return state
}

export default LoginReducer
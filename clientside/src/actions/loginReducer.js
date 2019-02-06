import axios from 'axios'

const initialState = {
    userName : [],
    password  : "tistusu",
		flag : true,
		firstName : "",
		lastName : ""
}

const LoginReducer = (state  = initialState, action) =>{
		// console.log(action)
		let userName1 = [];
		let password1 = [];
	
    switch(action.type){
				case  "login" : 
					const target = action.event.target
					const value = target.value
					const name = target.name
					if(name in state.userName){
						console.log("name presents in database ")
					return {
							...state,
							[name] : value
						}}else{return console.log("name does not exists!")}
        case 'toggle' : 
            return{
                ...state,
                flag : !state.flag
						}
				case 'input' : 
						const target1 = action.event.target
						const name1 = target1.name
						const value1 = target1.value
						return {
							...state,
							[name1] : value1,
						}
				case 'loginSubmit':
					fetch('http://localhost:5000/users/')
					.then(data => data.json()).then(data => data.map(d => {
						// state.userName.concat(d.name)
						return{
							...state,
							userName : state.userName.concat(d.name)
						}
					}))
					.then(data  => {
						data.map(d => {
							console.log(d)
						})
					})
					.catch(err => console.log(err))
					console.log("first Name ", state.userName.length)
					for(let name of state.userName){
						console.log("from for loop ", name)
					}
        default : console.log("this is default case from switch")    
    }console.log(state.flag)
    return state
}

export default LoginReducer
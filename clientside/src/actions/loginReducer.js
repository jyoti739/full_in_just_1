const initialState = {
    userName : "",
    passWord  : ""
}

const LoginReducer = (state  = initialState, action) =>{
    switch(action.type){
        case  "login" : 

            return {
                ...state,
                userName : "jyoti",
                passWord : "l"
            }

    }
}

export default LoginReducer
// "reducer" recevies the response from "saga (action)"
// "response" coming from saga containes following data
// {login:"success", token:"klsjshduhdhudgsdbjshhdhfbwq0"} or {login:"fail"} 


// initial state
const initialstate = {
    status:{}
};

// create the reducer 
const reducer = (state=initialstate,action)=>{
    switch(action.type){
        case "LOGIN":
            state.status={};
            return {
                ...state,
                status:state.status.assign(action.type)
            }
            break;
    }
    return state;
};

// export the reducer
export default reducer;
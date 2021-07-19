// takelatest is take the latest value of login button last clicking
// put is used to send the data to the reducer
import {takelatest,put,call} from "redux-saga/effects";

// axios is send the data to the server
import axios from "axios";


// // make the reat api call

// export function login_api(user_details){
//     return axios.post("http://localhost:8080/login",user_details);
// };


// // create the main function
// export default function *main_fun(action){
//     try{
//         const res =yield call(login_api,action.value);
//         yield put(success_login(res));
//     }catch(error){
//         console.log(error);
//     }
// };

// export function success_login(res){
//     return {type:"LOGIN",res}
// }



























// this function is used to send data to the reducer
export function *login(response){
    yield put({type:"LOGIN",value:response})
};





// this is the generater function its take the login data from the login_form ands to the server
export function *login_fun(data){
    return axios.post("http://localhost:8080/login",data)
        .then((posRes)=>{
    yield takelatest("LOGIN_TEST",login(posRes.data))
        },(errRes)=>{
    console.log(errRes)
        });
}















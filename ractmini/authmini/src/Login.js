import React, { Component } from 'react';
import {connect} from "react-redux";


class Login extends React.Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Login</legend>
                    <input type="text" ref="uname" placeholder="Enter UserName"/>
                        <br/><br/><br/><br/>
                    <input type="password" ref="upwd" placeholder="Enter UserPassword"/>
                        <br/><br/><br/><br/>
                    <button onClick={this.props.login}>Login</button>
                </fieldset>
            </div>
        );
    }
}

// receiver receiving the data to reducer
const receiver = (state) =>{
    if(state.status.login == "success"){
        window.localStorage.setItem("LOGIN_DETAILS",state.status);


    }
}



// dispatch sending the data to actions
const send = (dispatch) =>{
    return(
        login=()=>{
            dispatch({
                type:"LOGIN", value:{"uname":this.refs.uname,
                                     "upwd":this.refs.upwd}
            });
        }
    );
}

export default connect(receiver,send) (Apps);
import React,{Component} from "recat";
import Angular from "./Angular";
import Reactjs from "./Reactjs";
import Nodejs from "./Nodejs";
import {BroswerRouter as Router,NavLink} from "react-router-dom";
import Route from "react-router-dom/Route";



class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <NavLink path="/angular" activeStyle={{color:red}} exact strict>Angular</NavLink>
                    <NavLink path="/react" activeStyle={{color:red}} exact strict>Reactjs</NavLink>
                    <NavLink path="/node" activeStyle={{color:red}} exact strict>Nodejs</NavLink>
                    <NavLink path="/logout" activeStyle={{color:red}} exact strict>Logout</NavLink>
                    <Route path="/angular" exact strict Component={Angular}/>
                    <Route path="/react" exact strict Component={Reactjs}/>
                    <Route path="/node" exact strict Component={Nodejs}/>
                </Router>
            </div>
        );
    }
}
export default Dashboard;
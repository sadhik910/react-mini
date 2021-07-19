import React,{Component} from "rect";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

class Apps extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Route path="/" exact strict Component={Login}/>

                    <Route path="/deshboard" exact strict Component={Dashboard}/>
                </Router>
            </div>
        );
    }
}
export default Apps;
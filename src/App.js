import React from "react";
import logo from './logo.svg';
import './App.css';
import Clock from "./Clock";

export default class App extends React.Component {
    constructor(props) {
        super(props);  // Обязательно
        this.state = {
            player: 1
        };
    }

    change=()=>{
        this.setState({
            player: 3 - this.state.player
        });
    }

    getPlayer= ()=>{
        return this.state.player
    }
    
    render() {
        return (
            <div className="Player" >
                <p style={{backgroundColor: this.state.color}}>
                    <Clock player="1"
                            turn={this.change}
                            active={this.getPlayer} /> 
                
                </p> 
                
                
            </div>
        );
    }
}




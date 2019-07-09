import React, {Component} from 'react';
import {render} from 'react-dom';
import Color from "./Color";
import Clock from "./Clock";
import Request from './Request';

class App extends Component{
    render(){
        return(
            <div>
                <Color/>   
                <Clock/>
                <Request/>
            </div>
        );
    }
}

render(<App/>,document.getElementById('root'));
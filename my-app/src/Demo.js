import React from 'react';

//import React, { Component } from 'react';
//class Demo extends Component{...}

class Demo extends React.Component{
    render(){
        const name="Sunil";
        return (
            <div>
            <h1>Heading</h1>
            <p> Demo Component</p>
            <p> Hello from {name}</p>
            </div>
        );
    }
}
export default Demo;
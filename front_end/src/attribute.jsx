import React from 'react';
import { Component } from 'react';

export default class Attribute extends Component {
render()
{
    return(
        <button onClick = {() => this.props.addChoice(this.props.id)}> {this.props.id} </button>
    );
}

}
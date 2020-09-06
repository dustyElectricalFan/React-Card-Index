import React from 'react';
import { Component } from 'react';

export default class Display extends Component {
    render()
    {
        return(
            <div>
            <img src = {this.props.src} onClick = {() => this.props.showInfo(this.props.card)} width = {300} height = {354} />
            <div style = {this.props.presence}  className="card text-white bg-secondary mb-3">
            <div className="card-header">{this.props.name}</div>
            <div className="card-body">
            <p className="card-text">{this.props.description}</p>
            </div>
            </div>        
            </div>

        );
    }
    
    }
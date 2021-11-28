import React, { Component } from 'react'
import './Cardicon.css'


export default class Cardicon extends Component {
    render() {
        return (
            <div className="ContenerDig">
            <img className="ImageDignities" src={this.props.img} alt='' />
            <p className={this.props.className}>{this.props.title}</p>
        </div>
        )
    }
}

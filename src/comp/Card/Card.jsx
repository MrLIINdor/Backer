import React, { Component } from 'react'
import './Card.css'


export default class Card extends Component {
    render() {
        return (
            <div className='Card'>
                <img className='Img' src={this.props.img} alt="" />
                <p className='Page'>{this.props.text}</p> 
            </div>
        )
    }
}

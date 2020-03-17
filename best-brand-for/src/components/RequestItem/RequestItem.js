import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RequestItem.css'

export default class RequestItem extends Component {
    
    render(){
        return(
            <Link to={`/requests/${this.props.request.id}`}>
                <div className='request'>
                    <p>Best Brand For...</p>
                    <h4>{this.props.request.product}</h4>
                    <p>Requested in {this.props.request.category} on {new Date(this.props.request.date).toLocaleDateString()}</p>
                    <p>{/*find some way to count the number of comments*/}</p> 
                </div>
            </Link>
        )
    }
}

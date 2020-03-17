import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './UpdateComment.css'
import UserService from '../../services/user-service'
import TokenService from '../../services/token-service'
import RequestListContext from '../../contexts/RequestListContext'
import RequestApiService from '../../services/request-api-services'

export default class UpdateComment extends Component {
  static contextType = RequestListContext
  
  submitForm=ev=>{
      ev.preventDefault()
        const { brand, why } = ev.target
        console.log('submit')
        //console.log(product.value)
        //this.setState({ error: null })

        RequestApiService.updateComment(this.props.comment.id, brand.value, why.value)
            .then(res=>{
                RequestApiService.getCommentsByRequestId(this.context.currentRequest.id)
                    .then(this.context.setCurrentComments)
                    .catch()/*
                RequestApiService.getAllRequests()
                    .then(this.context.setRequestList)
                    .catch()
                RequestApiService.getRequestsByUserId(UserService.getUserToken())
                    .then(this.context.setUsersList)
                    .catch()*/
                this.props.onUpdateSuccess()
            })
            .catch(/* add validation here for errors*/)
  }
  
  render(){
        return(
            <form className='comment' onSubmit={this.submitForm}>
                    <div>
                        <label htmlFor="brand">Brand</label>
                        <input type="text" name='brand' id='brand' defaultValue={this.props.comment.brand}/>
                    </div>
                    <div>
                        <label htmlFor="why">Why?</label>
                        <input type="text" name='why' id='why' defaultValue={this.props.comment.why}/>
                    </div>
                    <input className='updateComment' type='submit' value='Update'/>
                </form> 
        )
    }
}

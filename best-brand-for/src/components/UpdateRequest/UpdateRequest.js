import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './UpdateRequest.css'
import UserService from '../../services/user-service'
import TokenService from '../../services/token-service'
import RequestListContext from '../../contexts/RequestListContext'
import RequestApiService from '../../services/request-api-services'

export default class UpdateRequest extends Component {
  static contextType = RequestListContext
  
  submitForm=ev=>{
      ev.preventDefault()
        const { product, info } = ev.target
        console.log('submit')
        //console.log(product.value)
        //this.setState({ error: null })

        RequestApiService.updateRequest(this.context.currentRequest.id, product.value, info.value)
            .then(res=>{
                RequestApiService.getRequestById(this.context.currentRequest.id)
                    .then(this.context.setCurrentRequest)
                    .catch()
                RequestApiService.getAllRequests()
                    .then(this.context.setRequestList)
                    .catch()
                RequestApiService.getRequestsByUserId(UserService.getUserToken())
                    .then(this.context.setUsersList)
                    .catch()
                this.props.onUpdateSuccess()
            })
            .catch(/* add validation here for errors*/)
  }
  
  render(){
        return(
            <form className='filterForm' onSubmit={this.submitForm}>
                <div>
                    <label htmlFor="product">Product</label>
                    <input type="text" name='product' id='product' defaultValue={this.props.request.product} />
                </div>
                <div>
                    <label htmlFor="info">Info</label>
                    <input type="text" name='info' id='info' defaultValue={this.props.request.info} />
                </div>
                <input className='updateButton' type='submit' value='Update'/>
            </form> 
        )
    }
}



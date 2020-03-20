import React, { Component } from 'react'
import './UpdateRequest.css'
import UserService from '../../services/user-service'
import RequestListContext from '../../contexts/RequestListContext'
import RequestApiService from '../../services/request-api-services'
import Error from '../Error/Error'

export default class UpdateRequest extends Component {
  static contextType = RequestListContext
  
    state={
        error:null,
    }

  submitForm=ev=>{
      ev.preventDefault()
        const { product, info } = ev.target
        console.log('submit')
        //console.log(product.value)
        this.setState({ error: null })

        console.log(product.value.match(/^[a-z]+$/i) !== null)

        let productVal=product.value.split(" ").join("")
        let infoVal = info.value.split(" ").join("")

        if(productVal.length===0){
            this.setState({
                error: `'Product' must contain at least one character.`
            })
        }
        else if(infoVal.length===0){
            this.setState({
                error: `'Info' must contain at least one character.`
            })
        }
        else{

            RequestApiService.updateRequest(this.context.currentRequest.id, product.value, info.value)
            .then(res=>{
                RequestApiService.getRequestById(this.context.currentRequest.id)
                    .then(this.context.setCurrentRequest)
                    .catch(this.context.setError)
                RequestApiService.getAllRequests()
                    .then(this.context.setRequestList)
                    .catch(this.context.setError)
                RequestApiService.getRequestsByUserId(UserService.getUserToken())
                    .then(this.context.setUsersList)
                    .catch(this.context.setError)
                this.props.onUpdateSuccess()
            })
            .catch(this.context.setError)
        }
    
  }
  
  componentDidMount=()=>{
      this.context.clearError()
  }

  render(){
      const {error} = this.state
        return(
            <Error>
            <form className='updateRequestForm' onSubmit={this.submitForm}>
                <legend>Update your request:</legend>
                <div role='alert' id='error'>
                    {error && <p>{error}</p>}
                </div>
                <div className='updateReqInput'>
                    <label htmlFor="product">Product</label>
                    <input type="text" name='product' id='product' defaultValue={this.props.request.product} />
                </div>
                <div className='updateReqInput'>
                    <label htmlFor="info">Info</label>
                    <textarea rows={5} type="text" name='info' id='info' defaultValue={this.props.request.info} />
                </div>
                <input className='updateReqButton' type='submit' value='Update'/>
            </form> 
            </Error>
        )
    }
}



import React, { Component } from 'react'
import './UpdateComment.css'
import RequestListContext from '../../contexts/RequestListContext'
import RequestApiService from '../../services/request-api-services'
import Error from '../../components/Error/Error'

export default class UpdateComment extends Component {
  static contextType = RequestListContext
  
    state = {
        error: null
    }

  submitForm=ev=>{
      ev.preventDefault()
        const { brand, why } = ev.target
        console.log('submit')
        //console.log(product.value)
        this.setState({ error: null })

        let brandVal=brand.value.split(" ").join("")
        let whyVal = why.value.split(" ").join("")

        if(brandVal.length===0){
            this.setState({
                error: `'Brand' must contain at least one character.`
            })
        }
        else if(whyVal.length===0){
            this.setState({
                error: `'Why' must contain at least one character.`
            })
        }
        else{
            RequestApiService.updateComment(this.props.comment.id, brand.value, why.value)
                .then(res=>{
                    RequestApiService.getCommentsByRequestId(this.context.currentRequest.id)
                        .then(this.context.setCurrentComments)
                        .catch(this.context.setError)/*
                    RequestApiService.getAllRequests()
                        .then(this.context.setRequestList)
                        .catch()
                    RequestApiService.getRequestsByUserId(UserService.getUserToken())
                        .then(this.context.setUsersList)
                        .catch()*/
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
            <form className='comment updateCommentForm' onSubmit={this.submitForm}>
                <legend>Update your comment:</legend>
                <div role='alert' id='error'>
                    {error && <p>{error}</p>}
                </div>
                    <div className='updateReqInput'>
                        <label htmlFor="brand">Brand</label>
                        <input type="text" name='brand' id='brand' defaultValue={this.props.comment.brand}/>
                    </div >
                    <div className='updateReqInput'>
                        <label htmlFor="why">Why?</label>
                        <textarea row={5} type="text" name='why' id='why' defaultValue={this.props.comment.why}/>
                    </div>
                    <input className='updateComment updateReqButton' type='submit' value='Update'/>
                </form> 
                </Error>
        )
    }
}

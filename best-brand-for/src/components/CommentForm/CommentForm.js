import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CommentForm.css'
import UserService from '../../services/user-service'
import TokenService from '../../services/token-service'
import RequestListContext from '../../contexts/RequestListContext'
//import RequestListContext from '../../contexts/RequestListContext'
import RequestApiService from '../../services/request-api-services'

export default class CommentForm extends Component {

    static contextType = RequestListContext
    
    handleSubmit = ev => {
        ev.preventDefault()
        const { brand, why } = ev.target

        //this.setState({ error: null })

        let userId = Number(UserService.getUserToken())

        RequestApiService.postNewComment(this.context.currentRequest.id, userId, brand.value, why.value)
            .then(()=>{this.props.onSubmit()})
            .catch(/* add validation here for errors*/)
    }

    renderCommentForm=()=>{

        if(!UserService.getUserToken()){
            return(
                <div className='comment'>
                    <Link to='/login'>Login</Link>
                    <p>to make a recommendation</p>
                </div>
            )
        }
        else{
            return(
                <form className='comment commentForm' onSubmit={this.handleSubmit}>
                    <legend>Got a brand you're passionate about?</legend>
                    <div>
                        <label htmlFor="brand">Brand</label>
                        <input type="text" name='brand' id='brand'/>
                    </div>
                    <div>
                        <label htmlFor="why">Why?</label>
                        <input type="text" name='why' id='why'/>
                    </div>
                    <input className='submitComment' type='submit' value='Submit'/>
                </form> 
            )
        }
        
    }


  render(){
        return(<>
            {this.renderCommentForm()}
            </>
        )
    }
}



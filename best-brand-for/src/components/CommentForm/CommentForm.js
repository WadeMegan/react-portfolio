import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CommentForm.css'
import UserService from '../../services/user-service'
import RequestListContext from '../../contexts/RequestListContext'
//import RequestListContext from '../../contexts/RequestListContext'
import RequestApiService from '../../services/request-api-services'
import Error from '../../components/Error/Error'


export default class CommentForm extends Component {

    static contextType = RequestListContext
    
    handleSubmit = ev => {
        ev.preventDefault()
        const { brand, why } = ev.target

        //this.setState({ error: null })

        let userId = Number(UserService.getUserToken())

        RequestApiService.postNewComment(this.context.currentRequest.id, userId, brand.value, why.value)
            .then(()=>{
                brand.value=''
                why.value=''
                this.props.onSubmit()
            })
            .catch(this.context.setError)
    }
    
    componentDidMount=()=>{
        this.context.clearError()
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
                <Error>
                <form className='comment commentForm' onSubmit={this.handleSubmit}>
                    <legend>Got a brand you're passionate about?</legend>
                    <div>
                        <label htmlFor="brand">Brand *</label>
                        <input className='inputArea' type="text" name='brand' id='brand' required='require'/>
                    </div>
                    <div>
                        <label htmlFor="why">Why? *</label>
                        <textarea className='inputArea' rows={3} type="text" name='why' id='why' required='require'/>
                    </div>
                    <input className='submitComment' type='submit' value='Submit'/>
                </form> 
                </Error>
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



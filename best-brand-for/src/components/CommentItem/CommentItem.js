import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CommentItem.css'
import RequestListContext from '../../contexts/RequestListContext'
import UserService from '../../services/user-service'
import RequestApiService from '../../services/request-api-services'
import UpdateComment from '../../components/UpdateComment/UpdateComment'

export default class RequestItem extends Component {
    static contextType = RequestListContext
    
    state={
        updating: false,
    }

    deleteComment=()=>{
       
        RequestApiService.deleteComment(this.props.comment.id)
            .then(res=>{
                RequestApiService.getCommentsByRequestId(this.context.currentRequest.id)
                    .then(this.context.setCurrentComments)
                    .catch()
            })
            .catch()
    }
    
    updateComment=()=>{
        this.setState({
            updating:true
        })
    }

    onUpdateSuccess = ()=>{
        this.setState({
            updating:false,
        })
    }

    renderDeleteEditButtons=()=>{
        if(this.props.comment.user_id==UserService.getUserToken()){
            return (
                <div>
                    <button onClick={this.deleteComment}>Delete</button>
                    <button onClick={this.updateComment}>Edit</button>
                </div>
            )
        }
    }

    renderComment=()=>{
        if(this.state.updating===false){
            return(
                <div className='comment'>
                    <h3>{this.props.comment.first_name} {this.props.comment.last_name.charAt(0)}. recommends {this.props.comment.brand}</h3>
                    <p>{this.props.comment.why}</p>
                    {this.renderDeleteEditButtons()}
                </div>
            )
        }
        else{
            return(
                < UpdateComment comment={this.props.comment} onUpdateSuccess={this.onUpdateSuccess}/>
            )
        }
    }
    
    render(){
        return(<>
            {this.renderComment()}
            </>
        )
    }
}
import React, { Component } from 'react'
import './CommentItem.css'
import RequestListContext from '../../contexts/RequestListContext'
import UserService from '../../services/user-service'
import RequestApiService from '../../services/request-api-services'
import UpdateComment from '../../components/UpdateComment/UpdateComment'
import Error from '../../components/Error/Error'

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
                    .catch(this.context.setError)
            })
            .catch(this.context.setError)
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
        if(this.props.comment.user_id===UserService.getUserToken()){
            return (
                <div className='commentButtonBox'>
                    <button onClick={this.deleteComment} className='commentButton deleteButton'>Delete</button>
                    <button onClick={this.updateComment} className='commentButton'>Edit</button>
                </div>
            )
        }
    }

    renderComment=()=>{
        if(this.state.updating===false){
            return(
                <div className='comment'>
                    <h3>{this.props.comment.brand}</h3>
                    <div className='commentInfo'>
                        <i className="fas fa-user"></i>
                        <p>{this.props.comment.first_name} {this.props.comment.last_name.charAt(0)}.</p>
                    </div>
                    <p>{this.props.comment.why}</p>
                    {this.renderDeleteEditButtons()}
                </div>
            )
        }
        else{
            return(
                <UpdateComment comment={this.props.comment} onUpdateSuccess={this.onUpdateSuccess}/>
            )
        }
    }

    componentDidMount=()=>{
        this.context.clearError()
    }
    
    render(){
        return(<Error>
            {this.renderComment()}
            </Error>
        )
    }
}
import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import './IndividualRequestPage.css'
import RequestApiService from '../../services/request-api-services'
import RequestListContext from '../../contexts/RequestListContext'
import CommentForm from '../../components/CommentForm/CommentForm'
import CommentItem from '../../components/CommentItem/CommentItem'
import UserService from '../../services/user-service'
import {Redirect} from 'react-router-dom'
import UpdateRequest from '../../components/UpdateRequest/UpdateRequest'

export default class LandingPage extends Component {
    static contextType = RequestListContext

    state = {
        commentAdded: false, //will be passed to Nav component to render different links based on logged in or not
        toRequests: false,
        updating: false,
    }

    // upon successful login ... 
    onDeleteSuccess = (e, user) => {
        this.setState({ 
            toRequests:true, // set true for redirecting (see render method)
        }) 
    }

    onUpdateSuccess = ()=>{
        this.setState({
            updating:false,
        })
    }

      // will be passed to LoginPage as props
      // upon successful login, will set state isLoggedIn to true
      // necessary for rendering different links in Nav
      handleSubmit=()=>{
        console.log('handleSubmit ran')
        this.setState({
          commentAdded: true
        })

        RequestApiService.getRequestById(this.props.match.params.id)
            .then(this.context.setCurrentRequest)
            .catch()

        RequestApiService.getCommentsByRequestId(this.props.match.params.id)
            .then(this.context.setCurrentComments)
            .catch()


      }



    componentWillMount=()=>{
    
        console.log('will mount ran')
        RequestApiService.getRequestById(this.props.match.params.id)
            .then(this.context.setCurrentRequest)
            .catch()

        RequestApiService.getCommentsByRequestId(this.props.match.params.id)
            .then(this.context.setCurrentComments)
            .catch()
        
    }

    renderComments=(comments)=>{
        
        let results
        if(comments.length===1){
            results = '1 recommendation'
        }
        else{
            results = `${comments.length} recommendations`
        }
        
        let commentItems = comments.map(comment=>
                <CommentItem key={comment.id} comment={comment}/>
            )

        return(
            <>
            <p>{results}</p>
            <div>{commentItems}</div>
            </>
        )
    }

    deleteRequest=()=>{
        console.log('delete')
        RequestApiService.deleteRequest(this.context.currentRequest.id)
            .then(res=>{
                RequestApiService.getRequestsByUserId(UserService.getUserToken())
                    .then(this.context.setUsersList)
                    .catch()
                this.onDeleteSuccess()
            })
            .catch()
    }

    updateRequest=()=>{
        console.log('update clicked')
        this.setState({
            updating:true
        })
    }

    renderDeleteEditButtons=()=>{
        if(this.context.currentRequest.user_id==UserService.getUserToken()){
            return (
                <div>
                    <button onClick={this.deleteRequest}>Delete</button>
                    <button onClick={this.updateRequest}>Edit</button>
                </div>
            )
        }
    }

    renderRequest=()=>{
        if(this.state.updating===false){
            let lastName = this.context.currentRequest.last_name
            let lastInitial = new String(lastName).charAt(0)
            console.log(lastInitial)

            return(
                <div className='requestInfo'>
                    <p>{this.context.currentRequest.first_name} {lastInitial}. wants to know the Best Brand For...</p>
                    <h2>{this.context.currentRequest.product}</h2>
                    <p>Requested in {this.context.currentRequest.category} on {new Date(this.context.currentRequest.date).toLocaleDateString()}</p>
                    <p>{this.context.currentRequest.info}</p>
                    {this.renderDeleteEditButtons()}
                </div>
            )
        }
        else{
            return(
                <UpdateRequest request={this.context.currentRequest} onUpdateSuccess={this.onUpdateSuccess}/>
            )
        }
    }
    
    render(){
        // upon successful delete, redirect to your users requests
        if(this.state.toRequests===true){
            return <Redirect to='/requests/users'/>
        }
        //console.log(this.context.currentComments)
        return(
            <>
            <section className='indivRequestPage'>
                <div className='sideBar'>
                <button className='backButton' onClick={this.props.history.goBack}>Back</button>
                </div>
                <div className='mainBar'>
                {this.renderRequest()}
                <div className='commentSection'>
                    <CommentForm onSubmit={this.handleSubmit}/>
 
                    {this.renderComments(this.context.currentComments)}

                </div>
                </div>
            </section>
            </>
        )
    }
}
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
import Error from '../../components/Error/Error'

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
            .catch(this.context.setError)

        RequestApiService.getCommentsByRequestId(this.props.match.params.id)
            .then(this.context.setCurrentComments)
            .catch(this.context.setError)


      }



    componentWillMount=()=>{
    
        RequestApiService.getRequestById(this.props.match.params.id)
            .then(this.context.setCurrentRequest)
            .catch(this.context.setError)

        RequestApiService.getCommentsByRequestId(this.props.match.params.id)
            .then(this.context.setCurrentComments)
            .catch(this.context.setError)
        
    }

    renderComments=(comments)=>{
        
        let results
        if(comments.length===1){
            results = '1 Recommendation'
        }
        else{
            results = `${comments.length} Recommendations`
        }
        
        let commentItems = comments.map(comment=>
                <CommentItem key={comment.id} comment={comment}/>
            )

        return(
            <>
            <p className='commentsCount'>{results}</p>
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
                    .catch(this.context.setError)
                this.onDeleteSuccess()
            })
            .catch(this.context.setError)
    }

    updateRequest=()=>{
        console.log('update clicked')
        this.setState({
            updating:true
        })
    }

    renderDeleteEditButtons=()=>{
        if(this.context.currentRequest.user_id===UserService.getUserToken()){
            return (
                <div className='editAndDeleteBox'>
                    <button onClick={this.deleteRequest} className='requestButton'>DELETE</button>
                    <button onClick={this.updateRequest} className='requestButton editButton'>EDIT</button>
                </div>
            )
        }
    }

    renderRequest=()=>{
        if(this.state.updating===false){
            let lastName = this.context.currentRequest.last_name
            let lastInitial = new String(lastName).charAt(0)

            return(
                <div className='requestInfo'>
                    <h2>{this.context.currentRequest.product}</h2>
                    <div className='requestData'>
                        <div className='iconContainer'>
                            <i className="fas fa-user"></i>
                            <i className="fas fa-clock"></i>
                            <i className="fas fa-store"></i>
                        </div>
                        <div className='infoContainer'>
                            <p>{this.context.currentRequest.first_name} {lastInitial}.</p>
                            <p>{new Date(this.context.currentRequest.date).toLocaleDateString()}</p>
                            <p>{this.context.currentRequest.category}</p>
                        </div>
                    </div>

                    
                    
                    

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

    componentDidMount=()=>{
        this.context.clearError()

    }
    

    render(){
        // upon successful delete, redirect to your users requests
        if(this.state.toRequests===true){
            return <Redirect to='/requests/users'/>
        }
        //console.log(this.context.currentComments)
        return(
            <Error>
            <section className='indivRequestPage'>
                <div className='sideBar'>
                <button className='backButton' onClick={this.props.history.goBack}>BACK</button>
                </div>
                <div className='mainBar'>
                {this.renderRequest()}
                <div className='commentSection'>
                    <CommentForm onSubmit={this.handleSubmit}/>
 
                    {this.renderComments(this.context.currentComments)}

                </div>
                </div>
            </section>
            </Error>
        )
    }
}
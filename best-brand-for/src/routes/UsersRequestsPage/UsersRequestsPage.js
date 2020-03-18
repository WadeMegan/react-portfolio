import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RequestApiService from '../../services/request-api-services'
import RequestListContext from '../../contexts/RequestListContext'
import RequestItem from '../../components/RequestItem/RequestItem'
import UserService from '../../services/user-service'



export default class UsersRequestsPage extends Component {
    static contextType = RequestListContext

    //if requestList is empty, make get request for all requests
    //important for refreshing
    componentDidMount(){
        //console.log(this.context.usersList)
        if(!this.context.usersList.length){
            RequestApiService.getRequestsByUserId(UserService.getUserToken())
                .then(this.context.setUsersList)
                .catch()
        }
    }

    renderRequests=(requests)=>{
        
        let results
        if(requests.length===1){
            results = '1 Result'
        }
        else{
            results = `${requests.length} Results`
        }
        
        let requestItems = requests.map(request=>
                <RequestItem key={request.id} request={request}/>
            )

        return(
            <>
            <p className="resultsCount">{results}</p>
            <div>{requestItems}</div>
            </>
        )
    }
    
    render(){
        return(
            <>
            <section className='allRequestsPage'>
                <h2>YOUR REQUESTS</h2>
                <Link to='/newrequest' className='newRequestButton'>New Request</Link> 
                <div className='requestsBox'>
                    {this.renderRequests(this.context.usersList)}
                </div> 
            </section>
            </>
        )
    }
}

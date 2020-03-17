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
            results = '1 result'
        }
        else{
            results = `${requests.length} results`
        }
        
        let requestItems = requests.map(request=>
                <RequestItem key={request.id} request={request}/>
            )

        return(
            <>
            <p>{results}</p>
            <div>{requestItems}</div>
            </>
        )
    }
    
    render(){
        return(
            <>
            <section className='allRequestsPage'>
                <h2>Your Requests</h2>
                <div className='filterBox'>
                <h3>Filter</h3>
                <form className='filterForm'>
                    <div>
                    <label htmlFor="keyword">Keyword</label>
                    <input type="text" name='keyword' id='keyword' />
                    </div>
                    <div>
                    <label htmlFor="category">Category</label>
                    <select id='category' name='category'>
                        <option value='all'>All</option>
                        <option value='appliances'>Appliances</option>
                        <option value='baby'>Baby & Kid</option>
                        <option value='clothing'>Clothing & Shoes</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='farm'>Farm & Garden</option>
                        <option value='furniture'>Furniture</option>
                        <option value='health'>Health & Beauty</option>
                        <option value='household'>Household</option>
                        <option value='jewelry'>Jewelry</option>
                        <option value='materials'>Materials</option>
                        <option value='sporting'>Sporting Goods</option>
                        <option value='technology'>Technology</option>
                        <option value='toys'>Toys & Games</option>
                        <option value='transportation'>Transportation</option>
                        <option value='other'>Other</option>
                    </select>
                    </div>
                    <input className='searchButton' type='submit' value='Seach'/>
                </form> 
                <p>Or</p>
                <Link to='/newrequest'>New Request</Link> 
                </div>
                <div className='requestsBox'>
                    {this.renderRequests(this.context.usersList)}
                </div> 
            </section>
            </>
        )
    }
}

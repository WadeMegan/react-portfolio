import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import './NewRequestPage.css'
import RequestApiService from '../../services/request-api-services'
import UserService from '../../services/user-service'
import RequestListContext from '../../contexts/RequestListContext'
import { BrowserRouter } from 'react-router-dom'


export default class NewRequestPage extends Component {
    static contextType = RequestListContext

    /*constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
     }*/

    //used for redirecting to all results page on form submit
    static defaultProps = {
        history: {
            push: () => {},
        }
    }
    
    state = {
        error: null
    }

    onSubmitSuccess = ()=>{
        //redirects to all requests page on successful form submission

        const { history } = this.props
        history.push('/requests/users')
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { product, category, moreInfo } = ev.target

        //console.log(product.value)
        //this.setState({ error: null })

        let userId = UserService.getUserToken()
        // ^ should be the id of whoever is logged in

        RequestApiService.postNewRequest(userId, product.value, category.value, moreInfo.value)
            .then(res=>{
                RequestApiService.getAllRequests()
                    .then(res=>{
                        this.context.setRequestList(res)
                        RequestApiService.getRequestsByUserId(userId)
                            .then(this.context.setUsersList)
                            .catch()
                    })
                    .catch()
                this.onSubmitSuccess()
            })
            .catch(/* add validation here for errors*/)
    }
    
    
    render(){
        return(
            <>
            <section className='newRequestPage'>
                <div className='sideBar'>
                <button className='backButton' onClick={this.props.history.goBack}>Back</button>
                </div>
                <div className='mainBar'>
                <h2>What are you looking for?</h2>
                <form className='newRequestForm' onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="product">Product</label>
                    <input type="text" name='product' id='product' />
                    </div>
                    <div>
                    <label htmlFor="category">Category</label>
                    <select id='category' name='category'>
                        <option value='none'></option>
                        <option value='Appliances'>Appliances</option>
                        <option value='Baby & Kid'>Baby & Kid</option>
                        <option value='Clothing & Shoes'>Clothing & Shoes</option>
                        <option value='Entertainment'>Entertainment</option>
                        <option value='Farm & Garden'>Farm & Garden</option>
                        <option value='Furniture'>Furniture</option>
                        <option value='Health & Beauty'>Health & Beauty</option>
                        <option value='Household'>Household</option>
                        <option value='Jewelry'>Jewelry</option>
                        <option value='Materials'>Materials</option>
                        <option value='Sporting Goods'>Sporting Goods</option>
                        <option value='Technology'>Technology</option>
                        <option value='Toys & Games'>Toys & Games</option>
                        <option value='Transportation'>Transportation</option>
                        <option value='Other'>Other</option>
                    </select>
                    </div>
                    <div>
                    <label htmlFor="moreInfo">More Info</label>
                    <input type="text" name='moreInfo' id='moreInfo' />
                    </div>
                    <input className='submitRequest' type='submit' value='Submit'/>
                </form> 
                </div>
            </section>
            </>
        )
    }
}
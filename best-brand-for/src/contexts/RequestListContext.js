import React, { Component } from 'react'

const RequestListContext = React.createContext({
    //request list
    requestList: [],
    setRequestList: ()=>{},

    //current request 
    currentRequest: {},
    setCurrentRequest: ()=>{},

    //users request list
    usersList: [],
    setUsersList: ()=>{},

    //current comments
    currentComments: [],
    setCurrentComments: ()=>{},

})

export default RequestListContext

export class RequestListProvider extends Component {
    state = {
        requestList: [], 
        currentRequest: {},
        usersList: [],
        currentComments: [],
    }

    setRequestList = requestList => {
        this.setState({
            requestList: requestList,
        })
    }

    setCurrentRequest = request => {
        this.setState({
            currentRequest: request,
        })
    }

    setUsersList = requests => {
        this.setState({
            usersList: requests,
        })
    }

    setCurrentComments = comments => {
        this.setState({
            currentComments: comments,
        })
    }


    render(){
        const value = {
            requestList: this.state.requestList,
            setRequestList: this.setRequestList,
            currentRequest: this.state.currentRequest,
            setCurrentRequest: this.setCurrentRequest,
            usersList: this.state.usersList,
            setUsersList: this.setUsersList,
            currentComments: this.state.currentComments,
            setCurrentComments: this.setCurrentComments,
        }

        return (
            <RequestListContext.Provider value={value}>
                {this.props.children}
            </RequestListContext.Provider>
        )
    }
}


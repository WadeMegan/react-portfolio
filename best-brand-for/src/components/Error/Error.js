import React, {Component} from 'react'
import './Error.css'
import RequestListContext from '../../contexts/RequestListContext'

// Error boundary
class Error extends Component {
    static contextType = RequestListContext

    render(){
      if(this.context.error !==null){
        return(
            <h2 className='errorBoundary'>Oh no! Best Brand For is currently experiencing technical difficulties. Please try again later.</h2>
        )
      }
      return this.props.children 
    }
}

export default Error
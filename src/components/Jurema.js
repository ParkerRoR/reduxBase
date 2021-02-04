import React,{ Component } from 'react'
import {connect} from 'react-redux'

import autobind from 'class-autobind'

const mapStateToProps = ({data: {initialState,loading_initialState}, dispatch}) => {
    return{
        initialState,
        loading_initialState,
        dispatch
    }
  }

class jurema extends Component{
    render(){
        return(
            <>
            JUREMA
            {this.props.initialState.location}
            </>
        )
    }
}
export const Jurema = connect(mapStateToProps)(jurema)
export default Jurema;

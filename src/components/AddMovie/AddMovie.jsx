import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AddMovie extends Component{
    render() {
        return(
            <>
            </>
        )
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(AddMovie));
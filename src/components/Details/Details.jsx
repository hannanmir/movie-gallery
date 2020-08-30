import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Details extends Component{
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

export default connect(putReduxDataProps)(withRouter(Details));
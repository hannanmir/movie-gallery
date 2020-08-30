import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MovieListItem from '../MovieListItem/MovieListItem.jsx';

class Home extends Component{
    render() {
        return(
            <>
                <h4>Tester</h4>
            </>
        )
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(Home));
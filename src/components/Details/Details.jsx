import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Details extends Component{
    render() {
        return(
            <div className="detail">
                <h2>{this.props.reduxState.detailsReducer.title}</h2>
                <img src={this.props.reduxState.detailsReducer.poster} alt={this.props.reduxState.detailsReducer.title} />
                <p>{this.props.reduxState.detailsReducer.description}</p>
                <button onClick= {() => this.props.history.push('/')}>Back to Movies</button>
            </div>
        )
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(Details));
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class MovieListItem extends Component{

    clickMovie = () => {
        console.log('Clicked!');
    }

    render() {
        return(
            <div className="movie">
                <div>
                    <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={ () => this.clickMovie()}/>
                    <p>{this.props.movie.description}</p>
                </div>
            </div>
        )
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(MovieListItem));
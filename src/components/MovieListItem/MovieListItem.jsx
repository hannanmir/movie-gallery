import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class MovieListItem extends Component{
    // When the poster for a movie is clicked it indicates which movie is clicked and then gets the genre ids for it, then routes to details page for that movie
    clickMovie = () => {
        this.props.dispatch({ type: 'WHICH_MOVIE', payload: this.props.movie })
        this.props.dispatch({ type: 'GET_GENRE_ID', payload: this.props.movie})
        this.props.history.push('/details')
        console.log(this.props.movie);
    }

    render() {
        return(
            <div className="movie">
                <div>
                    <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={ () => this.clickMovie()}/>
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
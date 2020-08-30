import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class MovieListItem extends Component{
    clickMovie = () => {
        // tells the server to store the movie that is clicked, then uses that info to render the details page
        this.props.dispatch({ type: 'WHICH_MOVIE', payload: this.props.movie })
        // tells the server the movie that is clicked, then uses the id to get the genres 
        this.props.dispatch({ type: 'GET_GENRE_ID', payload: this.props.movie})
        // routes to details page for the movie clicked
        this.props.history.push('/details')
    }

    // Generates the movie poster and allows for it to be clicked
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
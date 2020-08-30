import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MovieListItem from '../MovieListItem/MovieListItem.jsx';

class Home extends Component{
    // On app mounting gets the movies from the database
    componentDidMount() {
        console.log('App Mounted');
        this.setMovies();
    }

    // gets movies from the database and stores in the movies reducer
    setMovies = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    // Maps over the movies in the movies reducer and generates individual components for each movie
    render() {
        return(
            <>
                { this.props.reduxState.movies.map((movie) => {
                    return(
                        <MovieListItem movie={movie} key={movie.id}/>
                    )
                })}
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
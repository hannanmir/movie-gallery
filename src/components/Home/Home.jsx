import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MovieListItem from '../MovieListItem/MovieListItem.jsx';

class Home extends Component{
    state= {
        movieList: []
    }

    componentDidMount() {
        console.log('App Mounted');
        this.setMovies();
    }

    setMovies = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

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
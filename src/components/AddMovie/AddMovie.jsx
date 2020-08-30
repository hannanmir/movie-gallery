import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AddMovie extends Component{
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
        }
    }

    handleChangeFor = (event, propertyToChange) => {
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                [propertyToChange]: event.target.value, 
            }
        })
    }

    addMovie = () => {
        this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state.newMovie })
        this.setState({
            newMovie: {
                title: '',
                poster: '',
                description: '',    
            }
        })
    }

    render() {
        return(
            <>
                <div>
                    <input placeholder="Title" value={this.state.newMovie.title} onChange = {(event) => this.handleChangeFor(event, 'title')}/>
                    <input placeholder="Description" value={this.state.newMovie.description} onChange = {(event) => this.handleChangeFor(event, 'description')}/>
                    <input placeholder="Poster URL" value={this.state.newMovie.poster} onChange = {(event) => this.handleChangeFor(event, 'poster')}/>
                    <button onClick={ () => this.addMovie()}>Add Movie</button>
                </div>
                <div className="detail">
                    <h2>{this.state.newMovie.title}</h2>
                    <img src={this.state.newMovie.poster} alt={this.state.newMovie.title} />
                    <p>{this.state.newMovie.description}</p>
                    <button onClick= {() => this.props.history.push('/')}>Back to Movies</button>
                </div>
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
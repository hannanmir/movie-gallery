import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import swal from '@sweetalert/with-react';

class AddMovie extends Component{
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: 0,
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
        if (this.state.newMovie.title === '' || this.state.newMovie.description === '' || this.state.newMovie.poster === '' || this.state.newMovie.genre_id === 0 ) {
            swal('Please input all fields!');
        } else {      
            this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state.newMovie })
            this.setState({
                newMovie: {
                    title: '',
                    poster: '',
                    description: '',
                    genre_id: 0,    
                }
            })
        }
    }

    render() {
        return(
            <>
                <div>
                    <input placeholder="Title" value={this.state.newMovie.title} onChange = {(event) => this.handleChangeFor(event, 'title')}/>
                    <input placeholder="Description" value={this.state.newMovie.description} onChange = {(event) => this.handleChangeFor(event, 'description')}/>
                    <input placeholder="Poster URL" value={this.state.newMovie.poster} onChange = {(event) => this.handleChangeFor(event, 'poster')}/>
                    <select onChange={(value) => this.handleChangeFor(value, 'genre_id')} name="genre" id="genre">
                        <option value="0">Choose Genre</option>
                        <option value="1">Adventure</option>
                        <option value="2">Animated</option>
                        <option value="3">Biographical</option>
                        <option value="4">Comedy</option>
                        <option value="5">Disaster</option>
                        <option value="6">Drama</option>
                        <option value="7">Epic</option>
                        <option value="8">Fantasy</option>
                        <option value="9">Musical</option>
                        <option value="10">Romantic</option>
                        <option value="11">Science Fiction</option>
                        <option value="12">Space-Opera</option>
                        <option value="13">Superhero</option>
                        <option value="14">Psychological Thriller</option>
                        <option value="15">Spy</option>
                     </select>
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
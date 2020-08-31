import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import swal from '@sweetalert/with-react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

class AddMovie extends Component{
    // intitial states are empty/ 0 used for input validation
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: 0,
        }
    }

    // allows various keys of the newMovie object to be changed with one function
    handleChangeFor = (event, propertyToChange) => {
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                [propertyToChange]: event.target.value, 
            }
        })
        console.log(this.state.newMovie.genre_id);
    }

    // valides input, then adds the newMovie to redux state, also clears the inputs and sets back to intial state
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
            this.props.history.push('/')
        }
    }

    // cancels the add movie process, sets initial state, and routes back to home
    cancelMovie = () => {
        this.setState({
            newMovie: {
                title: '',
                poster: '',
                description: '',
                genre_id: 0,    
            }
        })
        this.props.history.push('/')
    }

    // Inputs for title, description, poster url, and genre
    render() {
        return(
            <div>
                <div className="add">
                    <TextField id="standard-basic" label="Title" value={this.state.newMovie.title} onChange = {(event) => this.handleChangeFor(event, 'title')}/>
                    <TextField id="standard-basic" label="Description" value={this.state.newMovie.description} onChange = {(event) => this.handleChangeFor(event, 'description')}/>
                    <TextField id="standard-basic" label="Poster URL" value={this.state.newMovie.poster} onChange = {(event) => this.handleChangeFor(event, 'poster')}/>
                        <Select id="genre" value={this.state.newMovie.genre_id} onChange={(value) => this.handleChangeFor(value, 'genre_id')}>
                            <MenuItem value={0}>Choose Genre</MenuItem>
                            <MenuItem value={1}>Adventure</MenuItem>
                            <MenuItem value={2}>Animated</MenuItem>
                            <MenuItem value={3}>Biographical</MenuItem>
                            <MenuItem value={4}>Comedy</MenuItem>
                            <MenuItem value={5}>Disaster</MenuItem>
                            <MenuItem value={6}>Drama</MenuItem>
                            <MenuItem value={7}>Epic</MenuItem>
                            <MenuItem value={8}>Fantasy</MenuItem>
                            <MenuItem value={9}>Musical</MenuItem>
                            <MenuItem value={10}>Romantic</MenuItem>
                            <MenuItem value={11}>Science Fiction</MenuItem>
                            <MenuItem value={12}>Space-Opera</MenuItem>
                            <MenuItem value={13}>Superhero</MenuItem>
                            <MenuItem value={14}>Psychological Thriller</MenuItem>
                            <MenuItem value={15}>Spy</MenuItem>
                        </Select>
                    <Button variant="contained" size="small" color="secondary" onClick= {() => this.cancelMovie()}>Cancel</Button>
                    <Button variant="contained" size="small" color="primary" onClick={ () => this.addMovie()}>Save Movie</Button>
                </div>
                {/* shows the user the new movie info as they are entering it */}
                <div className="detail2">
                    <h2>{this.state.newMovie.title}</h2>
                    <img src={this.state.newMovie.poster} alt={this.state.newMovie.title} />
                    <p>{this.state.newMovie.description}</p>
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

export default connect(putReduxDataProps)(withRouter(AddMovie));
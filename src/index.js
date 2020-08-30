import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import {takeEvery, put } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_GENRES', getGenres);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Stores which movie is clicked for details view
const detailsReducer = (state = {}, action) => {
    if (action.type === 'WHICH_MOVIE') {
        return action.payload
    }
    return state;
}

// Stores the newly added movie
const movieReducer = (state = {}, action ) => {
    if (action.type === 'ADD_MOVIE') {
        return action.payload
    }
    return state;
}

// GET request to give movies to reducer
function* getMovies() {
    try {
        let response = yield axios.get('/api/movie')
        console.log('Movies:', response.data);
        yield put({type:'SET_MOVIES', payload: response.data});
    } catch (error) {
        console.log('error in getMovies', error)
    }
}

// GET request to give genres to reducer
function* getGenres() {
    try {
        let response = yield axios.get('/api/genre')
        console.log('Genres:', response.data);
        yield put({type:'SET_GENRES', payload: response.data});
    } catch (error) {
        console.log('error in getGenres', error)
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        detailsReducer,
        movieReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();

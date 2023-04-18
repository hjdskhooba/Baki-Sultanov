import { combineReducers } from 'redux';
import {projects} from './projects';
import popup from './popup';

const rootReducer = (initialState) => combineReducers({
    projects,
    popup,
})

export default rootReducer

import { combineReducers } from 'redux';
import {projects} from './projects';
import popup from './popup';
import menu from './menu';

const rootReducer = (initialState) => combineReducers({
    projects,
    popup,
    menu,
})

export default rootReducer

import {combineReducers} from 'redux';
import GraphReducer from './grData';

const allReducers = combineReducers ({
    graphs: GraphReducer
});

export default allReducers

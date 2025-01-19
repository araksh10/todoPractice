import todoFilterReducer from './todoFilters/todoFilterReducer';
import todoSectionReducer from './todoSection/todoSectionReducer'; 
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoS: todoSectionReducer,
    todoF: todoFilterReducer
});

export default rootReducer;
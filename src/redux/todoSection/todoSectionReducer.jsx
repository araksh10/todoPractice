import todoSectionInitialState from "./todoSectionInitialState";
import { TODOADD, TODOALLCOMPLETE, TODOCLEARCOMPLETE, TODOCOLORSELECT, TODODELETE, TODOTOGGLE } from "./todoActionTypes";

const nextTodoId = (todoS) => {
    const maxId = todoS.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

const todoSectionReducer = (state = todoSectionInitialState, action) => {
    switch (action.type) {
        case TODOADD:
            return [
                ...state,
                {
                    id: nextTodoId(state), 
                }
            ]
        
        case TODOTOGGLE:
            return state.map(todo => {
                if(todo.id !== action.payload) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })

        case TODOCOLORSELECT:
            const {todoId, todoColor} = action.payload;
            
            return state.map(todo => {
                if(todo.id !== todoId) {
                    return todo;
                }

                return {
                    ...todo,
                    color: todoColor
                }
            })
        
        case TODODELETE:
            return state.filter(todo => todo.id !== action.payload);

        case TODOALLCOMPLETE:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true,
                }
            })


        case TODOCLEARCOMPLETE:
            return state.filter(todo => !todo.completed);

            
        default:
            return state;
    }
}

export default todoSectionReducer;
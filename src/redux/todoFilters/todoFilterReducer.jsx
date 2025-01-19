import { TODOCOLORCHANGE, TODOSTATUSCHANGE } from './todoFilterActionTypes';
import todoFilterInitialState from './todoFilterInitialState'

const todoFilterReducer = (state = todoFilterInitialState, action) => {
    switch (action.type) {
        case TODOSTATUSCHANGE:
            return {
                ...state,
                status: action.payload
            }

            case TODOCOLORCHANGE:
                const { todoColor, todoChangeType } = action.payload;

                switch (todoChangeType) {
                    case 'added':
                        return {
                            ...state,
                            colors: [
                                ...state.colors,
                                todoColor
                            ]
                        }

                    case 'removed':
                        return {
                            ...state,
                            colors: state.colors.filter(existingColor => existingColor !== todoColor)
                        }

                    default:
                        return state;
                }

        default:
            return state;
    }
};

export default todoFilterReducer;
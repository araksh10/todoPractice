import { TODOADD, TODOTOGGLE, TODOCOLORSELECT, TODODELETE, TODOALLCOMPLETE, TODOCLEARCOMPLETE } from "./todoActionTypes"

export const todoAdd = (todoMessage) => {
    return {
        type: TODOADD,
        payload: todoMessage,
    }
}

export const todoToggle = (todoId) => {
    return {
        type: TODOTOGGLE,
        payload: todoId,
    }
}

export const todoColorSelect = (todoId, todoColor) => {
    return {
        type: TODOCOLORSELECT,
        payload: {
            todoId,
            todoColor
        }
    }
}

export const todoDelete = (todoId) => {
    return {
        type: TODODELETE,
        payload: todoId,
    }
}

export const todoAllComplete = () => {
    return {
        type: TODOALLCOMPLETE
    }
}

export const todoClearComplete = () => {
    return {
        type: TODOCLEARCOMPLETE
    }
}
import { type } from "@testing-library/user-event/dist/type"
import { TODOCOLORCHANGE, TODOSTATUSCHANGE } from "./todoFilterActionTypes"

export const todoColorChange = (todoColor, todoChangeType) => {
    return {
        type: TODOCOLORCHANGE,
        payload: {
            todoColor,
            todoChangeType
        }
    }
}

export const todoStatusChange = (todoStatus) => {
    return {
        type: TODOSTATUSCHANGE,
        payload: todoStatus
    }
}
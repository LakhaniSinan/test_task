import { LOGOUT_EMPTY, LOGOUT_FULFILLED, LOGOUT_PENDING, LOGOUT_REJECTED } from "./action_types"
import initialState from "../../initialState"
export default (state = initialState.user, action) => {
    console.log("ACTIONNNNNNN");
    switch (action.type) {
        case LOGOUT_FULFILLED:
            console.log("LOGIN_FULFILLED")
            return {
                in_progess: false,
                data: null,
                error: null,
            }
        case LOGOUT_PENDING:
            console.log("LOGIN_PENDING")
            return {
                in_progess: true,
                data: null,
                error: null,
            }
        case LOGOUT_REJECTED:
            console.log("LOGIN_REJECTED")
            return {
                in_progess: false,
                data: null,
                error: null,
            }
        case LOGOUT_EMPTY:
            console.log("LOGIN_EMPTY")
            return {
                in_progess: false,
                data: null,
                error: null,
            }
        default:
            return state
    }
}
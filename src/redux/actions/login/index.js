import { LOGIN ,LOGOUT} from "../../reducers/login/action_types"
import { login } from "../../../api/authentication"

export const user_login = (params) => ({
    type: LOGIN,
    payload: login(params)
})

export const user_logout = () => ({
    type: LOGOUT,
    payload: null
})

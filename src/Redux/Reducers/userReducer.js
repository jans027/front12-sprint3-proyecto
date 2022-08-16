import { userTypes } from "../Types/userTypes";




export const userReducer = ( state = {}, action) => {
    switch (action.type) {
        case userTypes.login:
            return state;
        case userTypes.register:
            return state;

        default:
            return state;
    }
}


















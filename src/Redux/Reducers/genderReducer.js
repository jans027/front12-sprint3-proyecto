import { genderTypes } from "../Types/datosTypes";




export const genderReducer = ( state = {}, action) => {
    switch (action.type) {
        case genderTypes.add:
            return action.payload;


        default:
            return state;
    }
}
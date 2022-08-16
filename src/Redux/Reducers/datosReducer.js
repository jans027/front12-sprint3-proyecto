
import { datosTypes } from "../Types/datosTypes";




export const datosReducer = ( state = {}, action) => {
    switch (action.type) {
        case datosTypes.add:
            return action.payload;


        default:
            return state;
    }
}
import { ageTypes } from "../Types/datosTypes";






export const ageReducer = ( state = {}, action) => {
    switch (action.type) {


        case ageTypes.add:
            return action.payload;

        default:
            return state;
    }
}
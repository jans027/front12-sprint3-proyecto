import { weightTypes } from "../Types/datosTypes";










export const weightReducer = ( state = {}, action) => {
    switch (action.type) {


        case weightTypes.add:
            return action.payload;

        default:
            return state;
    }
}
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { ageReducer } from "../Reducers/ageReducer";
import { datosReducer } from "../Reducers/datosReducer";
import { genderReducer } from "../Reducers/genderReducer";
import { userReducer } from "../Reducers/userReducer";
import { weightReducer } from "../Reducers/weightReducer";




const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const  reducers = combineReducers({
    login: userReducer,
    height: datosReducer,
    Weight: weightReducer,
    age:  ageReducer,
    gender:  genderReducer
})


export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)  // applyMiddleware: gestiona las peticiones 
                                // thunk: hace la espera de las peticiones 
    )
)











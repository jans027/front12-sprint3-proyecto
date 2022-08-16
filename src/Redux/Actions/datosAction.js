import { addDoc, collection } from "firebase/firestore"
import { database } from "../../firebase"
import { ageTypes, datosTypes, genderTypes, weightTypes } from "../Types/datosTypes";






//  add Height
export const addHeight = ( data ) =>{
    
    return(dispatch) => {
        addDoc(collection(database, 'height'), data)
        // console.log( data )
        .then(() => {
            dispatch(addHeightSync(data))
            // console.log( data )
        })
    }
}

const addHeightSync = (data) => ({
    type: datosTypes.add,
    payload: data
})



//  add Weight
export const addWeight = ( weight ) =>{
    
    return(dispatch) => {
        addDoc(collection(database, 'Weight'), weight)
        // console.log( data )
        .then(() => {
            dispatch(addWeightSync(weight))
            // console.log( data )
        })
    }
}

const addWeightSync = (weight) => ({
    type: weightTypes.add,
    payload: weight
})


//  add Age
export const addAge = ( age ) =>{
    
    return(dispatch) => {
        addDoc(collection(database, 'age'), age)
        // console.log( data )
        .then(() => {
            dispatch(addAgeSync(age))
            // console.log( data )
        })
    }
}

const addAgeSync = (age) => ({
    type: ageTypes.add,
    payload: age
})


//  add Gender
export const addGender = ( gender ) =>{
    
    return(dispatch) => {
        addDoc(collection(database, 'gender'), gender)
        // console.log( data )
        .then(() => {
            dispatch(addGenderSync(gender))
            // console.log( data )
        })
    }
}

const addGenderSync = (gender) => ({
    type: genderTypes.add,
    payload: gender
})








import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { google } from "../../firebase";
import { userTypes } from "../Types/userTypes"
// import { getDatabase, ref, set } from "firebase/database";




export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => dispatch(loginProvider(user.displayName, user.email, user.photoURL, user.uid)))

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
}

const loginProvider = (displayName, email, photoURL, uid) => {
    // console.log(email)
    return {
        type: userTypes.login,
        payload: {
            displayName,
            email,
            photoURL, 
            uid
        }
    }
}


// Registro de usuario con email y contraseña
export const registerWithEmail = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async () => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(registerSync({ email, password, name }))
            })
    }
}

const registerSync = (user) => {
    return {
        type: userTypes.register,
        payload: user
    }
}

// Inicio de sesion con email
export const LoginWithEmail = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user: { displayName, email, uid } }) => dispatch(loginSync({ displayName, email, uid })))
            .catch(() => console.log("Usuario o contraseña invalida"))
    }
}

const loginSync = (user) => ({
    type: userTypes.login,
    payload: user
})



















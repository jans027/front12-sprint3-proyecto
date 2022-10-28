import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer } from '../styles/PagIntro'
import portada from '../images/portada.png'
import { DivPortada } from "../styles/Styles1";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import { registerWithEmail } from "../Redux/Actions/userAction";
import logogoogle from '../images/google.png'
import logofb from '../images/facebook.png'
import logo from '../images/Logo.png'
import { loginGoogle, LoginWithEmail } from "../Redux/Actions/userAction";
import { UseAuth } from "../context/AuthContext";



// sweet alert..................................................
import { DivLogos, Seccion1 } from "../styles/Styles1";
import Swal from 'sweetalert2'
import { Axios } from "axios";




export function SingUp() {
  // const { signup } = UseAuth();


  const [user, setUser] = useState({
    email: "",
    displayName: "",
    phoneNumber: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const MySwal = withReactContent(Swal)
  const { login, resetPassword, singInWithFacebook } = UseAuth();




  // Sweat alert........................................................
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (user.email === "" || user.displayName === "" || user.phoneNumber === "" || user.password === "") {
      // console.log('eooooooooooooo', user)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los Campos son Obligatorios!',
      })
    } else {
      Swal.fire({
        title: 'Good job!',
        text: 'Usuario Guardado Correctamente!',
        icon: 'success',

      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(registerWithEmail(user.email, user.password, user.displayName, user.phoneNumber))
          // alert('ok')
          navigate("/Login");// cambiar ruta...................................
        }
      })
    }
    e.target.reset();//metodo que resetea campos ................................
  };
  // console.log(user);


  // Upload Image Cloudinary....................................

  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "prueba1")

    Axios.post("https://api.cloudinary.com/v1_1/daqsl5kfv/upload",
      formData
    ).then((response) => {
      console.log(response)
    })
  };


  const handleGoogleSignin = () => {
    dispatch(loginGoogle())
    navigate("/Height");

  };

  const handleFacebookSignin = async () => {
    try {
      await singInWithFacebook();
      navigate("/Height");
    } catch (error) {
      setError(error.message);
    }
  };




  return (
    <Seccion1>
      <NavBar />

      <DivPortada>
        <img src={logo} alt="logo" />
      </DivPortada>


      <TextIntro>
        <div className="col-12">
          <h2>Sing Up</h2>
        </div>
      </TextIntro>



      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <Singupfrm>

              <Form onSubmit={handleSubmit}>

                <InputContainer className="mb-2 mt-3">
                  <Input1 type="email" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="email" />
                </InputContainer>

                <InputContainer className="mb-3 mt-3">
                  <Input1 type="text" name="name" onChange={(e) => setUser({ ...user, displayName: e.target.value })} placeholder="username" />
                </InputContainer>

                <InputContainer className="mb-3 mt-3">
                  <Input1 type="text" name="phone" onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} placeholder="phone" />
                </InputContainer>

                <InputContainer className="mb-2">
                  <Input1 type="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password" />
                </InputContainer>

                {/* <InputContainer
                  onChange={(event) => setImageSelected(event.target.files[0])}
                  className="mb-2">
                  <Input1 type="file" name="file" />
                  <button onClick={uploadImage} >Upload</button>
                </InputContainer> */}

                <div className="col-12">
                  <div className="row">
                    <div className="container d-flex" Style="justify-content:center;">
                      <ButtonIntro1>
                        Register
                      </ButtonIntro1>
                    </div>
                  </div>
                </div>

              </Form>
            </Singupfrm>
          </div>
        </div>
      </div>
      <h5>OR Sing In with</h5>
      <DivLogos>
        

        <div>
          <button onClick={handleFacebookSignin}>
            <img Style="height:50px;" src={logofb} alt="facebook" />
          </button>
        </div>

        <div>
          <button onClick={handleGoogleSignin}>
            <img Style="height:60px; width:60px;" src={logogoogle} alt="google" />
          </button>
        </div>

      </DivLogos>


      <div className="col-12">
        <div className="row">
          <div className="col-12" Style="margin-top:20px; font-weight:400; font-size:14px; text-align:center">
            Already have an Account?
            <Link to="/login" Style="color:#2BE7E8; margin-left:20px;">
              Login
            </Link>
          </div>
        </div>
      </div>


    </Seccion1>
  );
}


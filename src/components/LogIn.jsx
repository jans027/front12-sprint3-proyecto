
import "../Global.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextIntro, Singupfrm, Form, Input1, InputContainer, ButtonIntro1, } from '../styles/PagIntro'
import logogoogle from '../images/google.png'
import logofb from '../images/facebook.png'
import logo from '../images/Logo.png'
// import Image from '../styles/PagIntro'
import { DivLogos, DivPortada, Seccion1 } from "../styles/Styles1";
// import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import { loginGoogle, LoginWithEmail } from "../Redux/Actions/userAction";
import { UseAuth } from "../context/AuthContext";
import NavBar from "./NavBar";
// sweet alert..................................................
import Swal from 'sweetalert2'






export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const { login, resetPassword, singInWithFacebook } = UseAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();




  const dispatch = useDispatch()



  // Sweat alert........................................................
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los Campos son Obligatorios!',
      })
    } else {
      Swal.fire({
        title: 'Good job!',
        text: 'Gracias por Regresar!',
        icon: 'success',

      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(LoginWithEmail(user.email, user.password));
          // alert('ok')
          navigate("/Height");// cambiar ruta...................................
        }
      })
    }
    e.target.reset();//metodo que resetea campos ................................
  }





  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });



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

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
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
        <div>
          <h2>Welcome back</h2>
        </div>
        <div>
          <h5>Sing in to an existing account using your Email</h5>
        </div>
      </TextIntro>


      <Singupfrm>
        <Form onSubmit={handleSubmit}>

          <InputContainer >
            <Input1 type="email" name="email" onChange={handleChange} placeholder="email" />
          </InputContainer>

          <InputContainer>
            <Input1 type="password" name="password" onChange={handleChange}
              placeholder="password" />
          </InputContainer>

          <div>
            <ButtonIntro1 type="submit" >
              Sign In
            </ButtonIntro1>
          </div>

        </Form>
      </Singupfrm>



      <div className="col-12  mt-2">
        <div className="container" Style="text-align:center">
          <a href="#!" Style="font-weight:400; font-size:12px;" onClick={handleResetPassword}>
            Forgot Password?
          </a>
        </div>
      </div>

      <div className="col-12">
        <div className="container" Style="text-align:center; margin-top:50px; font-size:20px">
          <h1>Sing In With</h1>
        </div>
      </div>

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
        <div className="container" Style="margin-top:40px; font-weight:400; font-size:14px; text-align:center;">
          Dont have account?
          <Link to="/singup" Style="color:#2BE7E8; margin-left:10px;">
            Sing up
          </Link>
        </div>
      </div>

    </Seccion1>
  );
}
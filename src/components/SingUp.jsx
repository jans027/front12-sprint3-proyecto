import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer } from '../styles/PagIntro'
import portada from '../images/portada.png'
import { DivPortada } from "../styles/Styles1";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import { registerWithEmail } from "../Redux/Actions/userAction";




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



  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerWithEmail(user.email, user.password, user.displayName, user.phoneNumber))
    setError("");
    navigate("/Login");
  };
  // console.log(user);



  return (
    <section>
      <NavBar />
      <div className="col-12">
        <div className="row">
          <div className="container">

            {error && <Alert message={error} />}
            <div className="container" Style="text-align:center; margin-top:-200px">
              <DivPortada className="col-12" Style="text-align:center;">
                <img Style="height:450px; width:450px;" src={portada} alt="" />
              </DivPortada>
            </div>
            <div className="col-12">
              <div className="container" Style="text-align:center">
                <TextIntro>
                  <div className="col-12">
                    <h2>Create New Account</h2>
                  </div>
                  <div className="col-12">
                    <h5>Create a new account by filling in all the
                      fields or log in to an existing account</h5>
                  </div>
                </TextIntro>
              </div>
            </div>


            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <Singupfrm>

                    <Form onSubmit={handleSubmit}>

                      <InputContainer className="mb-2 mt-3">
                        <Label htmlFor="email">Email</Label>
                        <Input1 type="email" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="youremail@gmail.com" />
                      </InputContainer>
                      <InputContainer className="mb-3 mt-3">
                        <Label htmlFor="name">Name</Label>
                        <Input1 type="text" name="name" onChange={(e) => setUser({ ...user, displayName: e.target.value })} placeholder="username" />
                      </InputContainer>
                      <InputContainer className="mb-3 mt-3">
                        <Label htmlFor="phone">Phone</Label>
                        <Input1 type="text" name="phone" onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} placeholder="###" />
                      </InputContainer>
                      <InputContainer className="mb-2">
                        <Label htmlFor="password">Password</Label>
                        <Input1 type="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })}
                          placeholder="*************" />
                      </InputContainer>

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

          </div>
        </div>
      </div>
    </section>
  );
}


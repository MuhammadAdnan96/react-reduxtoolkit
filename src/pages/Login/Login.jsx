import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../Container/InputContainer";
import axiosCall from "../../api/AxiosCall";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../app/features/todo/todoSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.tokenReducer.userToken);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const LoginHandler = async () => {
    const tokenData = await axiosCall(userName, password, setError);
    dispatch(login(tokenData));

    if (token) {
      navigate("/products");
    }
  };
  return (
    <div className="body">
      <Container
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        LoginHandler={LoginHandler}
      />
    </div>
  );
};
export default Login;

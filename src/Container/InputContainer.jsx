import React from "react";
import InputField from "../components/InputField/InputField";
import Button from "../components/Button/Button";
import "../App.css";
import "./InputContainer.css";
const Container = ({
  userName,
  setUserName,
  password,
  setPassword,
  LoginHandler,
}) => {
  return (
    <div className="container">
      <h2>Let's Login To Your Account First!</h2>

      <InputField
        type="text"
        value={userName}
        placeholder="Username"
        label="Username: "
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />

      <InputField
        type="password"
        value={password}
        placeholder="Password"
        label="Password:  "
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button className="login-btn" onClick={LoginHandler}>
        Login
      </Button>
    </div>
  );
};

export default Container;

import { useState } from "react";

import "./login.scss";
import { TextInput } from "../inputs/text-input/TextInput";
import { SubmitBtn } from "../buttons/submit-btn/SubmitBtn";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <header>
        <h1>Log in</h1>
        <p>
          By continuing, you agree are setting up a Reddit account and agree to
          our User Agreement and Privacy Policy.{" "}
        </p>
      </header>
      <main>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="google-button">google-button</div>
          <div className="login__div">
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
          <div className="login__inputs">
            <TextInput
              label="Username"
              value={username}
              setValue={setUsername}
            ></TextInput>
            <TextInput
              label="Password"
              value={password}
              setValue={setPassword}
              type={"password"}
            ></TextInput>
          </div>
          <SubmitBtn text="Log in"></SubmitBtn>
          <div className="login__change">New to Reddit? Sign Up </div>
        </form>
      </main>
    </div>
  );
};

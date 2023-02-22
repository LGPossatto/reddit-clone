import { useState } from "react";

import "./signup.scss";
import { InicialPage } from "./signup-pages/inicial-page/InicialPage";
import { ComfirmPage } from "./signup-pages/comfirm-page/ComfirmPage copy";

export const Signup = () => {
  const [progressStep, setProgressStep] = useState(0);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getInputs = (step: number) => {
    switch (step) {
      case 0:
        return (
          <InicialPage
            email={email}
            setEmail={setEmail}
            setProgressStep={setProgressStep}
          ></InicialPage>
        );
      case 1:
        return (
          <ComfirmPage
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            setProgressStep={setProgressStep}
          ></ComfirmPage>
        );
      default:
        return (
          <>
            <h3>Sorry, somenthing went wrong. Reload the page.</h3>
          </>
        );
    }
  };

  return <div className="signup">{getInputs(progressStep)}</div>;
};

import "./inicialPage.scss";
import { SubmitBtn } from "../../../buttons/submit-btn/SubmitBtn";
import { TextInput } from "../../../inputs/text-input/TextInput";

interface props {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setProgressStep: React.Dispatch<React.SetStateAction<number>>;
}

export const InicialPage = ({ email, setEmail, setProgressStep }: props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProgressStep(1);
  };

  return (
    <div className="inicial-page">
      <header>
        <h1>Sign Up</h1>
        <p>
          By continuing, you agree are setting up a Reddit account and agree to
          our User Agreement and Privacy Policy.
        </p>
      </header>
      <main>
        <form className="inicial-page__form" onSubmit={handleSubmit}>
          <div className="google-button">google-button</div>
          <div className="inicial-page__div">
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
          <div className="inicial-page__inputs">
            <TextInput
              label="Email"
              value={email}
              setValue={setEmail}
            ></TextInput>
          </div>
          <SubmitBtn text="Continue"></SubmitBtn>
          <div className="inicial-page__change">New to Reddit? Sign Up </div>
        </form>
      </main>
    </div>
  );
};

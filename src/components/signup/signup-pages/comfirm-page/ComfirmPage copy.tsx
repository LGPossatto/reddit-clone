import "./comfirmPage.scss";
import { SubmitBtn } from "../../../buttons/submit-btn/SubmitBtn";
import { TextInput } from "../../../inputs/text-input/TextInput";

interface props {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setProgressStep: React.Dispatch<React.SetStateAction<number>>;
}

export const ComfirmPage = ({
  username,
  setUsername,
  password,
  setPassword,
  setProgressStep,
}: props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProgressStep(2);
  };

  return (
    <div className="comfirm-page">
      <header>
        <h1>Create your username and password</h1>
        <p>
          {
            "Reddit is anonymous, so your username is what you'll go by here. Choose wisely—because once you get a name, you can't change it."
          }
        </p>
      </header>
      <main>
        <form className="comfirm-page__form" onSubmit={handleSubmit}>
          <div className="comfirm-page__inputs">
            <TextInput
              label="Username"
              value={username}
              setValue={setUsername}
            ></TextInput>
            <TextInput
              label="Password"
              value={password}
              setValue={setPassword}
            ></TextInput>
          </div>
          <SubmitBtn text="Continue"></SubmitBtn>
        </form>
      </main>
    </div>
  );
};

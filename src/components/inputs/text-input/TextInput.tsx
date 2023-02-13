import "./textInput.scss";

interface props {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  errorMessage?: string | null;
  hideLabel?: boolean;
  type?: "text" | "password" | "email";
}

export const TextInput = ({
  label,
  value,
  setValue,
  errorMessage = null,
  placeholder = "",
  hideLabel = false,
  type = "text",
}: props) => {
  return (
    <div className={`text-input ${errorMessage ? "error-active" : ""}`}>
      <label
        style={{ display: `${hideLabel ? "none" : "block"}` }}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        id={label}
      />
      {errorMessage && <span className="error">{errorMessage}</span>}
    </div>
  );
};

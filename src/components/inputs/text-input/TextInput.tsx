import "./textInput.scss";

interface props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

export const TextInput = ({ value, setValue, placeholder = "" }: props) => {
  return (
    <input
      className="text-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

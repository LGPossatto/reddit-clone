import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./searchBar.scss";
import { useState } from "react";

export const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const [inputActive, setInputActive] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`You searched "${inputText}"`);
  };

  return (
    <div
      className={`search-bar ${inputActive ? "search-bar-active" : ""}`}
      onClick={() => setInputActive(true)}
    >
      <form action="" className="search-bar__form" onSubmit={handleSubmit}>
        <label htmlFor="searchBar" className="search-bar__label">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </label>
        <input
          type="text"
          id="searchBar"
          className="search-bar__input"
          placeholder="Search Reddit"
          value={inputText}
          onChange={handleInput}
          onBlur={() => setInputActive(false)}
        />
      </form>
    </div>
  );
};

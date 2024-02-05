import { useState } from "react";

export const Textbox = () => {
  // Call the state here
  const [text, setText] = useState("");
  const [lText, setLText] = useState("");

  //   async fun 1

  const handleOnClickUpper = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  };

  const handleOnClickLower = () => {
    const upperCaseText = text.toLowerCase();
    setText(upperCaseText);
  };

  const handleOnClickClear = () => {
    setText("");
  };

  //   async fun 2

  const handleOnChange = (e) => {
    const textInBox = e.target.value;
    setText(textInBox);
  };

  const findEmail = () => {
    const list = text.split(" ");

    for (let i of list) {
      const regex = i.match(/[a-zA-Z1-9]+[@]+gmail[.]com/g);

      if (regex !== null) {
        setLText(i);
        console.log(i);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="display-1 fs-2 text-primary my-4">Converter</h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          value={text}
          style={{ height: 100 }}
          onChange={handleOnChange} //most imp
        />
      </div>
      <br />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleOnClickUpper} //most imp
      >
        Convert to Upper Case
      </button>
      <button
        type="submit"
        className="btn btn-primary mx-3"
        onClick={handleOnClickLower}
      >
        Convert to lower Case
      </button>
      <button
        type="submit"
        className="btn btn-info mx-3"
        onClick={handleOnClickClear}
      >
        Clear
      </button>
      <p className="fs-6 my-4">
        Total Words : {text.split(" ").length} Total Characters : {text.length}{" "}
        <br />
        Total Time To Read : {text.split(" ").length * 0.008} minutes <br />
      </p>
      <h1 className="display-1 fs-2 text-primary my-4">Text preview</h1>
      <div className="card">
        <div className="card-header">Text Preview</div>
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary my-3"
        onClick={findEmail}
      >
        find email
      </button>
      <span className="text-primary mx-3">
        Email found : <span className="mx-3 text-secondary">{lText}</span>{" "}
        <br />
      </span>
    </div>
  );
};

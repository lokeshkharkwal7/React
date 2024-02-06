import { useState } from "react";

export const Textbox = ({ mode, alertfun }) => {
  // Call the state here
  const [text, setText] = useState("");
  const [lText, setLText] = useState("");

  //  using onState and passing object inside it

  const [bgStyle, setbgStyle] = useState({
    color: " #042743",
    backgroundColor: "white",
  });

  // using onState and passing string inside it

  const [btname, changbtName] = useState("Switch To Dark Mode");

  //   async fun 1

  const handleOnClickUpper = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    alertfun("All Cases are changed to Upper", "success");
  };

  const handleOnClickLower = () => {
    const upperCaseText = text.toLowerCase();
    setText(upperCaseText);
    alertfun("All Cases are changed to Lower", "success");
  };

  const handleOnClickClear = () => {
    setText("");
    alertfun("Text is Cleared", "success");
  };

  //   async fun 2

  const handleOnChange = (e) => {
    const textInBox = e.target.value;
    setText(textInBox);
  };

  const findEmail = () => {
    const list = text.split(" ");
    let resultArray = [];

    for (let i of list) {
      const regex = i.match(/[A-Za-z]+@+[a-z]+.com/);

      if (regex !== null) {
        resultArray.push(i);
        console.log(i);
      }
    }
    setLText(String(resultArray));

    alertfun("Email Processed", "success");
    console.log("value:", String(resultArray));
  };

  const togglemode = () => {
    if (bgStyle.color === " #042743") {
      setbgStyle({
        color: "white",
        backgroundColor: " #042743",
      });
      changbtName("Switch to Light Mode");
      alertfun("Switched to Dark Mode", "success");
    } else if (bgStyle.color === "white") {
      setbgStyle({
        color: " #042743",
        backgroundColor: "white",
      });
      changbtName("Switch to Dark Mode");
      alertfun("Switched to Light Mode", "success");
    }
  };

  // Remove Extra Spaces
  const removeSpaces = () => {
    const newText = text.split(/\s+/);
    setText(newText.join(" "));
    alertfun("Extra Spaces Removed", "success");
  };

  // Auto Capitalization after full stop and begning
  const autoCapitalization = () => {
    let list = text.split(" ");
    console.log(list);
    const newText = list.map((element) => {
      if (element === "") {
        return "";
      } else {
        return element[0].toUpperCase() + element.slice(1);
      }
    });
    setText(newText.join(" "));
    alertfun("Text Capitalized", "success");
  };

  return (
    <>
      <div
        className="container p-2 py-2 my-2"
        style={
          mode === "light"
            ? { color: " #042743", backgroundColor: "white" }
            : { color: "white", backgroundColor: " #042743" }
        }
      >
        <h1 className="display-1 fs-2 my-2 ">Converter</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            // you can add your own style using spread opertors
            // style={{ ...bgStyle, height: "100px" }}
            style={
              mode === "light"
                ? {
                    color: " #042743",
                    backgroundColor: "white",
                    height: "100px",
                  }
                : {
                    color: "black",
                    backgroundColor: " #8cb3d9",
                    height: "100px",
                  }
            }
            placeholder="Leave a comment here"
            value={text}
            // style={{ height: 100 }}
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

        {/* Callling the above made functions  */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={removeSpaces}
        >
          Remove Spaces
        </button>

        {/* Callling the above made functions  */}
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={autoCapitalization}
        >
          Auto Capitization
        </button>

        <button
          type="submit"
          className="btn btn-info mx-3"
          onClick={handleOnClickClear}
        >
          Clear
        </button>

        <p className="fs-6 my-4">
          Total Words : {text.split(" ").length - 1} Total Characters :{" "}
          {text.length} <br />
          Total Time To Read : {text.split(" ").length * 0.008} minutes <br />
        </p>
        <h1 className="display-1 fs-2  my-4">Text preview</h1>
        <div
          className="card"
          style={
            mode === "light"
              ? { color: " #042743", backgroundColor: "white" }
              : { color: "white", backgroundColor: " #042743" }
          }
        >
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
          Email found :{" "}
          <span className="mx-3 text-secondary">
            {lText === "" ? "No Email" : lText}
            {/* {lText} */}
          </span>{" "}
          <br />
        </span>
        <br />

        {/* Callling the above made functions  */}
        <button
          type="button"
          // className="btn btn-dark mb-4"
          className={`btn btn-${mode} mb-4`}
          onClick={togglemode}
        >
          {mode === "light" ? "Light Mode is On 💡" : "Dark mode is On 🌜"}
        </button>
      </div>
    </>
  );
};

import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

export default function About() {


//  using onState and passing object inside it 

  const [bgStyle, setbgStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  // using onState and passing string inside it

  const [btname, changbtName] = useState("Switch To Dark Mode");

  const togglemode = () => {
    if (bgStyle.color === "black") {
      setbgStyle({
        color: "white",
        backgroundColor: "black",
      });
      changbtName("Switch to Light Mode");
    } else if (bgStyle.color === "white") {
      setbgStyle({
        color: "black",
        backgroundColor: "white",
      });
      changbtName("Switch to Dark Mode");
    }
  };

  return (
    <>
      <div className="container">
        <h1> About Us</h1>
      </div>
      <div className="container p-1 my-4" style={bgStyle}>
        <div
          className="accordion my-5 bg-dark"
          style={bgStyle}
          id="accordionExample"
        >
          <div className="accordion-item" style={bgStyle}>
            <h2 className="accordion-header" style={bgStyle} id="headingOne">
              <button
                className="accordion-button"
                style={bgStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              style={bgStyle}
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={bgStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={bgStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={bgStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              style={bgStyle}
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={bgStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={bgStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              style={bgStyle}
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="container">
            {/* Callling the above made functions  */}
          <button type="button" className="btn btn-dark" onClick={togglemode}>
            {btname}
          </button>
        </div>
      </div>
    </>
  );
}

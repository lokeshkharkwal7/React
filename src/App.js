import { useState } from "react";
import { NavBar } from "./components/Navbar";
import About from "./components/about";
import { Textbox } from "./components/textBox";
import Alert from "./components/Alert";

// Working with the react router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const setToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is set", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is set", "success");
    }
  };
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
     <NavBar
        navName="Text Utilities"
        alertFun={showAlert}
        mode={mode}
        toggleMode={setToggleMode}
      ></NavBar>
      <Alert alertobj={alert} />
      {/* building routes  */}
      <Routes>
        <Route path = "/" element={<Textbox mode={mode} alertfun={showAlert}></Textbox>}> </Route>
        <Route path= "/about" element={<About/>}> </Route>
      </Routes>

    </>
  );
}
export default App;

// changing the mode function inside return and send as prop

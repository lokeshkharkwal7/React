<<<<<<< HEAD
import { Link } from 'react-router-dom';
export const NavBar = ({ navName, mode, toggleMode, alertFun }) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        {/* {alertFun('Mode Updated','success')} */}

        <Link className="navbar-brand   p-3" to="/">
          {navName}
        </Link>
=======
export const NavBar = ({ navName }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
        <a className="navbar-brand text-light p-3" href="/">
          {navName}
        </a>
>>>>>>> 46d75c7cc2568a82e61adefd2f1f1fa392cb5fd2
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
<<<<<<< HEAD
          <ul className="navbar-nav mr-auto  ">
            <li className="nav-item active">
              <Link className="nav-link   " to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link   " to="/about">
                About <span className="sr-only"></span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " href="/">
                {/* switch */}
                <div className="form-check form-switch mx-3">
                  <input
                    className="form-check-input"
                    onClick={toggleMode}
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    {mode === "light" ? "Light Mode On" : "Dark Mode On"}
                  </label>
                </div>
              </Link>
=======
          <ul className="navbar-nav mr-auto text-light">
            <li className="nav-item active">
              <a className="nav-link  text-light" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                
              </a>
>>>>>>> 46d75c7cc2568a82e61adefd2f1f1fa392cb5fd2
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

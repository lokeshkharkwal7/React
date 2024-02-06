import { Link } from 'react-router-dom';
export const NavBar = ({ navName, mode, toggleMode, alertFun }) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        {/* {alertFun('Mode Updated','success')} */}

        <Link className="navbar-brand   p-3" to="/">
          {navName}
        </Link>
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
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export const NavBar = ({ navName }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
        <a className="navbar-brand text-light p-3" href="/">
          {navName}
        </a>
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
          <ul className="navbar-nav mr-auto text-light">
            <li className="nav-item active">
              <a className="nav-link  text-light" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

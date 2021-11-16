const Navbar = ({ isLoggedIn, login, logout }) => {
  return(
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd"}}>
      <div className="container-fluid">
        <a className="navbar-brand">Search App</a>
        <span className="d-flex">
          { isLoggedIn ?
            <button
              className="btn btn-outline-success"
              onClick={() => logout({ returnTo: "http://localhost:3000" })}
            >Logout</button> :
            <button
              className="btn btn-outline-success"
              onClick={() => login()}
            >Login</button>
          }
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
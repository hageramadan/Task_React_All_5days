import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Nav() {
  let watchlist = useSelector((state) => state.MyWatchlist.watchlist);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link" activeClassName="active">
                Register
              </NavLink>
            </li>
              <li className="nav-item">
              <NavLink to="/watchlist" className="nav-link" activeClassName="active">
                WatchList <span className="badge bg-primary">{watchlist.length}</span>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/userApiSlice'; // adjust path if needed

function Header() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cartReducer);

  const { user } = useSelector((state) => state.authReducer);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">E-Store</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                  {cartItems.length > 0 && (
                    <span className="badge rounded-pill bg-primary ms-1">
                      {cartItems.reduce((total, item) => total + item.qty, 0)}
                    </span>
                  )}
                </Link>
              </li>

              {user ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link">{user.user.name}</span>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                 
                </>
              )}

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

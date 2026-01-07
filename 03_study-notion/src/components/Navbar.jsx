import React from "react";

import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setisLoggedIn = props.setisLoggedIn;
  return (
    <div className="flex">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex space-x-3">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/">Contect</Link>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}
      <div className="flex ml-5 gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button >Sign Up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setisLoggedIn(false);
                toast.success("Logged Out");
                
              }}
            >
              Log Out
            </button>
          </Link>
        )}

        {
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;

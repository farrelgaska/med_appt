import { Link, useNavigate } from "react-router-dom";
export default function Navbar({currentUser,onLogout}) {
 const navigate=useNavigate();
 const handleLogout=()=>{localStorage.removeItem("auth-token");localStorage.removeItem("auth-user");onLogout?.();navigate("/login");};
 return <nav className="navbar"><Link className="brand" to="/">StayHealthy</Link><div className="navlinks"><Link to="/">Home</Link><Link to="/appointments">Appointments</Link>{currentUser?<><Link to="/profile">Profile</Link><Link to="/reviews">Reviews</Link><button onClick={handleLogout}>Logout</button></>:<><Link to="/signup">Sign Up</Link><Link to="/login">Login</Link></>}</div></nav>;
}

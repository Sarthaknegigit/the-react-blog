import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to='/'><h1>BlogHub </h1></Link>
            <div className="links">
                <Link to="/">Home </Link>
                <Link to="/create">New Blog </Link>
            </div>
            <br />
        </nav>
        

     );
}
 
export default Navbar;


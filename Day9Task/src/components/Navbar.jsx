import { NavLink,Link } from "react-router-dom";
export const Navbar = () => {
    const navLinkStyles=({isActive})=>{
        return {
        textDecoration:isActive?'none':'underline',
        fontWeight:isActive?'bold':'italic',
        }

    }
  return (
    // <div className="nav">
    //   <Link to="/">Home</Link>
    //   <Link to="about">About</Link>
    // </div>
    <nav>
        
        <NavLink style={navLinkStyles}to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="about">About</NavLink>
        <NavLink style={navLinkStyles} to="/product">Product</NavLink>
           <NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
    </nav>
  );
};

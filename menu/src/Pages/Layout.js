import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">All Items</Link> 
          </li>
          <li>
            <Link to="/Desserts">Desserts</Link>
          </li>
          <li>
            <Link to="/Sandwiches">Sandwiches</Link>
          </li>
          <li>
            <Link to="/Drinks">Shakes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
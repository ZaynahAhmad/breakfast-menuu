import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const ulStyle={
  listStyleType: "none",
  
}
const liS={
  display: "inline",
  margin:"30px"
}

const Layout = () => {
 
  return (
    <>
      <nav>
        <ul style={ulStyle}>
          <li style={liS}>
            <Button color="secondary"><Link style= { {textDecoration: 'none'}}
 to="/">All Items</Link> </Button>
          </li>
          <li style={liS}>
          <Button color="secondary"><Link style= { {textDecoration: 'none'}}
to="/Desserts">Desserts</Link> </Button>
          </li>
          <li style={liS}>
          <Button color="secondary"> <Link style= { {textDecoration: 'none'}}
to="/Sandwiches">Sandwiches</Link> </Button>
          </li>
          <li style={liS}>
          <Button color="secondary"><Link style= { {textDecoration: 'none'}}
to="/Drinks">Shakes</Link> </Button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
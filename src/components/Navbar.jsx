import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "white", color: "black" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Shop</Link>
        </Typography>
        <Button color="inherit">
          <Link to="/shop">Shop</Link>
        </Button>
        <Button color="inherit">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

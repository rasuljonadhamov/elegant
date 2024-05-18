import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Search, AccountCircle, ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Logo = styled("div")({
  fontSize: "1.5rem",
  fontWeight: "bold",
  flexGrow: 1,
});

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const products = useSelector((state) => state.cart.cartItems);
  console.log("added products " + products.length);

  return (
    <AppBar position="static" color="default" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Logo>3legant.</Logo>
        {isMobile ? (
          <Menu
            sx={{ flexGrow: 1 }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <NavLink exact to="/">
                Home
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to="/shop">
                Shop
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to="/product">
                Product
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to="/contact">
                Contact Us
              </NavLink>
            </MenuItem>
          </Menu>
        ) : (
          <div style={{ flexGrow: 1, margin: " 10px" }}>
            <NavLink style={{ marginRight: "15px" }} exact to="/">
              Home
            </NavLink>
            <NavLink style={{ marginRight: "15px" }} exact to="/shop">
              Shop
            </NavLink>
            <NavLink style={{ marginRight: "15px" }} exact to="/product">
              Product
            </NavLink>
            <NavLink style={{ marginRight: "0px" }} exact to="/contact">
              Contact Us
            </NavLink>
          </div>
        )}
        <IconButton color="inherit">
          <Search />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <IconButton color="inherit">
          <Badge
            badgeContent={Number(products.length) === 0 ? 0 : products.length}
            color="secondary"
          >
            <Link to={"/product"}>
              <ShoppingCart />
            </Link>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

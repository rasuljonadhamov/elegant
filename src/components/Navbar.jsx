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
import { NavLink } from "react-router-dom";

const Logo = styled("div")({
  fontSize: "1.5rem",
  fontWeight: "bold",
  flexGrow: 1,
});

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
              <NavLink exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to="/shop" activeClassName="active-link">
                Shop
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to="/product" activeClassName="active-link">
                Product
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to="/contact" activeClassName="active-link">
                Contact Us
              </NavLink>
            </MenuItem>
          </Menu>
        ) : (
          <div style={{ flexGrow: 1, margin: " 10px" }}>
            <NavLink
              style={{ marginRight: "15px" }}
              exact
              to="/"
              activeClassName="active-link"
            >
              Home
            </NavLink>
            <NavLink
              style={{ marginRight: "15px" }}
              exact
              to="/shop"
              activeClassName="active-link"
            >
              Shop
            </NavLink>
            <NavLink
              style={{ marginRight: "15px" }}
              exact
              to="/product"
              activeClassName="active-link"
            >
              Product
            </NavLink>
            <NavLink
              style={{ marginRight: "0px" }}
              exact
              to="/contact"
              activeClassName="active-link"
            >
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
          <Badge badgeContent={2} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

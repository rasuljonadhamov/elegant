import { AppBar, Toolbar, IconButton, Badge } from "@mui/material";
import { Search, AccountCircle, ShoppingCart } from "@mui/icons-material";
import { Menu } from "antd";
// import "antd/dist/antd.css";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
// import Link from "antd/es/typography/Link";

const Logo = styled("div")({
  fontSize: "1.5rem",
  fontWeight: "bold",
  flexGrow: 1,
});

const Header = () => {
  return (
    <AppBar position="static" color="default" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Logo>3legant.</Logo>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ flexGrow: 1 }}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/shop">Shop</Link>
          </Menu.Item>
          <Menu.Item key="3">Product</Menu.Item>
          <Menu.Item key="4">
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
        </Menu>
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

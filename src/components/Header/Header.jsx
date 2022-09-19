import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";

export default function Header() {
  const navigate = useNavigate();
  const { currentUser, logOut, isAdmin } = React.useContext(authContext);
  React.useEffect(() => {
    logOut();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem
        onClick={handleProfileMenuOpen}
        style={{ display: "flex", flexDirection: "column" }}>
        <p onClick={() => navigate("/list")}>Courses</p>
        <p onClick={() => navigate("/favs")}>Favourites</p>
        <p onClick={() => navigate("/cart")}>Cart</p>

        <p onClick={() => navigate("/login")}>Login</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        top="0"
        style={{
          backgroundColor: "rgba(243, 239, 254)",
          color: "black",
        }}>
        <Toolbar>
          <img
            style={{
              borderRadius: "50px",
              height: "40px",
              width: "40px",
              marginRight: "8px",
            }}
            src="https://www.creativefabrica.com/wp-content/uploads/2021/01/23/Letter-S-SS-Logo-Design-Simple-Vector-Graphics-8004353-1-312x208.jpg"
          />
          <Typography
            style={{ fontWeight: "200px", cursor: "pointer" }}
            onClick={() => navigate("/")}>
            SYNCHRO
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              to="/list"
              style={{ color: "black", margin: "10px 5px 0 5px" }}>
              Courses
            </Link>
            <Typography style={{ margin: "10px 5px 0 5px" }}>|</Typography>
            <Link
              to="/favs"
              style={{ color: "black", margin: "10px 5px 0 5px" }}>
              Favourites
            </Link>
            <Typography style={{ margin: "10px 5px 0 5px" }}>|</Typography>
            <Link
              to="/cart"
              style={{ color: "black", margin: "10px 5px 0 5px" }}>
              Cart
            </Link>
            <Typography style={{ margin: "10px 5px 0 5px" }}>|</Typography>

            <Link
              to="/login"
              style={{
                color: "black",
                margin: "10px 5px 0 5px",
                display: currentUser ? "none" : "block",
              }}>
              {" "}
              Log In
            </Link>
            <IconButton
              onClick={() => (logOut(), navigate("/"))}
              style={{
                display: currentUser || isAdmin ? "block" : "none",
                height: "20px",
              }}>
              <ExitToAppOutlinedIcon style={{ marginBottom: "10px" }} />
            </IconButton>
            {/* {currentUser ? (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit">
                <AccountCircle />
              </IconButton>
            ) : null} */}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{ color: "black" }}>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

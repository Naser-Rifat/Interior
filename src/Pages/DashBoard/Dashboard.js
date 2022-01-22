import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

const drawerWidth = 240;

function Dashboard(props) {
  const { logout, user } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="bg-gray-900 h-full">
      <Toolbar />
      <Divider />

      <Box sx={{ textAlign: "left", m: 2 }}>
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          {" "}
          {/* <SvgIcon className="ms-1">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>{" "} */}
          <Button
            style={{
              color: "white",
              //   marginLeft: "0px",
              //   paddingLeft: "0px",
              //   marginTop: "8px",
            }}
          >
            Home
          </Button>
        </NavLink>
        <br />
        <NavLink to={`${""}`} style={{ textDecoration: "none" }}>
          {" "}
          <Button style={{ color: "white" }}>Dashboard</Button>
        </NavLink>{" "}
        <br />
        <NavLink to={`${""}/myorders`} style={{ textDecoration: "none" }}>
          {" "}
          <Button style={{ color: "white" }}>My Orders</Button>
        </NavLink>{" "}
        <br />
        <NavLink to={`${""}/payment`} style={{ textDecoration: "none" }}>
          {" "}
          <Button style={{ color: "white" }}>Payment</Button>
        </NavLink>{" "}
        <br />
        <NavLink to={`${""}/reviews`} style={{ textDecoration: "none" }}>
          {" "}
          <Button style={{ color: "white" }}>Review</Button>
        </NavLink>{" "}
        <br />
        <Box>
          <NavLink
            to={`${""}/manageallorders`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button style={{ color: "white" }}>Manage All Orders</Button>
          </NavLink>{" "}
          <br />
          <NavLink to={`${""}/addadmin`} style={{ textDecoration: "none" }}>
            {" "}
            <Button style={{ color: "white" }}>Add An Admin</Button>
          </NavLink>{" "}
          <br />
          <NavLink to={`${""}/addproduct`} style={{ textDecoration: "none" }}>
            {" "}
            <Button style={{ color: "white" }}>Add Product</Button>
          </NavLink>{" "}
          <br />
          <NavLink
            to={`${""}/manageproducts`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button style={{ color: "white" }}>Manage Products</Button>
          </NavLink>{" "}
          <br />
        </Box>
        <Button onClick={""} style={{ color: "white" }}>
          {" "}
          <LogoutIcon className="me-2" />
          Logout
        </Button>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className="bg-gray-900 px- ">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography> */}
            <nav className=" ml-96 text-gray-800 dark:text-white uppercase text-medium lg:flex items-center hidden">
              <NavLink to="" className="py-2 text-white  px-6 flex">
                Home
              </NavLink>

              <NavLink to="" className="py-2 text-white px-6 flex">
                Watch
              </NavLink>
              <NavLink to="" className="py-2 text-white px-6 flex">
                Product
              </NavLink>
              <NavLink to="" className="py-2 text-white px-6 flex">
                Contact
              </NavLink>
              {/* <NavLink to="/dashboard" className="py-2 px-6 flex">
                DashBoard
              </NavLink> */}

              {user?.email ? (
                <button onClick={logout} className="py-2 px-6 flex uppercase">
                  Logout
                </button>
              ) : (
                <NavLink to="/login">
                  {" "}
                  <button className="py-2 px-6 flex uppercase">Login</button>
                </NavLink>
              )}
              {user && <div className="text-black">{user.displayName} </div>}
              {user?.photoURL && (
                <img
                  style={{ borderRadius: "50%" }}
                  src={user.photoURL}
                  alt=""
                />
              )}
            </nav>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of NavLinks. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {/* <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>

            <Route path={`${path}/reviews`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/payment`}>
              <Pay></Pay>
            </Route>
            <AdminRoute path={`${path}/manageallorders`}>
              <ManageAllOrderes></ManageAllOrderes>
            </AdminRoute>
            <AdminRoute path={`${path}/addadmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addproduct`}>
              <AddProducts></AddProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/manageproducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          </Switch> */}
        </Box>
      </Box>
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

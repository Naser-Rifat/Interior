import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
    <div className="bg-gray-100  h-full">
      <div className="uppercase text-gray-800 dark:text-white font-black text-2xl my-4 mx-5">
        INTERIOR.US
      </div>
      {/* <Toolbar /> */}

      <Divider />
      {/* <div>
        <div>
          {user?.photoURL && (
            <img
              className="ml-20 my-3"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              src={user.photoURL}
              alt=""
            />
          )}
        </div>

        <div>
       
          {user && <div className="text-black ml-7">{user.displayName} </div>}
        </div>
      </div> */}

      <Box sx={{ textAlign: "left", m: 2 }}>
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <Button
            style={{
              color: "black",
              //   marginLeft: "0px",
              //   paddingLeft: "0px",
              //   marginTop: "8px",
            }}
          >
            Home
          </Button>
        </NavLink>
        <br />
        <NavLink to="dashboadhome" style={{ textDecoration: "none" }}>
          <Button style={{ color: "black" }}>DashBoard Home</Button>
        </NavLink>{" "}
        <NavLink to="paymentlist" style={{ textDecoration: "none" }}>
          <Button style={{ color: "black" }}>Payment List</Button>
        </NavLink>{" "}
        {/* <br />
        <NavLink to="" style={{ textDecoration: "none" }}>
          <Button style={{ color: "black" }}>Review</Button>
        </NavLink>{" "}
        <br /> */}
        <Box>
          <NavLink to="manageallorders" style={{ textDecoration: "none" }}>
            <Button style={{ color: "black" }}>Manage All Orders</Button>
          </NavLink>{" "}
          <br />
          <NavLink to="makeanadmin" style={{ textDecoration: "none" }}>
            <Button style={{ color: "black" }}>Add An Admin</Button>
          </NavLink>{" "}
          <br />
          <NavLink to="addproduct" style={{ textDecoration: "none" }}>
            <Button style={{ color: "black" }}>Add Product</Button>
          </NavLink>{" "}
          <br />
          <NavLink to="manageallproducts" style={{ textDecoration: "none" }}>
            <Button style={{ color: "black" }}>Manage Products</Button>
          </NavLink>{" "}
          <br />
        </Box>
        <Button onClick={""} style={{ color: "black" }}>
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
        <CssBaseline className=" drop-shadow-none	 " />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className="bg-gray-100  border-b-4 border-pink-100 ">
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <div className="grid grid-cols-9  gap-5 w-full">
              <div className=" col-span-7"></div>
              <div className="flex col-span-2">
                <span className=" mt-3">
                  <i className="far fa-bell mx-4 text-base text-gray-500 inline"></i>
                </span>
                <Avatar
                  className="mt-2"
                  sx={{ width: 32, height: 32 }}
                  src={user?.photoURL}
                  alt="user"
                />
                {user && (
                  <div className="text-black w-full mt-3 ml-2">
                    {user?.displayName}
                  </div>
                )}
              </div>
            </div>
            {/* <nav className=" 	 text-gray-800 dark:text-black uppercase text-medium lg:flex items-center hidden">
              <NavLink to="" className="py-2 text-black  px-6 flex">
                Home
              </NavLink>

              <NavLink to="" className="py-2 text-black px-6 flex">
                Watch
              </NavLink>
              <NavLink to="" className="py-2 text-black px-6 flex">
                Product
              </NavLink>
              <NavLink to="" className="py-2 text-black px-6 flex">
                Contact
              </NavLink>
              <NavLink to="/dashboard" className="py-2 px-6 flex">
                DashBoard
              </NavLink> 

               {user?.email ? (
                <button onClick={logout} className="py-2 px-6 flex uppercase">
                  Logout
                </button>
              ) : (
                <NavLink to="/login">
               
                  <button className="py-2 px-6 flex uppercase">Login</button>
                </NavLink>
              )} 
              {user && (
                <div className="text-black mr-3">{user.displayName} </div>
              )}
              {user?.photoURL && (
                <img
                  style={{ width: "48px", height: "48px", borderRadius: "50%" }}
                  src={user.photoURL}
                  alt=""
                />
              )}
            </nav> */}
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

          <Outlet />

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

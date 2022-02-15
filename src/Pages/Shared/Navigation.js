import Logout from "@mui/icons-material/Logout";
import { Menu } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../src/Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logout, admin } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-y-visible		">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
            INTERIOR.US
          </div>
          <div className="flex items-center">
            <nav className=" menu-bar font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <NavLink to="/home" className="py-2 px-6 flex">
                Home
              </NavLink>

              {/* <NavLink to="" className="py-2 px-6 flex">
                Watch
              </NavLink> */}
              <NavLink to="/exploreproducts" className="py-2 px-6 flex">
                Product
              </NavLink>
              <NavLink to="/contactus" className="py-2 px-6 flex">
                Contact
              </NavLink>
              {admin && (
                <NavLink to="/dashboard" className="py-2 px-6 flex">
                  Dashboard
                </NavLink>
              )}
              <i class="fa-solid fa-cart-shopping"></i>
              {/* <i className="fa-solid text-black fa-cart-shopping"></i> */}
              {/* <NavLink to="/dashboard" className="py-2 px-6 flex">
                Account
              </NavLink> */}

              {!user?.email && (
                <NavLink to="/login">
                  <button className="py-2 px-6 flex uppercase">Login</button>
                </NavLink>
              )}

              {user && <div className="text-black">{user?.displayName}</div>}
              <React.Fragment>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar
                        sx={{ width: 32, height: 32 }}
                        src={user?.photoURL}
                        alt="user"
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
                {user.email ? (
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>
                      <Avatar /> Profile
                    </MenuItem>
                    {/* <MenuItem>My account</MenuItem> */}
                    <Link to="/myorders">
                      <MenuItem>My orders</MenuItem>
                    </Link>
                    <Link to="/paymenthistory">
                      <MenuItem>Payment History</MenuItem>
                    </Link>
                    {/* <Link to="/productreviews">
                      <MenuItem> Reviews</MenuItem>
                    </Link> */}
                    <Link to="/feedbackdraw">
                      <MenuItem>Feedback</MenuItem>
                    </Link>

                    {/* <MenuItem>Dashboard</MenuItem> */}
                    <Divider />
                    {/* <MenuItem>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem> */}
                    {/* <MenuItem>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem> */}

                    {user?.email ? (
                      <MenuItem onClick={logout}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    ) : (
                      ""
                      // <Link to="/login">
                      //   <MenuItem>
                      //     <ListItemIcon>
                      //       <Logout fontSize="small" />
                      //     </ListItemIcon>
                      //     Login
                      //   </MenuItem>
                      // </Link>
                    )}
                  </Menu>
                ) : (
                  ""
                )}
              </React.Fragment>
            </nav>
            <button className="lg:hidden flex flex-col ml-4">
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            </button>
          </div>
        </div>
      </header>
    </main>
    // <div>
    //     <nav className="bg-white shadow-lg">
    //         <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
    //             <div className="flex justify-between items-center">
    //                 <div className="text-2xl font-bold text-gray-800 md:text-3xl">
    //                     <NavLink to="">Brand</NavLink>
    //                 </div>
    //                 <div className="md:hidden">
    //                     <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
    //                         <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    //                             <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
    //                             <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
    //                         </svg>
    //                     </button>
    //                 </div>
    //             </div>
    //             <div className="flex flex-col md:flex-row hidden md:block -mx-2">
    //                 <NavLink to="" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Home</NavLink>
    //                 <NavLink to="" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">About</NavLink>
    //                 <NavLink to="" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Contact</NavLink>
    //             </div>
    //         </div>
    //     </nav>
    // </div>
  );
};

export default Navigation;

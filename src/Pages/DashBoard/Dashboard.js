import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import "./Dasboard.css";

const drawerWidth = 240;

function Dashboard(props) {
  const { logout, user } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="bg-gray-800  h-full m-0">
      <div className="uppercase text-gray-100 dark:text-white font-black text-2xl my-4 mx-5">
        INTERIOR.US
      </div>

      <Divider />

      <Box sx={{ textAlign: "left", m: 2 }}>
        <NavLink
          className="text-base hover:text-gray-900 text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
          to="/home"
          style={{ textDecoration: "none" }}
        >
          <svg
            version="1.1"
            id="Capa_1"
            fill="currentColor"
            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 330.242 330.242"
            style={{ enableBackground: "new 0 0 330.242 330.242" }}
            //xml:space="preserve"
          >
            <path
              d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999
	c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314
	c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053
	v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5
	c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z"
            />
          </svg>
          <span
            style={{
              marginLeft: "10px",
            }}
          >
            Home
          </span>
        </NavLink>
        <NavLink
          className="text-base hover:text-gray-900 text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
          to="dashboadhome"
          style={{ textDecoration: "none" }}
        >
          <svg
            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
          </svg>
          <span style={{ marginLeft: "10px" }}>DashBoard Home</span>
        </NavLink>
        <NavLink
          className="text-base hover:text-gray-900 text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
          style={{ textDecoration: "none" }}
          to="paymentlist"
        >
          <svg
            id="Layer_1"
            fill="currentColor"
            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
            dataName="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M433.9,128H1.3A64.25,64.25,0,0,1,64,76.8H371.2A64.25,64.25,0,0,1,433.9,128ZM512,326.4v76.8a32,32,0,0,1-32,32H364.8a32,32,0,0,1-32-32V326.4a32,32,0,0,1,32-32h6.4a51.2,51.2,0,0,1,102.4,0H480A32,32,0,0,1,512,326.4Zm-76.8,32a12.8,12.8,0,0,0-25.6,0v12.8a12.8,12.8,0,0,0,25.6,0Zm12.8-64a25.6,25.6,0,0,0-51.2,0Zm-98.73-23.48A57.71,57.71,0,0,0,307.2,326.4V384H64A64.19,64.19,0,0,1,0,320V179.2H435.2v39.48a76.79,76.79,0,0,0-85.93,52.25ZM64,256a12.8,12.8,0,0,0,12.8,12.8h76.8a12.8,12.8,0,1,0,0-25.6H76.8A12.8,12.8,0,0,0,64,256Zm166.4,51.2a12.8,12.8,0,0,0-12.8-12.8H76.8a12.8,12.8,0,1,0,0,25.6H217.6A12.8,12.8,0,0,0,230.4,307.2Z" />
          </svg>
          <span style={{ marginLeft: "10px" }}>Payment List </span>
        </NavLink>
        <NavLink
          className="text-base hover:text-gray-900 text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
          to="manageallorders"
          style={{ textDecoration: "none" }}
        >
          <svg
            version="1.1"
            fill="currentColor"
            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 297 297"
            enableBackground="new 0 0 297 297"
          >
            <path d="m112.632,185.074l6.88-3.972c2.804-1.619 3.765-5.205 2.146-8.01l-13.036-22.579c-1.086-1.881-3.057-2.933-5.083-2.933-0.995,0-2.003,0.253-2.926,0.787l-6.88,3.972c-0.945,0.545-1.947,0.794-2.923,0.794-3.063,0-5.872-2.449-5.872-5.872v-7.944c0-3.238-2.625-5.864-5.864-5.864h-26.073c-3.238,0-5.864,2.625-5.864,5.864v7.944c0,3.423-2.81,5.872-5.872,5.872-0.976,0-1.978-0.249-2.923-0.794l-6.88-3.972c-0.923-0.533-1.932-0.786-2.926-0.787-2.027,0-3.997,1.052-5.083,2.933l-13.036,22.579c-1.619,2.805-0.658,6.391 2.146,8.01l6.88,3.972c3.909,2.257 3.909,7.899 0,10.156l-6.88,3.972c-2.805,1.619-3.765,5.205-2.146,8.01l13.036,22.579c1.086,1.881 3.057,2.933 5.083,2.933 0.995,0 2.003-0.254 2.926-0.787l6.88-3.972c0.945-0.545 1.947-0.794 2.923-0.794 3.063,0 5.872,2.449 5.872,5.872v7.944c0,3.238 2.625,5.864 5.864,5.864h26.072c3.238,0 5.864-2.625 5.864-5.864v-7.944c0-3.423 2.81-5.872 5.872-5.872 0.976,0 1.978,0.249 2.923,0.794l6.88,3.972c0.923,0.533 1.932,0.787 2.926,0.787 2.027,0 3.997-1.052 5.083-2.933l13.036-22.579c1.619-2.805 0.658-6.391-2.146-8.01l-6.88-3.972c-3.908-2.257-3.908-7.9 0.001-10.156zm-46.594,22.474c-9.608,0-17.396-7.789-17.396-17.396 0-9.608 7.789-17.396 17.396-17.396s17.396,7.789 17.396,17.396c0,9.607-7.789,17.396-17.396,17.396z" />
            <path d="m108.109,23.659c-3.146-3.144-8.243-3.144-11.389,0-3.145,3.146-3.145,8.244 0,11.389l14.39,14.389c-52.889,2.619-95.701,44.162-100.334,96.506l1.19-2.062c3.406-5.9 9.756-9.565 16.57-9.564 0.144,0 0.287,0.013 0.431,0.017 9.074-37.721 41.965-66.251 81.815-68.729l-14.062,14.061c-3.145,3.145-3.145,8.244 0,11.389 1.573,1.572 3.633,2.358 5.694,2.358s4.122-0.786 5.694-2.358l28.004-28.004c1.51-1.511 2.358-3.559 2.358-5.694 0-2.136-0.848-4.184-2.358-5.694l-28.003-28.004z" />
            <path d="m209.868,64.857c17.881,0 32.428-14.547 32.428-32.428 0-17.882-14.547-32.429-32.428-32.429-17.881,0-32.428,14.547-32.428,32.428 0,17.881 14.547,32.429 32.428,32.429z" />
            <path d="m273.039,152.276v-44.58c0-12.34-7.93-23.283-19.657-27.124l-.054-.018-17.152-2.84c-1.46-0.449-3.02,0.324-3.545,1.764l-19.462,53.399c-1.123,3.081-5.48,3.081-6.602,0l-19.462-53.399c-0.424-1.163-1.522-1.892-2.698-1.892-0.279,0-17.999,2.964-17.999,2.964-11.823,3.94-19.723,14.9-19.723,27.294v44.432c0,6.659 5.398,12.056 12.056,12.056h102.241c6.66-2.84217e-14 12.057-5.398 12.057-12.056z" />
            <path d="m287.37,162.933c-0.673,9.215-8.233,14.858-17.45,15.526-7.062,40.425-41.207,71.64-82.979,74.237l14.061-14.061c3.145-3.146 3.145-8.244 0-11.389-3.146-3.144-8.243-3.144-11.389,0l-28.003,28.004c-3.145,3.146-3.145,8.244 0,11.389l28.003,28.003c1.573,1.572 3.633,2.358 5.694,2.358s4.122-0.786 5.694-2.358c3.145-3.145 3.145-8.244 0-11.389l-14.389-14.389c56.028-2.774 100.758-49.227 100.758-105.931z" />
            <path d="m216.936,77.105c-0.747-0.814-1.84-1.224-2.946-1.224h-8.245c-1.105,0-2.198,0.41-2.946,1.224-1.157,1.261-1.325,3.082-0.504,4.505l4.407,6.644-2.063,17.405 4.063,10.808c0.396,1.087 1.933,1.087 2.33,0l4.063-10.808-2.063-17.405 4.407-6.644c0.822-1.423 0.654-3.244-0.503-4.505z" />
          </svg>
          <span style={{ marginLeft: "10px" }}>Manage All Orders</span>
        </NavLink>{" "}
        <NavLink
          className="text-base hover:text-gray-900 text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
          to="makeanadmin"
          style={{ textDecoration: "none" }}
        >
          <svg
            version="1.1"
            fill="currentColor"
            id="Layer_1"
            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75 "
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
          >
            <path
              d="M213.3,384c0-87,65.2-158.7,149.3-169.2c0-0.9,0-1.5,0-1.5c5.5-8,21.3-21.3,21.3-42.7s-21.3-42.7-21.3-53.3
	C362.7,32,319.2,0,256,0c-60.5,0-106.7,32-106.7,117.3c0,10.7-21.3,32-21.3,53.3s15.2,35.4,21.3,42.7c0,0,0,21.3,10.7,53.3
	c0,10.7,21.3,21.3,32,32c0,10.7,0,21.3-10.7,42.7L64,362.7C21.3,373.3,0,448,0,512h271.4C235.9,480.7,213.3,435,213.3,384z M384,256
	c-70.7,0-128,57.3-128,128s57.3,128,128,128s128-57.3,128-128S454.7,256,384,256z M469.3,405.3h-64v64h-42.7v-64h-64v-42.7h64v-64
	h42.7v64h64V405.3z"
            />
          </svg>
          <span style={{ marginLeft: "10px" }}>Add An Admin</span>
        </NavLink>{" "}
        <NavLink
          className="text-base hover:text-gray-900 text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
          to="addproduct"
          style={{ textDecoration: "none" }}
        >
          <svg
            version="1.1"
            fill="currentColor"
            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75 "
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 486.77 486.77"
            enableBackground="new 0 0 486.77 486.77"
          >
            <path
              id="XMLID_756_"
              d="M482.482,175.267c-3.43-4.96-9.055-7.939-15.083-7.939h-45.714c4.887-14.165,3.873-29.893-3.29-43.606
		c-7.731-14.824-21.517-25.186-37.6-28.577V55.411c0-14.347-5.61-28.893-17.217-39.962C353.628,5.934,340.208,0,325.384,0
		c-35.327,0-7.368,0-34.085,0c-14.821,0-28.244,5.934-38.195,15.448c-10.663,10.165-17.215,24.189-17.215,39.962v39.733
		c-16.083,3.392-29.868,13.753-37.601,28.577c-7.163,13.714-8.176,29.441-3.287,43.606h-45.454l-41.245-45.817
		c-4.628-5.141-11.211-8.082-18.136-8.082l-64.688-0.008c-13.477,0-24.402,10.926-24.402,24.402
		c0,13.477,10.925,24.396,24.402,24.396h53.819l33.275,36.983l70.512,183.346c2.718,7.075,9.507,11.733,17.081,11.733h194.012
		c7.58,0,14.371-4.658,17.081-11.733l73.205-190.343C486.643,186.57,485.89,180.241,482.482,175.267z M237.141,144.003
		c2.013-3.834,5.942-6.219,10.253-6.219h0.014h32.311V55.411c0-6.385,5.197-11.568,11.565-11.568h0.016h34.085h0.015
		c6.371,0,11.568,5.183,11.568,11.568v82.372h32.309h0.016c4.31,0,8.24,2.385,10.252,6.219c1.996,3.834,1.712,8.421-0.776,11.971
		l-60.926,87.348c-2.171,3.098-5.721,4.944-9.491,4.944h-0.009h-0.008c-3.77,0-7.319-1.846-9.49-4.944l-60.925-87.348
		C235.431,152.424,235.145,147.837,237.141,144.003z"
            />
            <path
              id="XMLID_755_"
              d="M228.577,413.565c-20.219,0-36.603,16.383-36.603,36.602c0,20.211,16.384,36.604,36.603,36.604
		c20.21,0,36.596-16.393,36.596-36.604C265.172,429.948,248.787,413.565,228.577,413.565z"
            />
            <path
              id="XMLID_754_"
              d="M363.081,413.565c-20.212,0-36.603,16.383-36.603,36.602c0,20.211,16.391,36.604,36.603,36.604
		c20.217,0,36.594-16.393,36.594-36.604C399.675,429.948,383.298,413.565,363.081,413.565z"
            />
          </svg>
          <span style={{ marginLeft: "10px" }}>Add Product</span>
        </NavLink>
        <NavLink
          className="text-base hover:text-gray-900 text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
          to="manageallproducts"
          style={{ textDecoration: "none" }}
        >
          <svg
            version="1.1"
            id="Layer_1"
            fill="currentColor"
            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75 "
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 511.996 511.996"
            enableBackground="new 0 0 511.996 511.996"
          >
            <path
              d="M500.052,151.998H340.916L299.204,26.822c-2.212-6.484-8.296-10.856-15.148-10.856c-1.752,0-3.488,0.284-5.156,0.848
			c-4.048,1.38-7.312,4.248-9.2,8.084s-2.168,8.196-0.8,12.216l38.288,114.884H204.92l38.272-114.864
			c1.38-4.044,1.1-8.392-0.788-12.228s-5.156-6.712-9.196-8.088c-1.672-0.572-3.408-0.864-5.16-0.864
			c-6.848,0-12.936,4.384-15.152,10.892l-41.704,125.152H12.052C5.432,151.998,0,157.334,0,163.95v16
			c0,5.32,3.528,9.788,8.328,11.356l17.44,181.036c1.404,19.648,18.584,35.656,38.28,35.656h76.096
			c-0.044,0-0.124-2.584-0.124-3.872c0-28.772,11.976-55.136,27.976-75.416v-92.76c0-6.624,5.376-12,12-12c6.624,0,12,5.376,12,12
			v71.552c16-10.084,32-16.7,52-18.644V235.95c0-6.624,5.376-12,12-12c6.624,0,12,5.376,12,12v52.944c20,2,36,8.656,52,18.808
			V235.95c0-6.624,5.376-12,12-12c6.624,0,12,5.376,12,12v93.116c16,20.232,27.712,46.456,27.712,75.056
			c0,1.288-0.028,3.872-0.072,3.872h76.412c19.7,0,36.864-16.004,38.26-35.56l17.408-181.116c4.804-1.572,8.28-6.052,8.28-11.372
			v-16C512,157.334,506.668,151.998,500.052,151.998z M116,359.95c0,6.628-5.376,12-12,12s-12-5.372-12-12v-124
			c0-6.624,5.376-12,12-12s12,5.376,12,12V359.95z M420,359.95c0,6.628-5.376,12-12,12c-6.624,0-12-5.372-12-12v-124
			c0-6.624,5.376-12,12-12c6.624,0,12,5.376,12,12V359.95z"
            />

            <path
              d="M256.052,312.162c-50.784,0-91.944,41.164-91.944,91.94c0,50.78,41.16,91.94,91.944,91.94s91.944-41.16,91.944-91.94
			C347.996,353.326,306.836,312.162,256.052,312.162z M302.664,435.586c4.652,4.648,4.652,12.22,0,16.872
			c-2.248,2.252-5.248,3.492-8.432,3.492s-6.184-1.24-8.432-3.492l-28.248-28.248l-28.248,28.248
			c-4.504,4.508-12.368,4.508-16.872,0.008c-4.656-4.656-4.656-12.228,0-16.88l28.248-28.244l-28.248-28.248
			c-4.652-4.652-4.652-12.224,0-16.872c4.512-4.508,12.368-4.508,16.872,0l28.248,28.248l28.248-28.248
			c4.496-4.508,12.364-4.508,16.868-0.008c2.256,2.256,3.5,5.252,3.5,8.444c-0.004,3.184-1.248,6.18-3.5,8.432l-28.248,28.248
			L302.664,435.586z"
            />
          </svg>

          <span style={{ marginLeft: "10px" }}>Manage Products</span>
        </NavLink>
        <span className="text-base hover:text-gray-900 cursor-pointer text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
          <svg
            version="1.1"
            id="Capa_1"
            fill="currentColor"
            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75 "
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 490.3 490.3"
            enableBackground="new 0 0 490.3 490.3"
          >
            <path
              d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
			s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
			c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
			C27.9,58.95,0,86.75,0,121.05z"
            />
            <path
              d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9
			c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63
			C380.6,325.15,380.6,332.95,385.4,337.65z"
            />
          </svg>
          <span onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </span>
        </span>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box className="" sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className="bg-gray-800 m-0">
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon className="text-white" />
            </IconButton>
            <div className="lg:grid grid-cols-12  gap-5 w-full">
              <div className=" col-span-9"></div>
              <div className="flex col-span-3">
                <span className=" mt-3">
                  <i className="far fa-bell scale-125	 mx-4 text-base text-gray-100 inline"></i>
                </span>
                <Avatar
                  className="mt-2"
                  sx={{ width: 32, height: 32 }}
                  src={user?.photoURL}
                  alt="user"
                />
                {user && (
                  <div className="text-white w-full mt-3 ml-2">
                    {user?.displayName}
                  </div>
                )}
              </div>
            </div>
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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Orders from "./Pages/Account/Orders";
import Payment from "./Pages/Account/Payment";
import PaymentHistory from "./Pages/Account/PaymentHistory";
import Reviews from "./Pages/Account/Reviews";
import ServiceFeedback from "./Pages/Account/ServiceFeedback";
import Stripe from "./Pages/Account/Stripe";
import AddAdmin from "./Pages/DashBoard/AddAdmin";
import Addproduct from "./Pages/DashBoard/Addproduct";
import AdminRoute from "./Pages/DashBoard/AdminRoute/AdminRoute";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Dashboardhome from "./Pages/DashBoard/Dashboardhome";
import ManageAllProducts from "./Pages/DashBoard/ManageAllProducts";
import Manageorders from "./Pages/DashBoard/Manageorders";
import PaymentList from "./Pages/DashBoard/PaymentList";
import ExploreProductDetails from "./Pages/ExpoloreProducts/ExploreProductDetails";
import ExploreProducts from "./Pages/ExpoloreProducts/ExploreProducts";
import Homepage from "./Pages/Homepage/Homepage/Home";
import Login from "./Pages/Login/LoginForm/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import SignUpForm from "./Pages/Login/SignUpForm/SignUpForm";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>} />

            <Route path="/home" element={<Homepage> </Homepage>} />

            <Route path="/login" element={<Login> </Login>} />
            <Route
              path="/exploreproducts"
              element={<ExploreProducts></ExploreProducts>}
            />
            <Route
              path="/projectdetails/:id"
              element={
                <PrivateRoute>
                  <ProjectDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/productdetails/:id"
              element={
                <PrivateRoute>
                  <ExploreProductDetails />
                </PrivateRoute>
              }
            />
            <Route path="/myorders" element={<Orders></Orders>} />
            <Route path="/paymenthistory" element={<PaymentHistory />} />
            <Route path="/productreviews" element={<Reviews></Reviews>} />
            <Route path="/payment" element={<Payment></Payment>} />
            <Route path="/stripe" element={<Stripe />} />
            <Route
              path="/servicefeedback"
              element={<ServiceFeedback></ServiceFeedback>}
            />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                path="manageallproducts"
                element={<ManageAllProducts />}
              ></Route>
              <Route path="dashboadhome" element={<Dashboardhome />}></Route>
              <Route path="makeanadmin" element={<AddAdmin />}></Route>
              <Route path="paymentlist" element={<PaymentList />}></Route>
              <Route
                path="addproduct"
                element={
                  <AdminRoute>
                    <Addproduct />
                  </AdminRoute>
                }
              ></Route>
              <Route path="manageallorders" element={<Manageorders />}></Route>
            </Route>
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

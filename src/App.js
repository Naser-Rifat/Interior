import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Dashboard from "./Pages/DashBoard/Dashboard";
import ExploreProductDetails from "./Pages/ExpoloreProducts/ExploreProductDetails";
import ExploreProducts from "./Pages/ExpoloreProducts/ExploreProducts";
import Home from "./Pages/Homepage/Home/Home";
import Login from "./Pages/Login/LoginForm/Login";
import SignUpForm from "./Pages/Login/SignUpForm/SignUpForm";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home> </Home>} />

            <Route path="/home" element={<Home> </Home>} />

            <Route path="/login" element={<Login> </Login>} />
            <Route
              path="/exploreproducts"
              element={<ExploreProducts></ExploreProducts>}
            />
            <Route
              path="/projectdetails/:id"
              element={<ProjectDetails></ProjectDetails>}
            />
            <Route
              path="/productdetails/:id"
              element={<ExploreProductDetails></ExploreProductDetails>}
            />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />

            <Route path="/signup" element={<SignUpForm> </SignUpForm>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

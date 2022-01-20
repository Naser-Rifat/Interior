
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import ExploreProducts from './Pages/ExpoloreProducts/ExploreProducts';
import Home from './Pages/Homepage/Home/Home';
import Login from './Pages/Login/LoginForm/Login';
import SignUpForm from './Pages/Login/SignUpForm/SignUpForm';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Footer from './Pages/Shared/Footer';
import Navigation from './Pages/Shared/Navigation';

function App() {
  return (
    <div className="">
   <AuthProvider>  
     <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home> </Home>}/>

     
          <Route path="/home" element={<Home> </Home>}/>

          <Route path="/login" element={<Login> </Login>}/>
          <Route path="/exploreproducts" element={<ExploreProducts></ExploreProducts>}/>
          <Route path="/projectdetails/:id" element={<ProjectDetails></ProjectDetails>}/>


          <Route path="/signup" element={<SignUpForm> </SignUpForm>}/>



        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

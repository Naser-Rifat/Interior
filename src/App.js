
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Homepage/Home/Home';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Footer from './Pages/Shared/Footer';
import Navigation from './Pages/Shared/Navigation';

function App() {
  return (
    <div className="">

      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home> </Home>}>

          </Route>
          <Route path="/home" element={<Home> </Home>}>

          </Route>
          <Route path="/projectdetails" element={<ProjectDetails></ProjectDetails>}>

          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

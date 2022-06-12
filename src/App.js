import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from "./Pages/Shared/Firebase/AuthProvider";
import Login from './Pages/Login/Login';
import Reagister from './Pages/Login/Reagister';
import PageThemes from './Pages/Theme/ThemePage/PageThemes';
import Deshboard from './Pages/Deshboard/Deshboard/Deshboard';
import Domain from './Pages/Domain/Domain';
import Hostings from './Pages/Hosting/Hostings';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/themes" element={<PageThemes/>} />
                <Route path="/domain" element={<Domain/>} />
                <Route path="/hostings" element={<Hostings/>} />
                <Route path="/deshboard" element={<Deshboard/>} />
                <Route path="/reagister" element={<Reagister/>} />
              </Routes>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

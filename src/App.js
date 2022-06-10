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

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/reagister" element={<Reagister/>} />
              </Routes>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

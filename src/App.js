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
import MakeAdmin from './Pages/Deshboard/MakeAdmin/MakeAdmin';
import AdminPrivateRoute from './Pages/Deshboard/AdminPrivateRoute/AdminPrivateRoute';
import DeshThemes from './Pages/Deshboard/Purchased/Theme/DeshThemes';
import DeshDomains from './Pages/Deshboard/Purchased/Domain/DeshDomains';
import DeshHostings from './Pages/Deshboard/Purchased/Hosting/DeshHostings';
import DomainEdit from './Pages/Deshboard/AdminPanel/InformationEdit/DomainEdit/DomainEdit';
import HostingEdit from './Pages/Deshboard/AdminPanel/InformationEdit/HostingEdit/HostingEdit';
import ThemesAdmin from './Pages/Deshboard/AdminPanel/InformationEdit/ThemeEdit/ThemesAdmin';




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
                <Route path="/reagister" element={<Reagister/>} />
                <Route path="/deshboard/*" element={<Deshboard/>}>
                  <Route path="*" element={<DeshThemes/>} /> 
                  <Route path="deshDomain" element={<DeshDomains/>} /> 
                  <Route path="deshHosting" element={<DeshHostings/>} /> 
                      <Route path="*" element={<AdminPrivateRoute/>}> 
                          <Route path="makeadmin" element={<MakeAdmin/>}/>
                          <Route path="editTheme" element={<ThemesAdmin/>}/>
                          <Route path="editDomain" element={<DomainEdit/>}/>
                          <Route path="editHosting" element={<HostingEdit/>}/>
                      </Route>
                  </Route>
              </Routes>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

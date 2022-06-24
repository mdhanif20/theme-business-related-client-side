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

import ThemesAdmin from './Pages/Deshboard/AdminPanel/InformationEdit/ThemeEdit/ThemesAdmin';
import DomainAdmin from './Pages/Deshboard/AdminPanel/InformationEdit/DomainEdit/DomainAdmin';
import HostingAdmin from './Pages/Deshboard/AdminPanel/InformationEdit/HostingEdit/HostingAdmin';
import ThemePurchase from './Pages/Deshboard/Purchased/Theme/ThemePurchase';
import DomainPurchase from './Pages/Deshboard/Purchased/Domain/DomainPurchase';
import HostingPurchase from './Pages/Deshboard/Purchased/Hosting/HostingPurchase';
import Contact from './Pages/Contact/Contact';
import StoragePurchased from './Pages/Deshboard/Purchased/Storage/StoragePurchased';




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
                
                <Route path="/contact" element={<Contact/>} />
                <Route path="/deshboard/*" element={<Deshboard/>}>
                  <Route path="*" element={<ThemePurchase/>} /> 
                  <Route path="purchasedDomain" element={<DomainPurchase/>} /> 
                  <Route path="purchasedHosting" element={<HostingPurchase/>} /> 
                  <Route path="purchasedStorage" element={<StoragePurchased/>} />
                      <Route path="*" element={<AdminPrivateRoute/>}> 
                          <Route path="makeadmin" element={<MakeAdmin/>}/>
                          <Route path="editTheme" element={<ThemesAdmin/>}/>
                          <Route path="editDomain" element={<DomainAdmin/>}/>
                          <Route path="editHosting" element={<HostingAdmin/>}/>
                          
                      </Route>
                  </Route>
              </Routes>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

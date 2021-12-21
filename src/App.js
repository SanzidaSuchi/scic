
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/Signup/SignUp';
import Services from './Pages/Home/Services/Services';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Pay from './Pages/Dashboard/Pay/Pay';
import AddServices from './Pages/Dashboard/AddServices/AddServices';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Review from './Pages/Dashboard/Review/Review';
import ManageAllOrder from './Pages/Dashboard/DashboardHome/ManageAllOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
      <Route path="services" element={<PrivateRoute><Services /></PrivateRoute>}></Route>
      <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
      <Route path="myOrder" element={<PrivateRoute><MyOrder /></PrivateRoute>}></Route>
      <Route path="pay" element={<PrivateRoute><Pay /></PrivateRoute>}></Route>
      <Route path="addServices" element={<PrivateRoute><AddServices /></PrivateRoute>}></Route>
      <Route path="makeAdmin" element={<PrivateRoute><MakeAdmin /></PrivateRoute>}></Route>
      <Route path="review" element={<PrivateRoute><Review /></PrivateRoute>}></Route>
      <Route path="manageAllOrder" element={<PrivateRoute><ManageAllOrder /></PrivateRoute>}></Route>
      <Route path="manageProduct" element={<PrivateRoute><ManageProduct /></PrivateRoute>}></Route>
      <Route path="details/:serviceId" element={<PrivateRoute><ServiceDetails /></PrivateRoute>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;

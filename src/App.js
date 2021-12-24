
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
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
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddServices from './Pages/Dashboard/AddServices/AddServices';
import ManageAllOrder from './Pages/Dashboard/DashboardHome/ManageAllOrder';
import Notfound from './Pages/Shared/Notfound/Notfound';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
        <Home></Home>
        </Route>
        <PrivateRoute  path="/services">
        <Services></Services>
        </PrivateRoute>
        <PrivateRoute  path="/details/:serviceId">
       <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
             <Dashboard></Dashboard>
           </PrivateRoute>
           <PrivateRoute  path="/addServices">
        <AddServices></AddServices>
        </PrivateRoute>
           <PrivateRoute  path="/myOrder">
        <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute  path="/manageAll">
        <ManageAllOrder></ManageAllOrder>
        </PrivateRoute>
        <Route  path="/login">
        <Login></Login>
        </Route>
        <Route  path="/signup">
        <SignUp></SignUp>
        </Route>

        <Route  path="*">
        <Notfound></Notfound>
        </Route> 
        </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;

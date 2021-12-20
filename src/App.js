
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
// import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

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
      <Route path="services" element={<Services />}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;

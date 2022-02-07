import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./Contex/AuthProvider/AuthProvider";
import PrivateRoute from "./pages/private/PrivateRoute";
import Dashbord from "./pages/Dashbord/Dashbord/Dashbord";
import Dashbordhome from "./pages/Dashbord/Dashbordhome/Dashbordhome"
import MakeAdmin from "./pages/Dashbord/MakeAdmin/MakeAdmin"
import AddDoctor from "./pages/Dashbord/AddDoctor/AddDoctor"
import AdmineRoute from "./pages/Login/AdminRoute/AdminRoute";
import Payment from "./pages/Dashbord/Payment/Payment";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="appointment" element={<PrivateRoute><Appointment /></PrivateRoute>} />
            <Route path="dashbord/*" element={<PrivateRoute><Dashbord /></PrivateRoute>}>
              <Route index  element={<Dashbordhome/>}/>
              <Route path="payment/:appointmentId" element={<Payment/>}/>
              <Route path="makeAdmin" element={<AdmineRoute><MakeAdmin/></AdmineRoute>}/>
              <Route path="addDoctor" element={<AdmineRoute><AddDoctor/></AdmineRoute>}/>
            </Route>
            <Route path="home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

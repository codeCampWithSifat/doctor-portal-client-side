import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appoinment from "./Pages/Appoinment/Appoinment/Appoinment";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/appoinment"
              element={
                <PrivateRoute>
                  <Appoinment />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard" element={<PrivateRoute> <Dashboard /></PrivateRoute>}>
              <Route path="/dashboard/dashboardHome" element={<DashboardHome/>}/>
              <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin/></AdminRoute>}/>
              <Route path="/dashboard/addDoctor" element={<AdminRoute><AddDoctor/></AdminRoute>}/>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

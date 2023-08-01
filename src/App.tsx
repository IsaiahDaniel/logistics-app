import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

import PrivateRoute from "./routing/PrivateRoute";
import Register from "./pages/Auth/Register/Register";
import Haulage from "./pages/logistics/Haulage";
import Interstate from "./pages/logistics/Interstate";
import InternationalShipping from "./pages/logistics/InternationalShipping";
import Orders from "./pages/shipping/orders/Orders";
import Tracking from "./pages/shipping/Tracking/Tracking";
import Profile from "./pages/Profile/Profile";
import Order from "./pages/shipping/orders/Order";
import ShippingCalculator from "./pages/shipping/ShippingCalculator/ShippingCalculator";
import ShippingCalculatorInternational from "./pages/shipping/ShippingCalculator/ShippingCalculatorInternational";
import ShippingInterState from "./pages/shipping/ShippingCalculator/ShippingInterState";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/haulage" element={<Haulage />} />
        <Route path="/inter-state" element={<Interstate />} />
        <Route path="/international" element={<InternationalShipping />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:orderId" element={<Order />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<Profile />} />
        <Route path="/shipping-calulator" element={<ShippingCalculator />} />
        <Route path="/shipping-calulator/international" element={<ShippingCalculatorInternational />} />
        <Route path="/shipping-calulator/inter-state" element={<ShippingInterState />} />        
        {/* <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}

      </Routes>
    </Router>
  )
}

export default App;
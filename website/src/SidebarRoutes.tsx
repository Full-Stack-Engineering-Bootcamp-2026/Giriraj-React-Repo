import { Routes, Route, Navigate } from "react-router";
// Import your components (Dashboard, Forms, etc.) here
// import Dashboard from './pages/Dashboard';
import Dashboard from "./components/pages/Dashboard";
import Forms from "./components/pages/Forms";
import Cards from "./components/pages/Cards";
import Charts from "./components/pages/Charts";
import Button from "./components/pages/Button";
import Modals from "./components/pages/Modals";
import Login from "./components/pages/Login";
import Tables from "./components/pages/Tables"
import CreateAccount from "./components/pages/CreateAccount";
import ForgotPassword from "./components/pages/ForgotPassword";
import Page404 from "./components/pages/Page404";
import Blank from "./components/pages/Blank";


export const SidebarRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forms" element={<Forms />} />
       <Route path="/cards" element={<Cards />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/buttons" element={<Button />} />
      <Route path="/modals" element={<Modals />} />
      <Route path="/tables" element={<Tables />} />
      
      <Route path="/pages">
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="Page404" element={<Page404/>} />
        <Route path="blank" element={<Blank/>} />
      </Route>
      
    </Routes>
  );
};

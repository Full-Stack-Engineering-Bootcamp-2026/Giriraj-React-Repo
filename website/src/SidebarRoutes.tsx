import { Routes, Route, Navigate } from "react-router";
// Import your components (Dashboard, Forms, etc.) here
// import Dashboard from './pages/Dashboard';
import Dashboard from "./components/pages/Dashboard";
import Forms from "./components/pages/Forms";
import Cards from "./components/pages/Cards";
import Charts from "./components/pages/Charts";
import Button from "./components/pages/Button";
import Modals from "./components/pages/Modals";
import Tables from "./components/pages/Tables";


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
      
      {/* Nested route for "Pages" option */}
      {/* <Route path="/pages" element={<PagesLayout />}>
         <Route path="profile" element={<Profile />} />
      </Route> */}
      
    </Routes>
  );
};

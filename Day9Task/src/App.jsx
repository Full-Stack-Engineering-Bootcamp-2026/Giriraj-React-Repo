// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
//import { About } from "./components/About";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Product } from "./components/Product";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import React from "react";
import {AuthProvider} from "./components/auth";
import {RequiredAuth} from "./components/RequiredAuth";
import {Profile} from "./components/Profile";
import {Login} from "./components/Login"
const LazyAbout = React.lazy(() => import("./components/About"));
function App() {
  return (
    <div>
      <Navbar />
        <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/Order-Summary" element={<OrderSummary />} />

        <Route path="/product" element={<Product />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* <Route path="users" element={<Users/>}/>
         <Route path='users/:id' element={<UserDetails/>}/>
          <Route path='users/admin' element={<Admin/>}/> */}
        <Route path="profile" element={
               <RequiredAuth>
               <Profile/> 
               </RequiredAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

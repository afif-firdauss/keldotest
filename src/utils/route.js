/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, useNavigate } from "react-router-dom";
import { menuHeader } from "./constant";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import Login from "pages/Login";
import Header from "components/containers/Header";
import NotFound from "pages/NotFound";
import ProfilePage from "pages/Profile";
import Dashboard from "pages/Dashboard";
import Shipping from "pages/Shipping";
import AddShipping from "pages/AddShipping";
import UpdateShipping from "pages/UpdateShipping";

export default function Navigation() {
  const data = useSelector(state => state.user.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="h-screen">
      <Header
        title="Kledo Test"
        titleClass="uppercase text-white font-bold text-lg my-auto"
        menu={menuHeader}
      />

      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/shipping-comps" element={<Shipping/>}/>
        <Route path="/add-shipping-comps" element={<AddShipping/>}/>
        <Route path="/update-shipping-comps/:id" element={<UpdateShipping/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}
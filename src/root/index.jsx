import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      {/* main */}
      <Route element={<Navbar />}>
        {navbar.map(({ Element, path }, index) => {
          return <Route key={index} path={path} element={Element} />;
        })}
      </Route>
      {/* not found */}
      <Route path="*" element={"Not found 404"} />
    </Routes>
  );
};

export default Root;

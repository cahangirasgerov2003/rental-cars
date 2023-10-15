import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Cars from "../pages/Cars";
import CarDetails from "../pages/CarDetails";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Policy from "../pages/Policy";
import { Navigate, Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;

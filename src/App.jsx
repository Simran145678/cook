import React from "react";
import "./server";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Contest from "./pages/Contest";
import Blogs from "./pages/Blogs";
import Layout from "./components/Layout";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contest" element={<Contest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

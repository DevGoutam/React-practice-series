import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import Service from "./components/Service";
import Contect from "./components/Contect";

const App = () => {
  return (
    <div className="flex items-center justify-evenly my-auto h-[500px]">
      <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/contect">Contect</NavLink>
        </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contect" element={<Contect />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

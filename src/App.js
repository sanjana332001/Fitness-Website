import logo from "./logo.svg";
import "./App.css";

import Navbar from "./componds.js/navbar";
import Products from "./componds.js/products";

import { Route, Routes } from "react-router-dom";
import Welcome from "./componds.js/welcome";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>;
      </Routes>
    </>
  );
}

export default App;

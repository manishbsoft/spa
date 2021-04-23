import React from 'react';

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";


export const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <Home />
    },
    {
      path: "/about",
      sidebar: () => <div>about!</div>,
      main: () => <About />
    },
    {
      path: "/contact",
      sidebar: () => <div>contact!</div>,
      main: () => <Contact />
    }
  ];
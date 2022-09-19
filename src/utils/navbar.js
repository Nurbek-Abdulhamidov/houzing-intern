import React from "react";
import Contact from "../pages/Contact";
import Main from "../pages/Main";
// components
import Properties from "../pages/Properties";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
    search: "?",
    Element: <Main />,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
    search: "?",
    Element: <Properties />,
  },
  {
    id: 2,
    title: "Contacts",
    path: "/contacts",
    private: false,
    hidden: false,
    search: "?",
    Element: <Contact />,
  },
];

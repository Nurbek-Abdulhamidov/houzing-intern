import React from "react";
import PropertiesList from "../components/PropertiesList";
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
    id: 3,
    title: "Contacts",
    path: "/contacts",
    private: false,
    hidden: false,
    search: "?",
    Element: <Contact />,
  },
  {
    id: 4,
    title: "Property list",
    path: "/properties:id",
    private: false,
    hidden: true,
    search: "?",
    Element: <PropertiesList />,
  },
  {
    id: 5,
    title: "Sign In",
    path: "/signIn",
    private: false,
    hidden: true,
    search: "?",
    Element: <h1>Sign in</h1>,
  },
];

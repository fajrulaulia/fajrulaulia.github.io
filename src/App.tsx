import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomeScreen from './persentations/pages/Home'
import ProjectScreen from './persentations/pages/Project'
import AboutScreen from './persentations/pages/About'

import LoginScreen from './persentations/pages/Login'
import RegisterScreen from './persentations/pages/Register'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/project",
    element: <ProjectScreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;

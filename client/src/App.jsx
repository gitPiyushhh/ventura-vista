import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
// import Authentication from "./pages/Authentication";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import GeneralHeader from "./components/layout/GeneralHeader";
import Generative from "./pages/Generative";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Signup />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/generative",
        element: <Generative />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <AppLayout />
    </RouterProvider>
  );
};

export default App;

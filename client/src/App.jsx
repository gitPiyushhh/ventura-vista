import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
// import Authentication from "./pages/Authentication";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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

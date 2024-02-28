import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import Authentication from "./pages/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
    children: [
      {
        path: "/signup",
        element: <Authentication />,
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

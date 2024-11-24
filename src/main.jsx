import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProperties from "./pages/AllProperties/AllProperties";
import AddNewProperty from "./pages/AddNewProperty/AddNewProperty";
import Main from "./layout/Main";
import DashboardHome from "./pages/DashboardHome/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
      {
        path: "/allProperties",
        element: <AllProperties />,
      },
      {
        path: "/addNewProperty",
        element: <AddNewProperty />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import ProductList from "./pages/ProductList/ProductList";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "leader",
          element: <LeaderBoard />,
        },

        {
          path: "products",
          element: <ProductList />,
        },
      ],
    },

    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

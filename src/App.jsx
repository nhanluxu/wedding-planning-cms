import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";

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

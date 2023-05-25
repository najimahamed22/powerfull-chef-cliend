import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../LeyOut/Main";
import Login from "../Page/Login/Login";
import Home from "../Page/Home/Home";
import Register from "../Page/Login/Register";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Blogs from "../Page/Blog/Blogs";
import Recipes from "../Page/Recipes/Recipes";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "recipes/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-powerfull-najimahamed22.vercel.app/recipes/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../component/ErrorPage";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

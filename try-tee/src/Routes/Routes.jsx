import { createBrowserRouter } from "react-router-dom";

import Error from "../component/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";

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

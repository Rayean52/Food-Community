import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import SignUp from "../Pages/AuthPages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: 'sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: 'sign-in',
        element: <SignIn></SignIn>
      },
      {
        path: 'add-foods',
        element: <AddFoods></AddFoods>
      },
      {
        path: 'update-foods',
        element: <UpdateFoods></UpdateFoods>
      },
      {
        path: 'manage-foods',
        element: <ManageMyFood></ManageMyFood>
      },
      {
        path: 'food-request',
        element: <MyFoodRequest></MyFoodRequest>
      }

    ]
  },
]);

export default router
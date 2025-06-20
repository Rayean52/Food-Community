import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import SignUp from "../Pages/AuthPages/SignUp";
import SignIn from '../Pages/AuthPages/SignIn';
import AddFoods from '../Pages/Foods/AddFoods';
import UpdateFoods from '../Pages/Foods/UpdateFoods';
import ManageMyFood from '../Pages/MyFoods/ManageMyFood';
import MyFoodRequest from '../Pages/MyFoods/MyFoodRequest';
import AvailableFoods from "../Pages/Foods/AvailableFoods";
import FoodDetails from "../Pages/Foods/FoodDetails";
import Loading from "../Components/Loader/Loading";
import ErrorPage from "../Components/Shared/ErrorPage";
import PrivateRoute from "./PrivatesRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><AddFoods></AddFoods></PrivateRoute>
      },
      {
        path: 'available-food',
        element: <AvailableFoods></AvailableFoods>
      },
      {
        path: 'update-foods/:id',
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({params})=> fetch(`http://localhost:3000/foods/${params.id}`),
        element: <PrivateRoute><UpdateFoods></UpdateFoods></PrivateRoute>
      },
      {
        path: 'food-details/:id',
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({params})=> fetch(`http://localhost:3000/foods/${params.id}`),
        element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
      },
      {
        path: 'manage-foods',
        element: <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>
      },
      {
        path: 'food-request',
        element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
      }

    ]
  },
]);

export default router
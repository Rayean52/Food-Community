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
        path: 'available-food',
        element: <AvailableFoods></AvailableFoods>
      },
      {
        path: 'update-foods/:id',
        element: <UpdateFoods></UpdateFoods>
      },
      {
        path: 'food-details/:id',
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({params})=> fetch(`http://localhost:3000/foods/${params.id}`),
        element: <FoodDetails></FoodDetails>
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
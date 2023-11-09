import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Bookings from "../components/Bokings/Bookings";
import Aboute from "../components/Aboute/Aboute";
import Private from "../components/private/Private";
import SignIn from "../components/sign-in/SignIn";
import Register from "../components/register/Register";
import RoomsContainer from "../components/Rooms/RoomsContainer";
import Details from "../components/details/Details";
import Error from "../components/error/Error";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/rooms",
            element:<RoomsContainer></RoomsContainer>,
            loader:()=>fetch('http://localhost:5000/rooms')
        },
        {
            path:"/bookings",
            element:<Private><Bookings></Bookings></Private>
        },
        {
            path:"/aboute",
            element:<Aboute></Aboute>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
        }
      ]
    },
  ]);

  export default router
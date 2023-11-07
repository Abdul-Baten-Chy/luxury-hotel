import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route';
import MyContext from './components/context/MyContex';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div >
    <React.StrictMode>
    <MyContext>
    <RouterProvider router={router} />
    </MyContext>
    </React.StrictMode>,
  </div>
)

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Invest from "../pages/Invest";
import { createBrowserRouter } from "react-router-dom";

 export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {index:true,element:<Home/>},
            {path:"/invest",element:<Invest/>}
        ]
    }
])
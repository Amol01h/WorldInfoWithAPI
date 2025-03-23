// import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { AppLayout } from "./Components/Layout/AppLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import { Country } from "./Pages/Country";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { ErrorPage } from "./Pages/ErrorPage";
import { CountryDetail } from "./Components/Layout/CountryDetail";



const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<ErrorPage />,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      path:"about",
      element:<About />
    },
    {
      path:"country",
      element:<Country/>
    },
    {
      path:"country/:id",
      element:<CountryDetail />
    },
    {
      path:"contact",
      element:<Contact />
    }]
  }
  
])
export const App = () =>{
  return<RouterProvider router={router}></RouterProvider>
}
export default App;
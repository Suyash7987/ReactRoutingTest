// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Product from "./components/Product.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/Signup.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <SignUp />,
      },
    ],
    errorElement: (
      <div>
        <h1>Url not found</h1>
      </div>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
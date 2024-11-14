import React from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Issue from "./pages/Issue";
import Books from "./pages/Books";
import Error from "./pages/Error";
import Navbar from "./components/navbar";
import Students from "./pages/Students";

const Paragraph = () => {
    return(
        <div className="NewPara">
            <h1>Hello MIET</h1>
            <h3>Student Book Issue Portal</h3>
        </div>
    )
}

const App = () => {
    return(
        <div className="app">
            <Navbar />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

            {
                path: "/",
                element: <Paragraph />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/students",
                element: <Students />
            },
            {
                path: "/issue",
                element: <Issue />
            },
        ],
        errorElement: <Error />
    }
])

const heading = React.createElement("h1", {}, "Hello MIET LBST by React");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)

// root.render(<App />)

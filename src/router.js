import {createBrowserRouter} from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home/Home.jsx";

export const router = createBrowserRouter([{
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
}])
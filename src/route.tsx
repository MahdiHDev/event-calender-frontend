import { createBrowserRouter } from "react-router";
import AuthLayout from "./allLayouts/AuthLayout";
import MainLayout from "./allLayouts/MainLayout";
import EventCategory from "./pages/EventCategory";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";

export const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/events", element: <Events /> },
            { path: "/event-category", element: <EventCategory /> },
            { path: "/users", element: <Users /> },
        ],
    },
    {
        element: <AuthLayout />,
        children: [{ path: "/login", element: <Login /> }],
    },
]);

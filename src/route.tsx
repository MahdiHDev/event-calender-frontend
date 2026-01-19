import { createBrowserRouter } from "react-router";
import AuthLayout from "./allLayouts/AuthLayout";
import MainLayout from "./allLayouts/MainLayout";
import EventCategory from "./pages/eventCategory/EventCategory";
import CreateEvents from "./pages/events/CreateEvents";
import EditEvents from "./pages/events/EditEvents";
import Events from "./pages/events/Events";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateUser from "./pages/users/CreateUser";
import UpdateUser from "./pages/users/UpdateUser";
import Users from "./pages/users/Users";

export const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/events", element: <Events /> },
            { path: "/events/create", element: <CreateEvents /> },
            { path: "/events/edit", element: <EditEvents /> },
            { path: "/event-category", element: <EventCategory /> },
            { path: "/users", element: <Users /> },
            { path: "/users/create", element: <CreateUser /> },
            { path: "/users/edit", element: <UpdateUser /> },
        ],
    },
    {
        element: <AuthLayout />,
        children: [{ path: "/login", element: <Login /> }],
    },
]);

import type { RouteObject } from "react-router-dom";
import AuthLayout from "./allLayouts/AuthLayout";
import MainLayout from "./allLayouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

export const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [{ path: "/", element: <Home /> }],
    },
    {
        element: <AuthLayout />,
        children: [{ path: "/login", element: <Login /> }],
    },
];

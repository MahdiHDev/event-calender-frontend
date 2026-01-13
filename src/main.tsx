import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./App.css";
import "./index.css";
import { routes } from "./route.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);

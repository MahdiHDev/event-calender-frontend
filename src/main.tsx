import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import { routes } from "./route.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={routes} />
            </PersistGate>
        </Provider>
    </StrictMode>,
);

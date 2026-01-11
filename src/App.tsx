import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./route";

function App() {
    return useRoutes(routes);
}

export default App;

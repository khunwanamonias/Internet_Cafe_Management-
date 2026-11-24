import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/customers"
                    element={<Customers />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
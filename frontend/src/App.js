import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register/Register.jsx";

 
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </Router>
    );
}
 
export default App;
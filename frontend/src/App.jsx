import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Navbar from "./Pages/Components/Navbar.jsx";
import Register from "./Pages/Register/Register.jsx";

 
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><Navbar></Navbar><Home></Home></> } />
                <Route path="/Register" element={<><Navbar /><Register /></>} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    );
}
 
export default App;
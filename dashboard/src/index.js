import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import protectRoute from "./components/protectRoute";
import ProtectedRoute from "./components/protectRoute";
import {GeneralContextProvider} from "./components/GeneralContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GeneralContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/*" element={
                                          <ProtectedRoute>
                                             <Home />
                                         </ProtectedRoute>
                                     } />
                </Routes>
            </BrowserRouter>
        </GeneralContextProvider>
    </React.StrictMode>
);

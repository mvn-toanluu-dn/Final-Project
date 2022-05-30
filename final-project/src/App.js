import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./core/guards/PrivateRoute";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home/*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TripsList} from "./pages/TripsList/TripsList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Layout } from './pages/Layout/Layout';
import {UpdateTrip} from "./pages/UpdateTrip/UpdateTrip";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<TripsList />} />
                    <Route path="blogs" element={<UpdateTrip />} />
                </Route>
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;

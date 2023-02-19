import React from 'react'
import { Route, Routes } from "react-router-dom";
import StockDetails from '../Components/StockDetails';
import StocksList from '../Components/StocksList';

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<StocksList />} />
                <Route path="/details/:id" element={<StockDetails/>} />
            </Routes>
        </div>
    )
}

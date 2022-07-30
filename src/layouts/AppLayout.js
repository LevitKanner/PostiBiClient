import React from 'react';
import {Outlet} from "react-router-dom";
import AppHeader from "../components/AppHeader";

const AppLayout = () => {
    return (
        <main className="min-h-screen max-w-7xl mx-auto">
            <AppHeader/>
            <Outlet/>
        </main>
    )
};

export default AppLayout;
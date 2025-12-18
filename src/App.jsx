import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Privacy from './pages/Privacy';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout currentPageName="Home"><Home /></Layout>} />
            <Route path="/privacy" element={<Layout currentPageName="Privacy"><Privacy /></Layout>} />
        </Routes>
    );
}

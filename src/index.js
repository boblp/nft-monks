import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BulkGenerator from './pages/BulkGenerator';
import NftBuilder from './pages/NftBuilder';
import PoolAnalytics from './pages/PoolAnalytics';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="bulk_generator" element={<BulkGenerator />} />
        <Route path="nft_builder" element={<NftBuilder />} />
        <Route path="pool_analytics" element={<PoolAnalytics />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

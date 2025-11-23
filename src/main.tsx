/*
 * main.tsx
 * Vite/React entry point
 * Mounts the Portfolio component into the root DOM element
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './Portfolio';

// Create root React tree and render Portfolio
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portfolio /> {/* Main app component */}
  </React.StrictMode>
);

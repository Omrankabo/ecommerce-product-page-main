import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SidebarProvider from './context/SidebarContext';
import CartProvider from './context/CartContext';
import OverlayProvider from './context/OverlayContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OverlayProvider>
    <CartProvider>
      <SidebarProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SidebarProvider>
    </CartProvider>
  </OverlayProvider>
   
);

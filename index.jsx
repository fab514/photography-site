import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import App from './src/App';
import Home from './src/Components/Home';
import About from './src/Components/About';
import Contact from './src/Components/Contact';
import Details from './src/Components/Details';
import Gallery from './src/Components/Gallery';

const router = createBrowserRouter(
    createRoutesFromChildren(
        <>
            <Route path="/" element={<App />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="details" element={<Details />} />
            <Route path="gallery" element={<Gallery />} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
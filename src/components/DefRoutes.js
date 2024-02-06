import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Analytics from '../pages/Analytics';
import Overview from '../pages/Overview';

// Component defining the application routes and structure
function DefRoutes() {
    // Create a BrowserRouter instance with specified routes and elements
    const router = createBrowserRouter([
        {
          path: '/',
          element: <NavBar />,
          children: [
            { path: '/', element: <Overview /> },
            { path: '/analytics', element: <Analytics /> },
          ],
        },
      ]);

  // Provide the router context to the application using RouterProvider
  return (
   <> <RouterProvider router={router}/></>
  );
}

export default DefRoutes;

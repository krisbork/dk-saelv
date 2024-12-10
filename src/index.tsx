import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import {routes} from "./routes/routes";
import {hydrate, render} from "react-dom";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(
  rootElement as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: routes
    }
])

// @ts-ignore
if (rootElement.hasChildNodes()) {
    hydrate(<React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>, rootElement);
} else {
    render(<React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>, rootElement);
}

// root.render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import Privatlivspolitik from "../pages/privatlivspolitik/Privatlivspolitik";
import Home from "../pages/home/Home";
import Om from "../pages/om/Om";
import Faq from "../pages/faq/Faq";

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/faq",
        element: <Faq />,
    },
    {
        path: "/privatlivspolitik",
        element: <Privatlivspolitik />,
    },
    {
        path: "/om",
        element: <Om />,
    },
]
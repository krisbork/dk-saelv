import React from 'react';
import {useRouteError} from "react-router-dom";
import "./ErrorPage.css";
import NavBar from "../../components/nav-bar/NavBar";

function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);
    
    return (
        <>
            <NavBar />
            <div className="error-page">
                <h1>Hov!</h1>
                <p>Undskyld, der skete en uventet fejl.</p>
                <p>
                    <i>404</i>
                </p>
            </div>
        </>
    );
}

export default ErrorPage;
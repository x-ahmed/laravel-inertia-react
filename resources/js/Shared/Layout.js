import React, { useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Layout({ children }) {
    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    React
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <InertiaLink className="nav-item nav-link" href="/">Home</InertiaLink>
                        <InertiaLink className="nav-item nav-link" href="/about">About</InertiaLink>
                        <InertiaLink className="nav-item nav-link" href="/contact">Contact</InertiaLink>
                    </div>
                </div>
            </nav>
            <header></header>
            <article>{children}</article>
        </main>
    );
}

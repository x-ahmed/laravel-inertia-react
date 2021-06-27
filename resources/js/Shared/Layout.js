import React, { useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Layout({ children, flash }) {
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
                        <InertiaLink className="nav-item nav-link" href="/">
                            Home
                        </InertiaLink>
                        <InertiaLink
                            className="nav-item nav-link"
                            href="/about"
                        >
                            About
                        </InertiaLink>
                        <InertiaLink
                            className="nav-item nav-link"
                            href="/contact"
                        >
                            Contact
                        </InertiaLink>
                    </div>
                </div>
            </nav>
            <div className="container my-3">
                {flash.message && (
                <div
                    className={`alert alert-${flash.type} alert-dismissible fade show`}
                    id="session-alerts"
                    role="alert"
                >
                    {flash.message}
                    <button
                        type="button"
                        onClick={(e) =>
                            e.target.parentNode.parentNode.parentNode.removeChild(
                                e.target.parentNode.parentNode
                            )
                        }
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                )}
                {children}
            </div>
        </main>
    );
}

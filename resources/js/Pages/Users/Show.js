import React from "react";
import Layout from "../../Shared/Layout";
import { InertiaLink } from "@inertiajs/inertia-react";
import { InertiaHead } from "@inertiajs/inertia-react";

const Show = ({ errors, flash, user }) => (
    <Layout flash={flash}>
        <InertiaHead title={user.name} />
        <div className="card">
            <div className="card-header">Show User</div>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                    {user.email}
                </p>
                <a href="/users" className="btn btn-primary">
                    Users table
                </a>
            </div>
        </div>
    </Layout>
);
export default Show;

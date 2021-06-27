import React, { useState, useEffect } from "react";
import Layout from "../../Shared/Layout";
import { Inertia } from "@inertiajs/inertia";
import { InertiaHead } from "@inertiajs/inertia-react";

const Edit = ({ errors, flash, user }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    useEffect(() => {
        setForm((form => ({
            ...form,
            ...user
        })))
    }, [])

    const change = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setForm((form) => ({
            ...form,
            [key]: value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        Inertia.patch(`/users/${user.id}`, form);
    };

    return (
        <Layout flash={flash}>
            <InertiaHead title="new user" />
            <div className="justify-content-center">
                <form id="edit" onSubmit={submit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="nameHelp"
                            value={form.name}
                            placeholder="valid name address"
                            onChange={change}
                        />
                        {errors.name && (
                            <div>
                                <span className="text-danger">
                                    {errors.name}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            value={form.email}
                            placeholder="valid email address"
                            onChange={change}
                        />
                        {errors.email && (
                            <div>
                                <span className="text-danger">
                                    {errors.email}
                                </span>
                            </div>
                        )}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>
            </div>
        </Layout>
    );
};
export default Edit;

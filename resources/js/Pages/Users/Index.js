import React from "react";
import Layout from "../../Shared/Layout";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { InertiaHead } from "@inertiajs/inertia-react";

const Index = ({ errors, flash, users }) => (
    <Layout flash={flash}>
        <InertiaHead title="users" />
        <InertiaLink className="mb-3 btn btn-info btn-lg" href={"users/create"}>
            New User
        </InertiaLink>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <InertiaLink
                                className="mx-1 btn btn-outline-primary btn-md"
                                href={`users/${user.id}/edit`}
                            >
                                Edit
                            </InertiaLink>
                            <InertiaLink
                                className="mx-1 btn btn-outline-danger btn-md"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if(!!confirm('are you sure?')){
                                        Inertia.delete(`users/${user.id}`);
                                    }
                                }}
                                href={`users/${user.id}`}
                            >
                                Delete
                            </InertiaLink>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Layout>
);
export default Index;

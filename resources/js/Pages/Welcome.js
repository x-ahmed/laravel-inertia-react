import React from 'react'
import Layout from '../Shared/Layout'
import { InertiaHead } from '@inertiajs/inertia-react'

export default function Welcome(props) {
    return (
        <Layout>
            <InertiaHead title="Welcome" />
            <h1>Welcome</h1>
            <p>welcome to your first Inertia app!</p>
        </Layout>
    )
}

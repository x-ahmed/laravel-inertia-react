import React from 'react'
import Layout from '../Shared/Layout'
import { InertiaHead } from '@inertiajs/inertia-react'

export default function About(props) {
    return (
        <Layout>
            <InertiaHead title="About" />
            <h1>About</h1>
            <p>welcome to your about Inertia app!</p>
        </Layout>
    )
}

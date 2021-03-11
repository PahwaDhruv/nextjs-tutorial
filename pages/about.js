import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import Layout from '../components/layout';

const About = () => {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <h1>About US</h1>
            <Link href="/"><a>Home</a></Link>
        </Layout>
    )
}
export default About;
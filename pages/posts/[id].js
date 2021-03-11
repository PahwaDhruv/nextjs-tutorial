import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Post({post}) {
    console.log(post);
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>{post.title}</h1>
                <p>{post.body}</p>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const paths = posts.map(post => {
        return {
            params : {
                id : post.id.toString()
            }
        }
    })
    return {
        paths,
        fallback : false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
    return {
        props : {
            post
        }
    }
}
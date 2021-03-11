import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Dhruv Pahwa';
export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home}) => {
    return(
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
                <meta name="description" content = "Learn to create a Blog"></meta>
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
            {
                home ? (
                    <>
                        <Image src="/images/profile.jpg" height={200} width={200} alt={name}></Image>
                        <h1 className={utilStyles.heading2X1}>{name}</h1>
                    </>
                ) : (
                    <>
                    <Link href="/">
                        <a>
                            <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={108}
                            width={108}
                            alt={name}
                            />
                        </a>
                    </Link>
                        <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                        </h2>
                    </>
                )
            }
            </header>
            <main>{ children }</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
        </div>
    )
}

export default Layout;
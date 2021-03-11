import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home({posts}) {
  console.log(posts);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Web Developer</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map((posts) => (
            <li className={utilStyles.listItem} key={posts.id}>
              <Link href={`/posts/${posts.id}`}><a>{posts.title}</a></Link>
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  console.log("posts -> ",posts);
  return {
    props : {
      posts
    }
  }
}

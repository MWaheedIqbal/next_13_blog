import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

import { posts } from './data/posts' 

const inter = Inter({ subsets: ['latin'] })

type Post = {
  id: string,
  title: string,
  date: string
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}><h1>Home</h1></div>
      <div>
        {posts.map(({id, title, date}: Post) => (
          <>
            <Link href="/posts">{title}</Link>
            <br />
            <p>{date}</p>
            <br />
          </>
        ))}

      </div>
      <Link href="/posts">
        Posts 
      </Link>
      <Link href="/account">
        Accounts  
      </Link>
    </main>
  );
}

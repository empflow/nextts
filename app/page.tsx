import Link from 'next/link'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <Link href="/about">About page</Link>
    </main>
  )
}

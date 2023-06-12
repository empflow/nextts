import styles from './page.module.css'


export default function Home() {
  return (
    <>
    <h1 className={styles.pageTitle}>Home page</h1>

    <section className="news-container">
      <h2 className={styles.newsTitle}>News</h2>

      <ul>
        <li>Helicopter shot down</li>
        <li>house prices on the rise</li>
        <li>Helicopter shot down</li>
      </ul>
    </section>
    </>
  )
}

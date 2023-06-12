import styles from "./styles.module.css";


export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <nav className={styles.navbar}>This navbar is specific to /about directory</nav>
    <main>
      <p>This is some text inside the 'main' element also specific to /about directory.</p>
      <p>Below are all the children</p>
      { children }
    </main>
    </>
  )
}
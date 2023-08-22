import Link from 'next/link'
import { Product } from './components/Product'
import styles from './page.module.css'

const Header = () => {
  return (
    <header>
      <h1>Stark App</h1>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/profile/address">Address</Link>
    </header>
  )
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       {/* <h1>Stark App</h1> */}
       <Header/>
       <section>
        <Product name={'Mobile'}/>
        <br/><br/>
        <Product name={'Clothing'}/>
        <br/><br/>
        <Product name={'Electronics'}/>
        <br/><br/>
       </section>
      </div>
    </main>
  )
}

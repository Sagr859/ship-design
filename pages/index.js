import Head from 'next/head'
import Image from 'next/image'
import Glance from '../components/mainpage/home'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='backgroundImageDiv'>
          <img src="/dummyYatchBG.jpg" alt="Picture of the author" />
        </div>
        
      <div className={styles.content}>
        <Glance/>
      </div>
    </div>
  )
}

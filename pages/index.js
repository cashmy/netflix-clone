/** Comments
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2023-01-13 13:38:03
 * @modify date 2023-01-13 19:03:32
 * @desc [Home/Index - Component for the Netflix clone app]
 */
//#region //* Imports
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner/banner'
import NavBar from '../components/navBar/navBar'
import SectionCards from '../components/card/sectionCards'
import { getVideos } from '../lib/videos'
//#endregion

const inter = Inter({ subsets: ['latin'] })

// * Main Component UI (Home Page)
export default function Home() {
  const disneyVideos = getVideos();
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="A portfolio project that clones the basic functionality of the Netflix app. It uses NextJS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar userName="cmyers880@gmail.com" />
      <Banner
        title="Clifford the Big Red Dog"
        subtitle="A big red dog with a big heart."
        imgUrl="/static/clifford.webp"
      />

      <main className={styles.main}>
        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size='large'/>
        </div>
        {/* <SectionCards title="Trending Now" videos={[0,1]} size='small'/>
        <SectionCards title="Top Rated" videos={[0,1,2,3]} size='medium' /> */}

        {/* 
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      */}
      </main>
    </>
  )
}

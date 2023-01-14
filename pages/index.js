/** Comments
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2023-01-13 13:38:03
 * @modify date 2023-01-14 10:13:20
 * @desc [Home/Index - Component for the Netflix clone app]
 */
//#region //* Imports
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner/banner'
import NavBar from '../components/navBar/navBar'
import SectionCards from '../components/card/sectionCards'
import { getVideos } from '../lib/videos'
//#endregion

const inter = Inter({ subsets: ['latin'] })


export async function getServerSideProps() {
  const disneyVideos = await getVideos('disney trailer');
  const travelVideos = await getVideos('travel');
  const productivityVideos = await getVideos('productivity');
  const popularVideos = await getVideos('popular');
  return { props: { disneyVideos, travelVideos, productivityVideos, popularVideos } }
}

// * Main Component UI (Home Page)
export default function Home({ disneyVideos, travelVideos, productivityVideos, popularVideos }) {
  // console.log({disneyVideos})
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="A portfolio project that clones the basic functionality of the Netflix app. It uses NextJS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Banner
        title="Clifford the Big Red Dog"
        subtitle="A big red dog with a big heart."
        imgUrl="/static/clifford.webp"
      />

      <main className={styles.main}>
        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size='large' />
        </div>
        <SectionCards title="Travel" videos={travelVideos} size='small'/>
        <SectionCards title="Productivity" videos={productivityVideos} size='medium' />
        <SectionCards title="Popular" videos={popularVideos} size='small' />
      </main>
    </>
  )
}

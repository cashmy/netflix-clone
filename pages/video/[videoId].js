//#region //* Imports
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Video.module.css'
//#endregion

//#region //* Server Side Code
// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
// export async function getStaticPaths() {
//   const paths = []
//   return { paths, fallback: false } 
// }
//#endregion

const Video = ({ video }) => {
  //#region //* State
  const router = useRouter()
  const { videoId } = router.query
  //#endregion

  //#region //* Effects
  useEffect(() => {}, [])
  //#endregion

  //#region //* Handler Functions
  //#endregion

  return (
    <div>Video</div>
  )
}
export default Video;
//#region //* Imports
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NavBar from '../../components/navBar/navBar'
import Modal from 'react-modal'
import styles from '../../styles/Video.module.css'
import clsx from 'classnames'
import { getYoutubeVideoById } from '../../lib/videos'
//#endregion

//#region //* Server Side Code
export async function getStaticProps(context) {
  const videoId = context.params.videoId
  const video = await getYoutubeVideoById(videoId);
  return {
    props: { video,}, // will be passed to the page component as props
    revalidate: 10, // In seconds
  }
}

export async function getStaticPaths() {
  const listOfVideos = ['mYfJxlgR2jw', '4zH5iYM4wJo', 'bKh2G73gCCs']
  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }))
  return { paths, fallback: "blocking" } 
}
//#endregion

Modal.setAppElement('#__next')

const Video = ({ video }) => {
  //#region //* State
  const router = useRouter()
  const { videoId } = router.query
  const [toggleLike, setToggleLike] = useState(false);
  const [toggleDisLike, setToggleDisLike] = useState(false);
  const {
    title,
    publishTime,
    description,
    channelTitle,
    statistics: { viewCount } = { viewCount: 0 },
  } = video[0];
  //#endregion

  //#region //* Effects
  useEffect(() => {}, [])
  //#endregion

  //#region //* Handler Functions
  //#endregion

  return (
    <div className={styles.container}>
      <NavBar />
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          id="ytplayer"
          className={styles.videoPlayer}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=0`}
        />

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>

          </div>

        </div>

      </Modal>
    </div>
  )
}
export default Video;
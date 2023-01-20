//#region //* Imports
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NavBar from '../../components/navBar/navBar'
import Modal from 'react-modal'
import styles from '../../styles/Video.module.css'
import clsx from 'classnames'
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

Modal.setAppElement('#__next')

const Video = () => {
  //#region //* State
  const router = useRouter()
  const { videoId } = router.query
  const [toggleLike, setToggleLike] = useState(false);
  const [toggleDisLike, setToggleDisLike] = useState(false);
  const video = {
    title: "Video Title",
    publishTime: "Published on 1/1/2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta lorem mollis aliquam ut porttitor leo. In hac habitasse platea dictumst. Morbi tristique senectus et netus et malesuada fames ac. Viverra adipiscing at in tellus integer feugiat. Vitae ultricies leo integer malesuada nunc. Facilisis mauris sit amet massa vitae tortor. Vitae auctor eu augue ut lectus. Enim tortor at auctor urna nunc id cursus metus aliquam. Sapien et ligula ullamcorper malesuada proin libero. Mauris vitae ultricies leo integer malesuada nunc vel. Vitae elementum curabitur vitae nunc sed velit. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Consectetur adipiscing elit ut aliquam. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Diam vel quam elementum pulvinar etiam non. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Auctor eu augue ut lectus arcu bibendum.",
    channelTitle: "Channel Title",
    statistics: { viewCount: 1000 },
  }
  const {
    title,
    publishTime,
    description,
    channelTitle,
    statistics: { viewCount } = { viewCount: 0 },
  } = video;
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
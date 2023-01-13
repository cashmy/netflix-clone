import React from 'react'
import Image from 'next/image';
import styles from './banner.module.css'

const banner = (props) => {
  const { title, subtitle, imgUrl } = props;

  const handleOnPlay = () => {
    alert('Play')
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>F I L M</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay} >
              <Image src="/static/play_arrow.svg" alt="Play" width={32} height={32} />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
    </div>
  )
}

export default banner
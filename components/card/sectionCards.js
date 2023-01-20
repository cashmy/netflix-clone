/**
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2023-01-13 16:22:05
 * @modify date 2023-01-20 16:18:31
 * @desc [SectionCards - Component for the Netflix clone app]
 */
//#region //* Imports
import React from 'react'
import Card from './card'
import Link from 'next/link'
import styles from './sectionCards.module.css'
//#endregion

const SectionCards = (props) => {
  //#region //* State variables, Props Destructing, etc.
  const { title, videos = [], size = "medium" } = props;
  //#endregion
  
  //#region //* Event Handlers
  //#endregion
  

  // * Main Component UI ()
  return (
    <section className={styles.container} >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper} >
        {videos.map((video, index) => {
          return(
            <Link href={`/video/${video.id}`} key={video.id} >
              <Card 
                id={index} 
                imgUrl={video.imgUrl} 
                size={size}
                /> 
            </Link>
          )
        })}


      </div>
    </section>
  )
}

export default SectionCards

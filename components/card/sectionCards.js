/**
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2023-01-13 16:22:05
 * @modify date 2023-01-13 19:32:33
 * @desc [SectionCards - Component for the Netflix clone app]
 */
//#region //* Imports
import React from 'react'
import Card from './card'
import styles from './sectionCards.module.css'
//#endregion

const SectionCards = (props) => {
  //#region //* State variables, Props Destructing, etc.
  const { title, videos = [], size = "medium" } = props;
  //#endregion
  
  //#region //* Event Handlers
  //#endregion
  
  // console.log({videos})

  // * Main Component UI ()
  return (
    <section className={styles.container} >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper} >
        {videos.map((video, index) => {
          return(
            <Card key={index} id={index} imgUrl={video.imgUrl} size={size} /> 
          )
        })}


      </div>
    </section>
  )
}

export default SectionCards

/**
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2023-01-13 16:22:05
 * @modify date 2023-01-13 16:32:52
 * @desc [SectionCards - Component for the Netflix clone app]
 */
//#region //* Imports
import React from 'react'
import Card from './card'
import styles from './sectionCards.module.css'
//#endregion

const SectionCards = (props) => {
  //#region //* State variables, Props Destructing, etc.
  const { title, size = "medium" } = props;
  //#endregion

  //#region //* Event Handlers
  //#endregion


  // * Main Component UI ()
  return (
    <section className={styles.container} >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card imgUrl="/static/clifford.webp" size="large" /> 
        <Card imgUrl="/static/clifford.webp" size="medium" />
        <Card imgUrl="" size="medium" /> 
        <Card imgUrl="/static/clifford.webp" size="small" />
      </div>
    </section>
  )
}

export default SectionCards

/** Comments
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2023-01-13 13:34:26
 * @modify date 2023-01-13 16:02:36
 * @desc [Card - Component for the Netflix clone app]
 */

//#region //* Imports
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'
import { motion } from 'framer-motion'
import cls from 'classnames';
//#endregion

const Card = (props) => {
  //#region //* State variables, Props Destructing, etc.
  const { imgUrl = "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", size = "medium" } = props;
  const [imgSrc, setImgSrc] = useState(imgUrl);
  const classMap = {
    'large': styles.lgItem,
    'medium': styles.mdItem,
    'small': styles.smItem,
  }
  //#endregion

  // * Main Component UI
  return (
    <div
      className={styles.container}
    >
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ scale: 1.2 }}
      >
        <Image
          src={imgSrc}
          alt="video image for card"
          fill
          className={styles.cardImg}
          onError={() => setImgSrc("https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")}
        />
      </motion.div>
    </div>

  )
}

export default Card
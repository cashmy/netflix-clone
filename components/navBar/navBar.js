import React from 'react'
import styles from './navBar.module.css'

const NavBar = (props) => {
  const { userName } = props;
  return (
    <div className={styles.container} >
      <div className={styles.wrapper} >
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper} >Netflix</div>
        </a>

      <ul className={styles.navItems}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem2}>My List</li>
      </ul>
      <nav  className={styles.navContainer}>
        <div >
          <button className={styles.userNameBtn}>
            <p className={styles.userName}>{userName}</p>
            {/* //TODO Expand more icon */}
          </button>
          <div className={styles.navDropdown}>
            <div>
            <a className={styles.linkName}>Sign out</a>
            <div className={styles.lineWrapper}></div>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default NavBar
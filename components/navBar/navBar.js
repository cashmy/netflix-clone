import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navBar.module.css';
import ExpandMoreIcon from '../../public/static/expand_more.svg';
import ExpandLessIcon from '../../public/static/expand_less.svg';

const NavBar = (props) => {
  //#region //* State variables, Props Destructing, etc.
  const { userName } = props;
  const router = useRouter();
  const [showDropDown, setShowDropDown] = useState(false);
  //#endregion

  //#region //* Handler functions
  const handleOnClickHome = (event) => {
    event.preventDefault();
    router.push('/');
  }
  const handleOnClickMyList = (event) => {
    event.preventDefault();
    router.push('/browse/my-list');
  }
  const handleDropDown = (event) => {
    event.preventDefault();
    setShowDropDown(!showDropDown);
  }
  //#endregion

  // * Main Component UI
  return (
    <div className={styles.container} >
      <div className={styles.wrapper} >
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper} >
            <Image src="/static/netflix.svg" alt="Netflix Logo" width={124} height={38} />
            </div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>My List</li>
        </ul>
        <nav className={styles.navContainer}>
          <div >
            <button className={styles.userNameBtn} onClick={handleDropDown}>
              <p className={styles.userName}>{userName}</p>
              {/* //TODO Expand more icon */}
              <Image 
                src={showDropDown ? ExpandLessIcon : ExpandMoreIcon} 
                alt="Expand Dropdown Icon" 
                width={24} 
                height={24} />
            </button>
            {showDropDown &&
              <div className={styles.navDropdown}>
                <div>
                  <Link className={styles.linkName} href="/login">
                    Sign out
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            }
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
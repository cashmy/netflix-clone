/** Comments
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2023-01-13 13:32:35
 * @modify date 2023-01-20 16:19:22
 * @desc [NavBar - Component for the Netflix clone app]
 */

//#region //* Imports
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navBar.module.css';
import ExpandMoreIcon from '../../public/static/expand_more.svg';
import ExpandLessIcon from '../../public/static/expand_less.svg';
import { magic } from '../../lib/magicClient';
//#endregion

const NavBar = () => {
  //#region //* State variables, Props Destructing, etc.
  const [userName, setUserName] = useState('');
  const router = useRouter();
  const [showDropDown, setShowDropDown] = useState(false);
  //#endregion
  
  //#region // *Effect
  useEffect(() => {
    async function getUserName() {
      try {
        const { email } = await magic.user.getMetadata();
        if (email) {
          setUserName(email);
        }
      } catch (error) {
        console.log('Error retrieving email.' , error);
        // router.push("/login")
      }
    }
    getUserName();
  }, [])
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
  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      await magic.user.logout();
    } catch (error) {
      console.error("Error logging out user.", error)
    }
    router.push('/login');
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
                  <Link 
                    className={styles.linkName} 
                    href="/login"
                    onClick={handleSignOut}
                  >
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
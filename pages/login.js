/**
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2023-01-13 21:49:33
 * @modify date 2023-01-13 22:43:42
 * @desc [Login Screen - nested route in NextJS]
 */
//#region Imports
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
//#endregion


const Login = () => {
  //#region // *State
  const [email, setEmail] = useState('')
  const [userMsg, setUserMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  //#endregion

  //#region // *Effect
  useEffect(() => { }, [])
  //#endregion

  //#region // *Handler Functions
  const handleOnChangeEmail = (e) => {
    setUserMsg('')
    const email = e.target.value;
    setEmail(email)
  }

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    if (email) {
      if (email === 'cmyers880@gmail.com') {
        router.push('/')
      } else {
        setUserMsg('Invalid email address')
            }
    } else {
      setUserMsg('Please enter your email address')
      return
    }

  }
  //#endregion

  // * Main render
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      
      {/* //& Page Header */}
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128"
                height="34"
              />
            </div>
          </Link>
        </div>
      </header>

      {/* //& Page Main */}
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input 
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />
          <p className={styles.userMsg}>{userMsg}</p>
          <button 
            onClick={handleLoginWithEmail} 
            className={styles.loginBtn}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </main>
      
    </div>
  )
}

export default Login
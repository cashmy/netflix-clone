/** Comments
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2023-01-14 10:41:32
 * @modify date 2023-01-14 12:05:05
 * @desc [App - Component for the Netflix clone app - This is the main component for the app. 
 * It is the parent of all other components. It handles the initial check for logged-in users
 * ]
 */
//#region //* Imports
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { magic } from '../lib/magicClient'
import '../styles/globals.css'
import Loading from "../components/loading/Loading"
//#endregion

export default function App({ Component, pageProps }) {
  //#region //* State variables, Props Destructing, etc.
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  //#endregion

  //#region // *Effect
  // ? Check if user is logged in
  useEffect(() => {
    // const handleLoggedIn = async () => {
    //   const isLoggedIn = await magic.user.isLoggedIn()
    //   if (isLoggedIn) {
    //     router.push('/')        // Home Page
    //   } else {
    //     router.push('/login')   // Login Page
    //   }
    // }
    // handleLoggedIn()
  }, [])
  
  // ? Handle loading state
  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  //#endregion

  return isLoading ? <Loading /> : <Component {...pageProps} />
}

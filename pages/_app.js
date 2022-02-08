import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react'
import axios from 'axios';
axios.defaults.baseURL = 'https://reilitics-be.herokuapp.com/api';

axios.defaults.headers.common['Authorization'] = `Bearer ${item}`;




function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const item = localStorage.getItem('token')
  }
  
  return <Component {...pageProps} />
}

export default MyApp

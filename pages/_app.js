import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import axios from 'axios';
axios.defaults.baseURL = 'https://reilitics-be.herokuapp.com/api';




function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // alert('1')
      // Perform localStorage action
      const item = localStorage.getItem('token')

      axios.defaults.headers.common['Authorization'] = `Bearer ${item}`;
    }
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp

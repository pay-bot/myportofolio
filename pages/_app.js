
import 'tailwindcss/tailwind.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import "../assets/app.css";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'



export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
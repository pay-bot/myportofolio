
import 'tailwindcss/tailwind.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import "../assets/app.css";



export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
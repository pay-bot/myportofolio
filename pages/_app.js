
import 'tailwindcss/tailwind.css'
import "../assets/app.css";
import Wrapper from '../layouts/Wrapper';



export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}
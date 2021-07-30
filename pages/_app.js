
import 'tailwindcss/tailwind.css'
import "../assets/app.css";
import Wrapper from '../layouts/Wrapper';
import { appWithTranslation } from 'next-i18next';



const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}

export default appWithTranslation(MyApp);
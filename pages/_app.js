
import 'tailwindcss/tailwind.css'
import "../assets/app.css";
import Wrapper from '../layouts/Wrapper';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 160,
    });
  }, []);
  return (
    <>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}

export default appWithTranslation(MyApp);
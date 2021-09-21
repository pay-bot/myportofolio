import 'tailwindcss/tailwind.css';
import '../assets/app.css';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';

import AOS from 'aos';
import Wrapper from '../layouts/Wrapper';
import 'aos/dist/aos.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100
    });
  }, []);
  return (
    <>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
};

export default appWithTranslation(MyApp);

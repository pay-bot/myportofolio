import 'tailwindcss/tailwind.css';
import '../assets/app.css';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';

import AOS from 'aos';
import Wrapper from '../layouts/Wrapper';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import store from '../features/store';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 50,
      once: true

    });
  }, []);


  return (
    <>
      <Provider store={store}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Provider>
    </>
  );
};

export default appWithTranslation(MyApp);

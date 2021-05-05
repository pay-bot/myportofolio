import { withRouter } from 'next/router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



function Wrapper({ children }) {





  return (

    <>
      <Navbar />
      <main className="flex-grow p-8 dark:bg-gray-700">{children}

      </main>
      <Footer>© 2021 Build with Nextjs & Tailwind</Footer>

    </>
  )
    ;
}

export default withRouter(Wrapper);
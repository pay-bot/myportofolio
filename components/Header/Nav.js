import Navitems from "./Navitems";
import classnames from "classnames";
import { useRouter } from 'next/router';

import en from '../../locales/en';
import id from '../../locales/id';

export default function Nav({ dir }) {
  const dirs = {
    horizontal: "justify-center z-50 md:flex hidden lg:space-x-10 md:space-x-8",
    vertical: "flex-col z-50 text-center h-screen items-center space-y-16 justify-center text-3xl"
  }
  const pickedDir = dirs[dir];

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : id;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="md:flex items-center z-50 ">
      <ul className={classnames("flex my-4 capitalize md:mx-auto ", pickedDir)}>
        <Navitems href="/">HOME</Navitems>
        <Navitems href="/project">{t.project}</Navitems>
        <Navitems href="/blog">BLOG</Navitems>
      </ul >

    </div>
  )
}
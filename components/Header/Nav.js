import Navitems from "./Navitems";
import classnames from "classnames";
import { useRouter } from 'next/router';

import en from '../../locales/en';
import id from '../../locales/id';

export default function Nav({ dir }) {
  const dirs = {
    horizontal: "justify-around space-x-10",
    vertical: "flex-col space-y-6 z-50"
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
    <div className="lg:flex items-center z-50 dark:bg-gradient-to-r dark:from-blue-gray-900 dark:via-purple-900 dark:to-blue-gray-900">
      <ul className={classnames("flex my-6 capitalize lg:mx-auto mr-0", pickedDir)}>
        <Navitems href="/">HOME</Navitems>
        <Navitems href="/about">{t.about}</Navitems>
        <Navitems href="/skills">{t.skills}</Navitems>
        <Navitems href="/project/">{t.project}</Navitems>
        <Navitems href="/blog">BLOG</Navitems>
      </ul >

    </div>
  )
}
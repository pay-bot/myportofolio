import classnames from 'classnames';
import Navitems from './Navitems';

export default function Nav({ dir }) {
  const dirs = {
    horizontal:
      'justify-center z-50 my-4 md:flex hidden lg:space-x-10 md:space-x-8',
    vertical:
      'flex flex-col z-50 text-center items-center space-y-16 justify-center text-3xl'
  };
  const pickedDir = dirs[dir];

  return (
    <ul className={classnames('capitalize', pickedDir)}>
      <Navitems href="/">HOME</Navitems>
      <Navitems href="/experience">EXPEREINCE</Navitems>
      <Navitems href="/portofolio">PORTOFOLIO</Navitems>
      <Navitems href="/blog">BLOG</Navitems>
    </ul>
  );
}

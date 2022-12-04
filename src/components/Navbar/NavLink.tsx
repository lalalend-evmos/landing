import { FC } from 'react';
import Link from 'next/link';
import cx from 'classnames';

const NavLink: FC<{
  name?: string;
  to: string;
  active?: boolean;
}> = ({ name, to, active, children }) => {
  const linkClassName = cx(
    'font-light text-lg hover:no-underline hover:text-primary dark:hover:no-underline dark:hover:text-white capitalize',
    active
      ? 'text-primary dark:text-white'
      : 'text-stieglitz dark:text-wave-blue'
  );
  if (to.startsWith('http')) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={children ? '' : linkClassName}
      >
        {children ? children : name}
      </a>
    );
  } else {
    return (
      <Link href={to}>
        <a className={children ? '' : linkClassName}>
          {children ? children : name}
        </a>
      </Link>
    );
  }
};

export default NavLink;

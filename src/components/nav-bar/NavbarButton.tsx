import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface Props extends PropsWithChildren {
  to: string;
  isCurrent: boolean;
}

export const NavbarButton = ({ to, isCurrent, children }: Props) => (
  <Link
    to={to}
    className={`${
      isCurrent
        ? 'bg-gray-900 text-white '
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }"  rounded-md px-3 py-2 text-m font-semibold"`}
  >
    {children}
  </Link>
);

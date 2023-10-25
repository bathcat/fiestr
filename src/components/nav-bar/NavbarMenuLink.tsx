import { Link } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { NavigationMenuLink } from '@components/ui/navigation-menu';

interface Props extends PropsWithChildren {
  to: string;
}

export const NavbarMenuLink = ({ to, children, ...props }: Props) => (
  <Link
    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    to={to}
    {...props}
  >
    <NavigationMenuLink>{children}</NavigationMenuLink>
  </Link>
);

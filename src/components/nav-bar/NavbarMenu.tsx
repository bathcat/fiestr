import { NavbarMenuLink } from './NavbarMenuLink';
import { RouteInfo } from '../../routes';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren{
  links:Array<RouteInfo>;
}

export const NavbarMenu = ({links,children}:Props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{children}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              {links.map(info => (
                <li key={info.title}>
                  <NavbarMenuLink to={info.path}>{info.title}</NavbarMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

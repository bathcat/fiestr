import { NavbarMenuLink } from './NavbarMenuLink';
import { demoRoutes } from '../../routes';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export const NavbarDemoMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Demos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              {Object.values(demoRoutes).map(info => (
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

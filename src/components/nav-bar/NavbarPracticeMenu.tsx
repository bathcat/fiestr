import { NavbarMenuLink } from './NavbarMenuLink';
import { practiceRoutes } from '../../routes';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export const NavbarPracticeMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Practice</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              {Object.values(practiceRoutes).map(info => (
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

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { PropsWithChildren } from 'react';

const decks = [
  { title: 'Introductions', path: '/slides/00.Introductions.pdf' },
  { title: 'Overview', path: '/slides/01.Overview.pdf' },
  { title: 'Components', path: '/slides/02.Components.pdf' },
  { title: 'State', path: '/slides/03.State.pdf' },
  { title: 'Effects', path: '/slides/04.Effects.pdf' },
  { title: 'Quality', path: '/slides/05.Quality.pdf' },
];

interface Props extends PropsWithChildren{
  href:string;
}

export const NavbarSlideDeckLink = ({ href, children, ...props }: Props) => (
  <a
    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    href={href}
    target="_blank"
    {...props}
  >
    {children}
  </a>
);

export const NavbarSlidesMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Slides</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              {decks.map(d => (
                <li key={d.title}>
                  <NavbarSlideDeckLink href={d.path}>
                    {d.title}
                  </NavbarSlideDeckLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

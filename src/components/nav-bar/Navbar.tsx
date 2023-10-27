import { NavbarButton } from './NavbarButton';
import { NavbarDemoMenu } from './NavbarDemoMenu';
import { NavbarMenu } from './NavbarMenu';
import { NavbarPracticeMenu } from './NavbarPracticeMenu';
import { NavbarSlidesMenu } from './NavbarSlidesMenu';
import { routes,demoRoutes,practiceRoutes } from '@/routes';

export const Navbar = () => (
  <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <span className="h9 w-auto text-4xl contrast-50 brightness-50">
              🎉
            </span>
          </div>

          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <NavbarButton
                to={routes.Home.path}
                isCurrent={false}
              >
                Home
              </NavbarButton>
              <NavbarButton
                to={routes.Playground.path}
                isCurrent={false}
              >
                Playground
              </NavbarButton>
              <NavbarMenu links={Object.values(practiceRoutes)}>
                Practice
              </NavbarMenu>
              <NavbarMenu links={Object.values(demoRoutes)}>
                Demos
              </NavbarMenu>
              <NavbarSlidesMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

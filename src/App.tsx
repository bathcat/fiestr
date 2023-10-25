import { Navbar } from './components/nav-bar/Navbar.tsx';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@components/theme/theme-provider.tsx';

export function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

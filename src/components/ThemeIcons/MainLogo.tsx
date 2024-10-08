import { useTheme } from '../../contexts/ThemeContext';

export const MainLogo = () => {
  const { theme } = useTheme();

  return theme === 'light' ? (
    <img
      src="img/icons/nice-gadgets-logo.svg"
      alt="Logo"
      className="block w-23 h-9 sm:w-20 sm:h-7 sm:my-4.5 transition-transform duration-500 hover:scale-110"
    />
  ) : (
    <img
      src="img/icons/main-favicon-white.svg"
      alt="Logo"
      className="block w-23 h-9 sm:w-20 sm:h-7 sm:my-4.5 transition-transform duration-500 hover:scale-110"
    />
  );
};

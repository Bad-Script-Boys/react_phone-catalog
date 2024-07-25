import { useTheme } from '../../contexts/ThemeContext';

export const ThemeIcon = () => {
  const { theme } = useTheme();

  return theme === 'light' ? (
    <img
      src="img/icons/nice-gadgets-logo.svg"
      alt="Logo"
      className="ml-6 sm:ml-4 block w-16 h-6 my-4 sm:w-20 sm:h-7 sm:my-4.5 transition-transform duration-500 hover:scale-110"
    />
  ) : (
    <img
      src="img/icons/main-favicon-white.svg"
      alt="Logo"
      className="ml-6 sm:ml-4 block w-16 h-6 my-4 sm:w-20 sm:h-7 sm:my-4.5 transition-transform duration-500 hover:scale-110"
    />
  );
};

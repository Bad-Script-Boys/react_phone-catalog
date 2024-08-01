import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="mr-3 lg:block cursor-pointer p-2 rounded-full bg-gray-200 dark:bg-gray-700 border-2 dark:border-gray-500 border-[#323542] transition-transform duration-500 hover:scale-110 h-full"
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <FaMoon size={20} className="text-gray-800" />
      ) : (
        <FaSun size={20} className="text-yellow-600" />
      )}
    </div>
  );
};

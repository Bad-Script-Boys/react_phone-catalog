import { useTheme } from '../../contexts/ThemeContext';

export const FavoriteLogo = () => {
  const { theme } = useTheme();

  return theme === 'light' ? (
    <div className="flex items-center justify-center h-7 w-7 transition-all duration-500 hover:scale-110">
      <img
        src="img/icons/favourites-logo.svg"
        alt="Favorites"
        className="h-5 w-5"
      />
    </div>
  ) : (
    <div className="flex items-center justify-center h-7 w-7 transition-all duration-500 hover:scale-110">
      <img
        src="img/icons/favorites-logo-white.svg"
        alt="Favorites"
        className="h-5 w-5"
      />
    </div>
  );
};

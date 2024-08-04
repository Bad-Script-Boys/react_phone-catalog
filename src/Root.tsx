import { App } from './App';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import { Phones } from './pages/Phones';
import Favourites from './pages/Favourites';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';
import DeveloperProfiles from './pages/Contacts/Contacts';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { GlobalStateProvider } from './Store';
import { ThemeProvider } from './contexts/ThemeContext';

export const Root = () => (
  <GlobalStateProvider>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path="phones">
              <Route index element={<Phones />} />
              <Route path=":itemId?" element={<ProductDetails />} />
            </Route>

            <Route path="tablets">
              <Route index element={<Tablets />} />
              <Route path=":itemId?" element={<ProductDetails />} />
            </Route>

            <Route path="accessories">
              <Route index element={<Accessories />} />
              <Route path=":itemId?" element={<ProductDetails />} />
            </Route>

            <Route path="contacts">
              <Route index element={<DeveloperProfiles />} />
            </Route>

            <Route path="favourites" element={<Favourites />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </GlobalStateProvider>
);

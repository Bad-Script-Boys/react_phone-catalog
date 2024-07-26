import { App } from './App';
// import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Phones from './pages/Phones';
import Favourites from './pages/Favourites';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Tablets from './pages/Tablets';
import Accessories from './pages/Accessories';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

export const Root = () => (
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

        <Route path="favourites" element={<Favourites />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  </Router>
);

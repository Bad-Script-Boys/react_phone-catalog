import { useReducer, createContext, Dispatch } from 'react';
import { Product } from './types/Product';

export type Action =
  | { type: 'setProducts'; payload: Product[] }
  | { type: 'addToFavorites'; payload: { itemId: string } }
  | { type: 'removeFromFavorites'; payload: { itemId: string } }
  | {
      type: 'addToBasket';
      payload: { itemId: string; price: number; name: string; image: string };
    }
  | { type: 'removeFromBasket'; payload: { itemId: string } }
  | { type: 'removeAllFromBasket'; payload: { itemId: string } }
  | { type: 'deleteOneItem'; payload: { itemId: string; quantity: number } }
  | { type: 'addOneItem'; payload: { itemId: string; quantity: number } }
  | { type: 'setBasketItem'; payload: { itemId: string; quantity: number } };

export type State = {
  products: Product[];
  favorites: string[];
  basket: {
    itemId: string;
    quantity: number;
    price: number;
    image: string;
    name: string;
  }[];
};

const FAVORITES_GOODS = 'FAVORITES_GOODS';
const BASKET = 'BASKET';

const favoritesArr = localStorage.getItem(FAVORITES_GOODS);
const basketArr = localStorage.getItem(BASKET);

const initialState: State = {
  products: [],
  favorites: favoritesArr === null ? [] : JSON.parse(favoritesArr),
  basket: basketArr === null ? [] : JSON.parse(basketArr),
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setProducts':
      return {
        ...state,
        products: action.payload,
      };

    case 'addToFavorites': {
      const newState = {
        ...state,
        favorites: [...state.favorites, action.payload.itemId],
      };
      localStorage.setItem(FAVORITES_GOODS, JSON.stringify(newState.favorites));
      return newState;
    }

    case 'removeFromFavorites': {
      const newState = {
        ...state,
        favorites: state.favorites.filter(
          item => item !== action.payload.itemId,
        ),
      };
      localStorage.setItem(FAVORITES_GOODS, JSON.stringify(newState.favorites));
      return newState;
    }

    case 'addToBasket': {
      const index = state.basket.findIndex(
        item => item.itemId === action.payload.itemId,
      );
      const basket = [...state.basket];
      if (index === -1) {
        basket.push({
          itemId: action.payload.itemId,
          quantity: 1,
          price: action.payload.price,
          image: action.payload.image,
          name: action.payload.name,
        });
      } else {
        basket[index] = {
          ...basket[index],
          quantity: basket[index].quantity + 1,
        };
      }
      const newState = { ...state, basket };
      localStorage.setItem(BASKET, JSON.stringify(newState.basket));
      return newState;
    }

    case 'removeFromBasket': {
      const newState = {
        ...state,
        basket: state.basket.filter(
          item => item.itemId !== action.payload.itemId,
        ),
      };
      localStorage.setItem(BASKET, JSON.stringify(newState.basket));
      return newState;
    }

    case 'removeAllFromBasket': {
      const newState = {
        ...state,
        basket: state.basket.filter(
          item => item.itemId !== action.payload.itemId,
        ),
      };
      localStorage.setItem(BASKET, JSON.stringify(newState.basket));
      return newState;
    }

    case 'deleteOneItem': {
      const index = state.basket.findIndex(
        item => item.itemId === action.payload.itemId,
      );
      const item = state.basket[index];
      let basket = [...state.basket];
      if (item && item.quantity === 1) {
        basket = basket.filter(el => el.itemId !== action.payload.itemId);
      } else if (item) {
        basket[index] = {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      const newState = { ...state, basket };
      localStorage.setItem(BASKET, JSON.stringify(newState.basket));
      return newState;
    }
    case 'addOneItem': {
      const index = state.basket.findIndex(
        item => item.itemId === action.payload.itemId,
      );
      const basket = [...state.basket];
      basket[index] = {
        ...basket[index],
        quantity: basket[index].quantity + 1,
      };
      const newState = { ...state, basket };
      localStorage.setItem(BASKET, JSON.stringify(newState.basket));
      return newState;
    }

    case 'setBasketItem': {
      const basket = state.basket.map(item =>
        item.itemId === action.payload.itemId
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
      const newState = { ...state, basket };
      localStorage.setItem(BASKET, JSON.stringify(newState.basket));
      return newState;
    }

    default:
      return state;
  }
};

export const StateContext = createContext<State>(initialState);
export const DispatchContext = createContext<Dispatch<Action>>(() => {});

type Props = {
  children: React.ReactNode;
};

export const GlobalStateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

import { useReducer, createContext } from 'react';
import { Product } from './types/Product';

export type Action =
  | { type: 'setProducts'; payload: Product[] }
  | { type: 'addToFavorites'; payload: { itemId: string } }
  | { type: 'removeFromFavorites'; payload: { itemId: string } }
  | { type: 'addToBasket'; payload: { itemId: string; price: number } }
  | { type: 'removeFromBasket'; payload: { itemId: string } }
  | { type: 'removeAllFromBasket'; payload: { itemId: string } }
  | { type: 'deleteOneItem'; payload: { itemId: string; quantity: number } }
  | { type: 'addOneItem'; payload: { itemId: string; quantity: number } }
  | { type: 'setBasketItem'; payload: { itemId: string; quantity: number } };

export type State = {
  products: Product[];
  favorites: string[];
  basket: { itemId: string; quantity: number; price: number }[];
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

type InitialDispatch = (action: Action) => void;

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
      let basket = [];

      const index = state.basket.findIndex(
        item => item.itemId === action.payload.itemId,
      );

      if (index === -1) {
        basket = [
          ...state.basket,
          {
            itemId: action.payload.itemId,
            quantity: 1,
            price: action.payload.price,
          },
        ];
      } else {
        basket = [...state.basket];
        basket[index] = {
          itemId: action.payload.itemId,
          quantity: basket[index].quantity + 1,
          price: action.payload.price,
        };
      }

      const newState = {
        ...state,
        basket,
      };

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
      let basket = [];

      const index = state.basket.findIndex(
        item => item.itemId === action.payload.itemId,
      );

      const item = state.basket.find(el => el.itemId === action.payload.itemId);

      if (item?.quantity === 1) {
        basket = state.basket.filter(el => el.itemId !== action.payload.itemId);
      } else {
        basket = [...state.basket];
        basket[index] = {
          ...basket[index],
          itemId: action.payload.itemId,
          quantity: basket[index].quantity - 1,
        };
      }

      const newState = {
        ...state,
        basket,
      };

      localStorage.setItem(BASKET, JSON.stringify(newState.basket));

      return newState;
    }

    case 'addOneItem': {
      let basket = [];

      basket = [...state.basket];

      const index = state.basket.findIndex(
        item => item.itemId === action.payload.itemId,
      );

      basket[index] = {
        ...basket[index],
        itemId: action.payload.itemId,
        quantity: basket[index].quantity + 1,
      };

      const newState = {
        ...state,
        basket,
      };

      localStorage.setItem(BASKET, JSON.stringify(newState.basket));

      return newState;
    }

    default:
      return state;
  }
};

export const StateContext = createContext(initialState);
export const DispatchContext = createContext<InitialDispatch>(() => {});

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

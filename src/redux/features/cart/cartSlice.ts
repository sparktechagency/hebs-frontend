import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface Price {
  amount: number;
  currency: string;
}

interface DiscountPrice {
  type: string;
  amount: number;
  currency: string;
}

export interface TBook {
  _id: string;
  name: string;
  author: string;
  description: string;
  isDiscount: boolean;
  format: string;
  quantity: number;
  status: string;
  isArabic: boolean;
  bookLanguage: string;
  level: string;
  coverImage: string;
  weight: number;
  summary: string;
  price: Price;
  discountPrice: DiscountPrice;
  category: string | null;
  grade: string | null;
  bookCollection: string | null;
}
export interface CartProduct extends TBook {
  orderQuantity: number;
}
interface InitialState {
  products: CartProduct[];
}
const initialState: InitialState = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      }

      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
    incrementOrderQuantity: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToIncrement) {
        productToIncrement.orderQuantity += 1;
        return;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToIncrement && productToIncrement.orderQuantity > 1) {
        productToIncrement.orderQuantity -= 1;
        return;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

//* Products

export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};

export const orderSelector = (state: RootState) => {
  return {
    products: state.cart.products.map((product) => ({
      product: product._id,
      quantity: product.orderQuantity,
    })),

    paymentMethod: "Online",
  };
};

//* Payment

export const subTotalSelector = (state: RootState) => {
    return state.cart.products.reduce((acc, product) => {
      if (product.discountPrice.amount) {
        console.log(product.discountPrice.amount);
        return acc + product.discountPrice.amount * product.orderQuantity;
      } else {
        console.log(product.price, "Price");
        return acc + product.price.amount * product.orderQuantity;
      }
    }, 0);
  };


export const {
  addProduct,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeProduct,

  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

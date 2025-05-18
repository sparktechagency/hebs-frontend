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
// select order
export const orderSelector = (state: RootState) => {
  return {
    products: state.cart.products.map((product) => ({
      product: product._id,
      quantity: product.orderQuantity,
    })),

    // paymentMethod: "Online",
  };
};
// total quantity
export const totalQuantitySelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => acc + product.orderQuantity, 0);
};

export const totalActualPriceSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    return acc + product.price.amount * product.orderQuantity;
  }, 0);
};


// Total Discount Selector
// export const totalDiscountSelector = (state: RootState) => {
//   console.log("total discount===>",state);
//   return state.cart.products.reduce((acc, product) => {
//     if (product.discountPrice.amount) {
//       return acc + product.discountPrice.amount * product.orderQuantity;
//     }
//     return acc;
//   }, 0);
// };
export const totalDiscountSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    console.log("Product:", product.name);
    console.log("isDiscount:", product.isDiscount);
    console.log("discountPrice.amount:", product.discountPrice.amount);

    if (product.isDiscount && product.discountPrice.amount > 0) {
      const discount = (product.price.amount * product.discountPrice.amount) / 100;
      console.log("Calculated discount per unit:", discount);
      return acc + discount * product.orderQuantity;
    }
    return acc;
  }, 0);
};





// Final Price After Discount Selector (with discount handling)
// export const finalPriceAfterDiscountSelector = (state: RootState) => {
//   return state.cart.products.reduce((acc, product) => {

//     const finalPrice = product?.discountPrice?.amount
//       ? product?.price?.amount - product?.discountPrice?.amount
//       : 0; 

//     return acc + finalPrice * product?.orderQuantity;
//   }, 0);
// };
export const finalPriceAfterDiscountSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    const discount = product.isDiscount ? (product.price.amount * product.discountPrice.amount) / 100 : 0;
    const finalPrice = product.price.amount - discount;
    return acc + finalPrice * product.orderQuantity;
  }, 0);
};







// Total Products Selector (Total number of items in the cart)
export const totalProductsSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => acc + product.orderQuantity, 0);
};
//* Payment

// export const subTotalSelector = (state: RootState) => {
//     return state.cart.products.reduce((acc, product) => {
//       if (product?.discountPrice?.amount) {
//         console.log("discount price ",product.discountPrice.amount);
//         return acc + product.discountPrice.amount * product.orderQuantity;
//       } else {
//         console.log(product.price, "Price");
//         return acc + product.price.amount * product.orderQuantity;
//       }
//     }, 0);
//   };
export const subTotalSelector = (state: RootState) => {
  const total = state.cart.products.reduce((acc, product) => {
    return acc + product.price.amount * product.orderQuantity;
  }, 0);

  const discount = totalDiscountSelector(state);

  return total - discount;
};


  export const {
    addProduct,
    incrementOrderQuantity,
    decrementOrderQuantity,
    removeProduct,
    clearCart,
  } = cartSlice.actions;
  export default cartSlice.reducer;

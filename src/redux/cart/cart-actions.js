import { AddItem, CartActionTypes } from "./cart-types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: AddItem.ADD_ITEM,
  payload: item,
});

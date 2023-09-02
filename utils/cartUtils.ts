import { CartItem } from "@/types/product";

export function calculateTotalPrice(cartItems: CartItem[]): number {
  let totalPrice = 0;
  for (const cartItem of cartItems) {
    totalPrice += cartItem.product.price * cartItem.count;
  }
  return totalPrice;
}

export function newCart(cartItem: CartItem, cart: CartItem[]) {
  const existingItem = cart.find(
    (item) => item.product.id === cartItem.product.id
  );
  if (existingItem) {
    existingItem.count += cartItem.count;
  } else {
    cart.push(cartItem);
  }
  return cart;
}

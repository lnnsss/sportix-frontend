import { makeAutoObservable } from 'mobx';

class CartStore {
    cartItems = [];
    totalPrice = 0

    constructor() {
        makeAutoObservable(this);
    }

    setCartItems = (newCartItems) => {
        this.cartItems = newCartItems
    }

    addToCart = (item) => {
        const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            this.cartItems[existingItemIndex].count += 1;
        } else {
            this.cartItems.push({ ...item, count: 1 });
        }
    }

    removeFromCart = (itemId) => {
        this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    }

    changeCount = (itemId, newCount) => {
        const itemIndex = this.cartItems.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            if (newCount > 0) {
                this.cartItems[itemIndex].count = newCount;
            } else {
                this.removeFromCart(itemId);
            }
        }
    }
    changeTotalPrice = (price) => {
        this.totalPrice = this.totalPrice + price
    }
}

export default new CartStore();

import { makeAutoObservable } from 'mobx';

class CartStore {
    cartItems = [
        {
            id: 1,
            name: 'Футболка',
            price: 25,
            brand: 'Nike',
            category: 'Одежда',
            gender: 'Мужской',
            image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            quantity: 1,
        },
        {
            id: 2,
            name: 'Кроссовки',
            price: 80,
            brand: 'Adidas',
            category: 'Обувь',
            gender: 'Женский',
            image: 'https://images.unsplash.com/photo-1606107557195-0a29a5b4aa16?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            quantity: 2,
        },
    ];;

    constructor() {
        makeAutoObservable(this);
    }

    addToCart = (item) => {
        const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            this.cartItems[existingItemIndex].quantity += 1;
        } else {
            this.cartItems.push({ ...item, quantity: 1 });
        }
    }

    removeFromCart = (itemId) => {
        this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    }

    changeQuantity = (itemId, newQuantity) => {
        const itemIndex = this.cartItems.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            if (newQuantity > 0) {
                this.cartItems[itemIndex].quantity = newQuantity;
            } else {
                this.removeFromCart(itemId);
            }
        }
    }
}

export default new CartStore();
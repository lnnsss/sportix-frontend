import tokenStore from "./token-store.js";
import catalogStore from "./catalog-store.js";
import cartStore from "./cart-store.js";

class RootStore {
    token = tokenStore
    catalog = catalogStore
    cart = cartStore
}

export default RootStore;
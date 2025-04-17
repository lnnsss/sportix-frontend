import { makeAutoObservable } from 'mobx';

class CatalogStore {
    products = [];
    priceRange = { min: 0, max: 99999 };
    brand = '';
    category = '';
    gender = '';

    constructor() {
        makeAutoObservable(this);
    }

    setProducts = (newProducts) => {
        this.products = newProducts
    }

    setPriceRange = (newRange) => {
        this.priceRange = newRange;
    }

    setBrand = (newBrand) => {
        this.brand = newBrand;
    }

    setCategory = (newCategory) => {
        this.category = newCategory;
    }

    setGender = (newGender) => {
        this.gender = newGender;
    }

    resetFilters = () => {
        this.priceRange = { min: 0, max: 1000 };
        this.brand = '';
        this.category = '';
        this.gender = '';
    }
}

export default new CatalogStore();
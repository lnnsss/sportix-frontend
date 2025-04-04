import { makeAutoObservable } from 'mobx';

class CatalogStore {
    priceRange = { min: 0, max: 99999 };
    brand = '';
    category = '';
    gender = '';

    constructor() {
        makeAutoObservable(this);
    }

    setPriceRange = (range) => {
        this.priceRange = range;
    }

    setBrand = (brand) => {
        this.brand = brand;
    }

    setCategory = (category) => {
        this.category = category;
    }

    setGender = (gender) => {
        this.gender = gender;
    }

    resetFilters = () => {
        this.priceRange = { min: 0, max: 1000 };
        this.brand = '';
        this.category = '';
        this.gender = '';
    }
}

export default new CatalogStore();
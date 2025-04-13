import { makeAutoObservable } from 'mobx';

class AccountStore {
    email = ""
    password = ""
    name = ""
    lastName = ""

    constructor() {
        makeAutoObservable(this);
    }

    setEmail = (newEmail) => {
        this.email = newEmail;
    }
    setPassword = (newPassword) => {
        this.password = newPassword;
    }
    setName = (newName) => {
        this.name = newName;
    }
    setLastName = (newLastName) => {
        this.lastName = newLastName;
    }

    clear = () => {
        this.email = "";
        this.password = "";
        this.name = "";
        this.lastName = "";
    }

}

export default new AccountStore();
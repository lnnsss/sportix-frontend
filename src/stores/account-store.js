import { makeAutoObservable } from 'mobx';

class AccountStore {
    email = "iluha777@gmail.com"
    password = "passworD123"
    name = "Илюха"
    lastName = "Офицеров"

    constructor() {
        makeAutoObservable(this);
    }

}

export default new AccountStore();
import { makeAutoObservable } from "mobx";
import Cookies from "js-cookie";

class TokenStore {
    token = '';
    isAdmin = false;

    constructor() {
        this.token = Cookies.get('jwt') || '';
        this.isAdmin = false;

        makeAutoObservable(this);
        this.updateRoles();
    }

    setToken = (newToken) => {
        this.token = newToken;
        Cookies.set('jwt', newToken, { secure: true, sameSite: 'Strict' });
        this.updateRoles();
    };

    clearToken = () => {
        this.token = '';
        Cookies.remove('jwt');
        this.isAdmin = false;
    };

    getID = () => {
        if (this.token) {
            try {
                const payload = JSON.parse(atob(this.token.split('.')[1]));
                return payload.id;
            } catch (error) {
                console.error("Ошибка при декодировании токена:", error);
                return undefined;
            }
        }
    };

    updateRoles = () => {
        if (this.token) {
            try {
                const payload = JSON.parse(atob(this.token.split('.')[1]));
                this.isAdmin = Array.isArray(payload.roles) && payload.roles.includes('ADMIN');
            } catch (error) {
                console.error("Ошибка при декодировании токена:", error);
                this.isAdmin = false;
            }
        }
    };

    hasRole = (role) => {
        if (this.token) {
            try {
                const payload = JSON.parse(atob(this.token.split('.')[1]));
                return Array.isArray(payload.roles) && payload.roles.includes(role);
            } catch (error) {
                console.error("Ошибка при проверке роли:", error);
                return false;
            }
        } else {
            return false;
        }
    };
}

export default new TokenStore();
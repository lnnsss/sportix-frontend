import { createContext, useContext } from "react";
import RootStore from "./root-store";

export const RootStoreContext = createContext(null);

export const useStores = () => {
    const context = useContext(RootStoreContext);

    if (context == null ) {
        throw new Error('useStores must be used within a RootStoreProvider.');
    }

    return context;
}
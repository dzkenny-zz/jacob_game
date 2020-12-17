import React from 'react';
import AppStore from './app';
const stores = {
    appStore: new AppStore()
};

export const storesContext = React.createContext(stores);

export const useStores = () => React.useContext(storesContext);

export type Stores = typeof stores;
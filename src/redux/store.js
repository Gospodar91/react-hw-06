import { combineReducers } from "redux";
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { mainReducer } from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
const rootReducer = combineReducers({
  contacts: mainReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
  blacklist: ["_persist",]
};



const persistedReducer = persistReducer(persistConfig, rootReducer);
// devToolsEnhancer())

export const store = configureStore({ reducer: persistedReducer,  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});
export const persistor = persistStore(store);

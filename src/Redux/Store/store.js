import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  dataInfoSlice,
} from "../Slices/mainSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["errorMessage"],
};
let rootReducer = combineReducers({
  dataInfo: dataInfoSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const clearPersistedState = () => {
  persistor.flush();
  persistor.purge();
  storage.removeItem("persist:root");
};

export const persistor = persistStore(store);

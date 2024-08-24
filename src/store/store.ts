import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Import localStorage for web
import localStore from "./LocalStore";
import modalFormReducer from "./slices/ModalFormSlice";
import { TodoApi } from "./services/features/TodoApi";

// Combine reducers, including the TodoApi reducer
const rootReducer = combineReducers({
  [TodoApi.reducerPath]: TodoApi.reducer,
  modalForm: modalFormReducer,
  localStore: localStore.reducer,
});

const persistConfig = {
  key: "root",
  storage, // Use localStorage for web
  whitelist: ["localStore"],
};

// Wrap the combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      TodoApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create persistor for persisting store
export const persistor = persistStore(store);

export default store;

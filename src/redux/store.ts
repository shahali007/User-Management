import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import reducers from "./reducers"; // auth

import { State as authState } from "./auth/reducer";

const persistConfig = {
	key: "root",
	storage: storage,
};

export const store = createStore(
	persistReducer(persistConfig, reducers),
	applyMiddleware(logger)
);

export const persistor = persistStore(store);

export interface RootState {
	auth: authState;
}

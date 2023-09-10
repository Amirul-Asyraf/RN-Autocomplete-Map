import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import autocompleteReducer from "../features/autocomplete/autocompSlice";
import autocompleteSaga from "../features/autocomplete/autocompSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		locations: autocompleteReducer,
	},
	middleware: [saga],
});

saga.run(autocompleteSaga);

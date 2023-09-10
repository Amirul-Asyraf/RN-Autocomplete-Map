import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	locations: [],
	searchTerm: "",
	placeId: "",
	preciseLocation: {},
	searchHistory: [],
	isLoading: false,
};

export const autocompleteSlice = createSlice({
	name: "locations",
	initialState,
	reducers: {
		getLocationsFetch: (state) => {
			state.isLoading = true;
		},
		getLocationsSuccess: (state, action) => {
			state.locations = action.payload;
			state.isLoading = false;
		},
		getLocationsFailure: (state) => {
			state.isLoading = false;
		},
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
		getSearchTerm: (state) => {
			state.isLoading = true;
		},
		setPlaceDetails: (state, action) => {
			state.placeId = action.payload;
		},
		getPreciseLocationSuccess: (state, action) => {
			state.preciseLocation = action.payload;
			state.isLoading = false;
		},
		setSavedLocations: (state, action) => {
			state.searchHistory.unshift(action.payload);
		},
		updateLocationsArrangement: (state, action) => {
			state.searchHistory = action.payload;
		},
	},
});

export const {
	getLocationsFetch,
	getLocationsSuccess,
	getLocationsFailure,
	setSearchTerm,
	getSearchTerm,
	setPlaceDetails,
	getPreciseLocationSuccess,
	setSavedLocations,
	updateLocationsArrangement,
} = autocompleteSlice.actions;

export const selectLocations = (state) => state.locations;
export default autocompleteSlice.reducer;

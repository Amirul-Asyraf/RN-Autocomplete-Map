import { call, put, takeEvery } from "redux-saga/effects";
import {
	getLocationsFailure,
	getLocationsSuccess,
	getPreciseLocationFailure,
	getPreciseLocationSuccess,
} from "./autocompSlice";
import { GOOGLE_PLACES_API_KEY } from "@env";

function* workGetLocationFetch(action) {
	try {
		if (action.payload) {
			const locations = yield call(() =>
				fetch(
					`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${action.payload}&types=geocode&key=${GOOGLE_PLACES_API_KEY}`
				)
			);
			const formattedLocations = yield locations.json();
			yield put(getLocationsSuccess(formattedLocations.predictions));
		}
	} catch (error) {
		yield put(getLocationsFailure(error.message));
	}
}

function* workGetLocationDetailsFetch(action) {
	try {
		if (action.payload) {
			const placeDetails = yield call(() =>
				fetch(
					`https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cgeometry&place_id=${action.payload}&key=${GOOGLE_PLACES_API_KEY}`
				)
			);
			const formattedPlaceDetails = yield placeDetails.json();
			const preciseLocation = formattedPlaceDetails?.result?.geometry?.location;
			yield put(getPreciseLocationSuccess(preciseLocation));
		}
	} catch (error) {
		yield put(getPreciseLocationFailure(error.message));
	}
}

function* autocompleteSaga() {
	yield takeEvery("locations/setSearchTerm", workGetLocationFetch);
	yield takeEvery("locations/setPlaceDetails", workGetLocationDetailsFetch);
}

export default autocompleteSaga;

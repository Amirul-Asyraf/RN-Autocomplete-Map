export const duplicatePlace = (history, place) => {
	// Check if the input location exists in the list based on place_id
	const index = history.findIndex(
		(location) => location.place_id === place.place_id
	);

	if (index !== -1) {
		// If the input location exists, remove it from the list
		const existingLocation = history[index];

		// Rearrange the array to move the existing location to the front
		history = [
			existingLocation,
			...history.slice(0, index),
			...history.slice(index + 1),
		];
	}

	// Return the updated list
	return history;
};

export const locationExists = (history, place) => {
	// Use .some() to check if any location has the same place_id as the place.place_id
	return history.some((location) => location.place_id === place.place_id);
};

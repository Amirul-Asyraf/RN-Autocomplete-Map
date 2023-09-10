import React, { useState } from "react";
import { View, FlatList, StyleSheet, Keyboard, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
	selectLocations,
	setSearchTerm,
	setPlaceDetails,
	setSavedLocations,
} from "./autocompSlice";
import { SearchBar, List } from "antd-mobile-rn";

const Item = List.Item;

const Autocomplete = () => {
	const [showList, setShowList] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	const { locations, searchTerm, preciseLocation, searchHistory } =
		useSelector(selectLocations);
	const dispatch = useDispatch();

	const handleInputChange = (text) => {
		setShowList(true);
		dispatch(setSearchTerm(text));
	};

	const handleOnCancel = () => {
		setShowList(false);
		handleInputChange("");
	};

	const handleLocationSelection = (place) => {
		setShowList(false);
		Keyboard.dismiss();
		dispatch(setSearchTerm(place.description));
		dispatch(
			setSavedLocations({
				description: place.description,
				place_id: place.place_id,
			})
		);
		dispatch(setPlaceDetails(place.place_id));
	};

	const locationItem = (item) => {
		const { item: place } = item;

		return (
			<Item onPressIn={() => handleLocationSelection(place)}>
				{place.description}
			</Item>
		);
	};

	const locationEmptyItem = (item) => {
		return (
			<Item>
				<Text style={styles.locationEmptyText}>No results found</Text>
			</Item>
		);
	};

	return (
		<View style={styles.container}>
			<View>
				<SearchBar
					value={searchTerm}
					placeholder="Search for a location"
					onChange={handleInputChange}
					cancelText="Cancel"
					onCancel={handleOnCancel}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>

				{searchTerm == "" && isFocused && searchHistory.length > 0 ? (
					<FlatList data={searchHistory} renderItem={locationItem} />
				) : (
					searchTerm &&
					showList && (
						<FlatList
							data={locations}
							renderItem={locationItem}
							ListEmptyComponent={locationEmptyItem}
						/>
					)
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		position: "absolute",
		top: 65,
		paddingHorizontal: 16,
	},
	locationEmptyText: {
		fontStyle: "italic",
		fontSize: 12,
	},
});

export default Autocomplete;

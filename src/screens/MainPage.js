import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { selectLocations } from "../features/autocomplete/autocompSlice";
import Map from "../features/map/Map";
import Autocomplete from "../features/autocomplete/Autocomplete";
import PlaceCard from "../common/components/PlaceCard";

const MainPage = () => {
	const { searchHistory } = useSelector(selectLocations);

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Map />
			<Autocomplete />

			{searchHistory.length > 0 && <PlaceCard />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});

export default MainPage;

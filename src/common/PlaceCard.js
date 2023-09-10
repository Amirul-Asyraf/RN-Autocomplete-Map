import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectLocations } from "../features/autocomplete/autocompSlice";
import { Card } from "antd-mobile-rn";

const PlaceCard = () => {
	const { searchHistory } = useSelector(selectLocations);
	const selectedPlace = searchHistory[0];

	const DATA = {
		dummy_description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	};

	return (
		<View style={styles.container}>
			<Card>
				<Card.Header
					title={
						<View style={styles.cardHeader}>
							<Text style={styles.cardHeaderText}>
								{selectedPlace?.description}
							</Text>
						</View>
					}
				/>
				<Card.Body>
					<View style={styles.cardBody}>
						<Text style={styles.cardBodyText}>{DATA.dummy_description}</Text>
					</View>
				</Card.Body>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		position: "absolute",
		bottom: 65,
		paddingHorizontal: 16,
	},
	cardHeader: {
		paddingVertical: 5,
	},
	cardHeaderText: {
		fontSize: 18,
	},
	cardBody: {
		paddingVertical: 10,
		paddingHorizontal: 16,
	},
	cardBodyText: {
		fontSize: 14,
	},
});

export default PlaceCard;

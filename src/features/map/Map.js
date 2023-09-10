import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { selectLocations } from "../autocomplete/autocompSlice";

const Map = () => {
	const refMapView = useRef(null);

	const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
		latitude: 3.715024812417902,
		longitude: 102.01289786475958,
	});

	const initialRegion = {
		latitude: 3.715024812417902,
		longitude: 102.01289786475958,
		latitudeDelta: 7.952150540642152,
		longitudeDelta: 4.6798066893368855,
	};

	const { preciseLocation } = useSelector(selectLocations);

	const onRegionChange = (region) => {
		//uncomment to detect region lat and lng
		// console.log("region: ", region);
	};

	const showLocation = (latitude, longitude) => {
		if ((latitude && longitude) !== undefined) {
			setTimeout(() => {
				refMapView.current &&
					refMapView.current.animateCamera({
						center: {
							latitude,
							longitude,
						},
						altitude: 18,
						zoom: 20,
					});
			}, 500);
		}
	};

	useEffect(() => {
		showLocation(preciseLocation.lat, preciseLocation.lng);
		setDraggableMarkerCoord({
			latitude: preciseLocation.lat,
			longitude: preciseLocation.lng,
		});
	}, [preciseLocation]);

	return (
		<MapView
			ref={refMapView}
			style={styles.map}
			onRegionChange={onRegionChange}
			initialRegion={initialRegion}
			initialCamera={{
				center: {
					latitude: draggableMarkerCoord.latitude,
					longitude: draggableMarkerCoord.longitude,
				},
				zoom: 20,
				heading: 0,
				pitch: 0,
				altitude: 16,
			}}
		>
			{preciseLocation && (
				<Marker
					draggable
					coordinate={{
						latitude:
							draggableMarkerCoord.latitude == undefined
								? 0
								: draggableMarkerCoord.latitude,
						longitude:
							draggableMarkerCoord.longitude == undefined
								? 0
								: draggableMarkerCoord.longitude,
					}}
					onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
				/>
			)}
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
});

export default Map;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "antd-mobile-rn";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up Yo.tsx to start working on your app!</Text>
			<Button type="primary">antd-mobile-rn button</Button>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

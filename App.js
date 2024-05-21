import {
	StyleSheet,
	View,
	FlatList,
	Text,
	Pressable,
	ImageBackground,
} from "react-native";
import { useState } from "react";
import Item from "./components/Item";
import Inputitem from "./components/Inputitem";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
	const [modalisVisible, setModalisVisible] = useState(false);
	const [Todo, setTodo] = useState([]);

	function startAddGoal() {
		setModalisVisible(true);
	}

	function endAddGoal() {
		setModalisVisible(false);
	}

	function handleButtonPress(enteredText) {
		setTodo(currentTodo => [
			...currentTodo,
			{ text: enteredText, id: Math.random().toString() },
		]);
		endAddGoal();
	}

	function deleteList(id) {
		setTodo(currentTodo => {
			return currentTodo.filter(goal => goal.id !== id);
		});
	}

	return (
		<View style={styles.container}>
			<ImageBackground
				source={{
					uri: "https://i.pinimg.com/originals/0a/cb/fc/0acbfc45203b7e4b612165de509b2fd4.jpg",
				}}
				style={styles.imageBackground}
			>
				<Text style={styles.allcontainer}>All Notes</Text>
			</ImageBackground>

			<Inputitem
				visible={modalisVisible}
				onhandleButtonPress={handleButtonPress}
				onCancel={endAddGoal}
			/>

			<FlatList
				data={Todo}
				style={styles.displayContainer}
				renderItem={itemData => {
					return (
						<Item
							id={itemData.item.id}
							text={itemData.item.text}
							onDeleteItem={deleteList}
						/>
					);
				}}
				keyExtractor={(item, index) => {
					return item.id;
				}}
			/>
			<View style={styles.button}>
				<Pressable onPress={startAddGoal}>
					<Icon
						name="add"
						size={35}
						color="white"
					/>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#003153",
	},
	imageBackground: {
		width: "100%",
		height: 200, // Adjust the height as needed
		justifyContent: "center",
		alignItems: "center",
	},
	allcontainer: {
		fontSize: 35,
		color: "white",
		backgroundColor: "rgba(128, 128, 128, 0.6)", // Optional: semi-transparent background
		padding: 10,
		borderRadius: 20,
	},
	displayContainer: {
		flex: 1,
		paddingTop: 40,
		paddingHorizontal: 20,
		borderTopWidth: 0.5,
		borderTopColor: "white",
	},
	button: {
		position: "absolute",
		bottom: 50,
		right: 30,
		backgroundColor: "#e30b5d",
		padding: 15,
		borderRadius: 50,
		elevation: 5,
	},
});

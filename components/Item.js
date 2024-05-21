import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Item(props) {
	const [isTextUnderlined, setIsTextUnderlined] = useState(false);

	const toggleUnderline = () => {
		setIsTextUnderlined(!isTextUnderlined);
	};

	return (
		<View style={styles.listItem}>
			<Pressable
				onPress={toggleUnderline}
				style={({ pressed }) => [
					styles.textContainer,
					pressed && styles.pressedTextContainer,
				]}
			>
				<Text
					style={[styles.listText, isTextUnderlined && styles.underlinedText]}
				>
					{props.text}
				</Text>
			</Pressable>
			<Pressable
				onPress={props.onDeleteItem.bind(this, props.id)}
				style={({ pressed }) => [
					styles.iconContainer,
					{ opacity: pressed ? 0.5 : 1.0 },
				]}
			>
				<Icon
					name="trash-bin"
					size={20}
					color="white"
				/>
			</Pressable>
		</View>
	);
}

export default Item;

const styles = StyleSheet.create({
	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		margin: 5,
		padding: 8,
		backgroundColor: "#007ba7",
		borderRadius: 5,
	},
	textContainer: {
		flex: 1,
	},
	pressedTextContainer: {
		backgroundColor: "#005e82",
	},
	listText: {
		padding: 8,
		color: "white",
		fontSize: 17,
		paddingHorizontal: 10,
	},
	underlinedText: {
		textDecorationLine: "line-through",
		color: "#d3d3d3",
	},
	iconContainer: {
		padding: 10,
	},
});

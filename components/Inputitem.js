import {
	StyleSheet,
	TextInput,
	Button,
	View,
	Modal,
	Image,
} from "react-native";
import { useState } from "react";

function Inputitem(props) {
	const [enteredText, setEnteredText] = useState("");

	function handleChangedText(text) {
		setEnteredText(text);
	}
	function handleButtonPress() {
		props.onhandleButtonPress(enteredText);
		setEnteredText("");
	}

	return (
		<Modal
			visible={props.visible}
			animationType="slide"
		>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/logo.png")}
				/>
				<View style={styles.textcontainer}>
					<TextInput
						placeholder="Input your Goals"
						style={styles.input}
						onChangeText={handleChangedText}
						value={enteredText}
					/>
				</View>
				<View style={styles.buttons}>
					<View style={styles.button}>
						<Button
							title="Add goal"
							onPress={handleButtonPress}
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Cancel"
							color="#e30b5d"
							onPress={props.onCancel}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default Inputitem;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#003153",
	},
	image: {
		margin: "25%",
		marginTop: 0,
		alignItems: "center",
	},
	textcontainer: {
		width: "80%",
	},
	input: {
		backgroundColor: "white",
		padding: 15,
		elevation: 2,
		borderRadius: 10,
	},
	buttons: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "center",
	},
	button: {
		margin: 20,
		width: "35%",
		backgroundColor: "black ",
	},
});

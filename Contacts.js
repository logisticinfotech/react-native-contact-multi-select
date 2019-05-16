import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

class App extends React.Components{
	constructor(){
		super();
		this.state = {
			isLoading : false,
			value:0,
		}
	}
	increaseValue = () => {
		this.setState(
				this.state.statevalue + 1
			);
	}
	render(){
		return(
			
				
					<View style={styles.container}>
						<Text style={styles.text}> Stateful Component!! </Text>
						<TouchableOpacity onPress={this.increaseValue}>
							<Text style={styles.text}>Increase</Text>
						</TouchableOpacity>
					</View>
				
			
		)
	}
}
export default App;
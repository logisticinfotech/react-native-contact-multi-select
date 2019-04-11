import React, { Component } from "react";
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, Image, TextInput } from "react-native";
import Contacts from "react-native-contacts";
import { styles } from "./ContactStyles";
import PropTypes from "prop-types";
export default class ContactScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contactList: [],
			selectedContact: [],
			text: ""
		};
		this.arrayholder = [];
	}
	componentDidMount() {
		const { otherContactList } = this.props;
		const arrFinal = [];
		Contacts.getAll((err, contacts) => {
			if (err) {
				throw err;
			}
			contacts.map(listItem => {
				arrFinal.push({ fullname: listItem.givenName + " " + listItem.familyName, phoneNumber: listItem.phoneNumbers[0].number, avatar: listItem.thumbnailPath });
			});
			if (otherContactList.length > 0) {
				otherContactList.map(listItem => {
					arrFinal.push(listItem);
				});
			}
			arrFinal.map((listItem, index) => {
				listItem.isSelected = false;
				listItem.id = index;
			});
			this.setState({ contactList: arrFinal });
			this.arrayholder = arrFinal;
		});
	}
	_renderSeparator = () => {
		const { sepratorStyle } = this.props;
		return <View style={[styles.sepratorStyle, sepratorStyle]} />;
	};
	getSelectedContacts = () => {
		const { selectedContact } = this.state;
		return selectedContact;
	};
	checkContact = item => {
		const { onContactSelected, onContactRemove } = this.props;
		let arrContact = this.state.contactList;
		let arrSelected = this.state.selectedContact;
		arrContact.map(listItem => {
			if (listItem.id === item.id) {
				listItem.isSelected = !item.isSelected;
			}
		});
		if (item.isSelected) {
			arrSelected.push(item);
			if (onContactSelected) {
				onContactSelected(item);
			}
		} else {
			if (onContactRemove) {
				onContactRemove(item);
			}
			arrSelected.splice(arrSelected.indexOf(item), 1);
		}

		this.setState({ contactList: arrContact, selectedContact: arrSelected });
	};
	checkExist = item => {
		const { onContactRemove } = this.props;
		let arrContact = this.state.contactList;
		let arrSelected = this.state.selectedContact;
		arrContact.map(listItem => {
			if (listItem.id === item.id) {
				listItem.isSelected = false;
			}
		});
		if (onContactRemove) {
			onContactRemove(item);
		}
		arrSelected.splice(arrSelected.indexOf(item), 1);
		this.setState({ contactList: arrContact, selectedContact: arrSelected });
	};
	_renderItem = ({ item }) => {
		const { viewCheckMarkStyle } = this.props;
		return (
			<TouchableOpacity onPress={() => this.checkContact(item)}>
				<View style={styles.viewContactList}>
					<Image defaultSource={require("../src/Resources/user.png")} source={{ uri: item.avatar }} style={styles.imgContactList} />
					<View style={{ flexDirection: "column", width: "60%" }}>
						<Text style={styles.txtContactList}>{item.fullname}</Text>
						<Text style={styles.txtPhoneNumber}>{item.phoneNumber}</Text>
					</View>
					{item.isSelected && <Image source={require("../src/Resources/check-mark.png")} style={[styles.viewCheckMarkStyle, viewCheckMarkStyle]} />}
				</View>
			</TouchableOpacity>
		);
	};
	_renderItemHorizontal = ({ item }) => {
		const { viewCloseStyle } = this.props;
		return (
			<View style={styles.viewSelectedContactList}>
				<View>
					<Image defaultSource={require("../src/Resources/user.png")} source={{ uri: item.avatar }} style={styles.imgSelected} />
					<TouchableOpacity style={[styles.viewCloseStyle, viewCloseStyle]} onPress={() => this.checkExist(item)}>
						<Image source={require("../src/Resources/error.png")} style={styles.imgCancelStyle} />
					</TouchableOpacity>
				</View>
				<Text style={styles.txtSelectedContact} numberOfLines={1}>
					{item.fullname}
				</Text>
			</View>
		);
	};
	SearchFilterFunction(text) {
		let newArr = [];
		this.arrayholder.map(function(item) {
			const itemData = item.fullname.toUpperCase();
			const textData = text.toUpperCase();
			if (itemData.indexOf(textData) > -1) {
				newArr.push(item);
			}
		});
		this.setState({
			contactList: newArr,
			text: text
		});
	}
	render() {
		const { searchBgColor, searchPlaceholder, viewSepratorStyle } = this.props;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={[styles.viewSearch, { backgroundColor: searchBgColor }]}>
					<TextInput style={styles.searchInput} placeholder={searchPlaceholder} onChangeText={text => this.SearchFilterFunction(text)} />
				</View>
				<View>
					<FlatList showsHorizontalScrollIndicator={false} data={this.state.selectedContact} extraData={this.state} renderItem={this._renderItemHorizontal} horizontal />
				</View>
				{this.state.selectedContact.length > 0 && <View style={[styles.viewSepratorStyle, viewSepratorStyle]} />}
				{this.state.contactList.length > 0 && (
					<FlatList
						ListFooterComponent={this._renderSeparator}
						ItemSeparatorComponent={this._renderSeparator}
						showsVerticalScrollIndicator={false}
						data={this.state.contactList}
						renderItem={this._renderItem}
						onEndReachedThreshold={0.3}
						extraData={this.state}
						keyExtractor={item => item.id.toString()}
					/>
				)}
			</SafeAreaView>
		);
	}
}
ContactScreen.propTypes = {
	searchBgColor: PropTypes.string,
	searchPlaceholder: PropTypes.string,
	viewCloseStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	viewCheckMarkStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	sepratorStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	viewSepratorStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	otherContactList: PropTypes.array,
	onContactSelected: PropTypes.func,
	onContactRemove: PropTypes.func
};

ContactScreen.defaultProps = {
	searchBgColor: "rgb(202,201,207)",
	searchPlaceholder: "Search...",
	viewCloseStyle: null,
	viewCheckMarkStyle: null,
	sepratorStyle: null,
	viewSepratorStyle: null,
	otherContactList: [],
	onContactSelected: () => {},
	onContactRemove: () => {}
};

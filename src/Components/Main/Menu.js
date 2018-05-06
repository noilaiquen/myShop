import React, { Component } from 'react';
import {
	View, Text, TouchableOpacity,
	StyleSheet, Image, Dimensions
} from 'react-native';

import profileIcon from '../../Media/temp/profile.png';

const { width } = Dimensions.get('window');

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// isLogedIn: true
			isLogedIn: false
		};
	}

	goToAuthentication() {
		const { navigator } = this.props;
		navigator.push({ name: 'AUTHENTICATION' });
	}

	goToChangeInfo() {
		const { navigator } = this.props;
		navigator.push({ name: 'CHANGE_INFO' });
	}

	goToOrderHistory() {
		const { navigator } = this.props;
		navigator.push({ name: 'ORDER_HISTORY' });
	}

	render() {
		const {
			wrapper, pIcon, btn,
			text, btnSignIn, textSignIn,
			textUsername, loginContainer, logoutContainer
		} = styles;

		const logoutJSX = (
			<View style={logoutContainer}>
				<TouchableOpacity style={btn} onPress={this.goToAuthentication.bind(this)}>
					<Text style={text}>SIGN IN</Text>
				</TouchableOpacity>
			</View>
		);

		const loginJSX = (
			<View style={loginContainer}>
				<Text style={textUsername}>Nguyen Thanh Binh</Text>
				<View style={{ flex: 1, marginTop: width / 3 }}>
					<TouchableOpacity style={btnSignIn} onPress={this.goToOrderHistory.bind(this)}>
						<Text style={textSignIn}>Order History</Text>
					</TouchableOpacity>

					<TouchableOpacity style={btnSignIn} onPress={this.goToChangeInfo.bind(this)}>
						<Text style={textSignIn}>Change Info</Text>
					</TouchableOpacity>

					<TouchableOpacity style={btnSignIn}>
						<Text style={textSignIn}>Sign Out</Text>
					</TouchableOpacity>
				</View>
			</View>
		);

		const mainJSX = this.state.isLogedIn === true ? loginJSX : logoutJSX;

		return (
			<View style={wrapper}>
				<Image source={profileIcon} style={pIcon} />
				{mainJSX}
			</View>
		);
	}
}
export default Menu;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#34B089',
		alignItems: 'center'
	},
	pIcon: {
		width: width / 4,
		height: width / 4,
		borderRadius: width / 2,
		margin: 30,
		marginBottom: 10
	},
	btn: {
		height: 50,
		backgroundColor: '#fff',
		width: width / 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	},
	btnSignIn: {
		height: 50,
		backgroundColor: '#fff',
		width: width / 2,
		justifyContent: 'center',
		borderRadius: 10,
		marginBottom: 10,
		paddingLeft: 10
	},
	text: {
		color: '#34B089',
		fontWeight: '500'
	},
	textSignIn: {
		color: '#34B089',
	},
	textUsername: {
		color: '#fff',
	},
	loginContainer: {
		flex: 1,
		alignItems: 'center'
	},
	logoutContainer: {
		flex: 1
	}
});


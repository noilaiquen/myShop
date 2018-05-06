import React, { Component } from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import {
	View, Text, TouchableOpacity, Dimensions,
	Image, StyleSheet
} from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';

import backWhite from '../../Media/appIcon/back_white.png';
import icLogo from '../../Media/appIcon/ic_logo.png';

const { height, width } = Dimensions.get('window');

class Authentication extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSignIn: true
		};
	}

	handleActiveTab(key) {
		const { isSignIn } = this.state;

		if (key !== isSignIn) { //nếu khác với route hiện tại thì mới cho chuyển route và setState
			this.setState({
				isSignIn: !this.state.isSignIn
			}, () => {
				if (!this.state.isSignIn) {
					this.signInRef.SignUp();
				} else {
					this.signUpRef.SignIn();
				}
			});
		}
	}

	render() {
		const {
			wrapper, rowOne, icon,
			textTitle, controlBtn, btnSignIn, btnSignUp,
			inActive, active
		} = styles;

		const { isSignIn } = this.state;
		const { navigator } = this.props;

		return (
			<View style={wrapper} >
				<View style={rowOne}>
					<TouchableOpacity onPress={() => navigator.pop()}>
						<Image source={backWhite} style={icon} />
					</TouchableOpacity>
					<Text style={textTitle}>Wearing a Dress</Text>
					<Image source={icLogo} style={icon} />
				</View>

				<View style={{ flex: 1 }}>
					<NavigationExperimental.Navigator
						style={{ marginTop: height / 6 }}
						initialRoute={{ name: 'SIGN_IN' }}
						configureScene={() => (
							NavigationExperimental.Navigator.SceneConfigs.VerticalUpSwipeJump
						)}
						renderScene={(route, AuthNavigator) => {
							switch (route.name) {
								case 'SIGN_UP':
									return <SignUp ref={instance => { this.signUpRef = instance; }} navigator={AuthNavigator} />; //eslint-disable-line
								default:
									return <SignIn ref={instance => { this.signInRef = instance; }} navigator={AuthNavigator} />; //eslint-disable-line
							}
						}}
					/>
				</View>

				<View style={controlBtn}>
					<TouchableOpacity style={btnSignIn} onPress={this.handleActiveTab.bind(this, true)}>
						<Text style={(isSignIn) ? inActive : active}>SIGN IN</Text>
					</TouchableOpacity>
					<TouchableOpacity style={btnSignUp} onPress={this.handleActiveTab.bind(this, false)}>
						<Text style={(!isSignIn) ? inActive : active}>SIGN UP</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default Authentication;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		height: height / 8,
		backgroundColor: '#3EBA77',
		justifyContent: 'space-between',
		padding: 10
	},
	textTitle: {
		color: '#fff',
		fontSize: 20
	},
	rowOne: {
		flexDirection: 'row',
		marginBottom: 5,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	icon: {
		width: 30,
		height: 30
	},
	controlBtn: {
		flexDirection: 'row',
		width,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: width / 20
	},
	btnSignUp: {
		alignItems: 'center',
		justifyContent: 'center',
		width: width / 3,
		height: height / 14,
		backgroundColor: '#fff',
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
		marginLeft: 1
	},
	btnSignIn: {
		alignItems: 'center',
		justifyContent: 'center',
		width: width / 3,
		height: height / 14,
		backgroundColor: '#fff',
		borderBottomLeftRadius: 20,
		borderTopLeftRadius: 20,
		borderRightWidth: 2,
		marginRight: 1
	},
	inActive: {
		color: '#D7D7D7'
	},
	active: {
		color: '#3EBA77'
	},
	inputStyle: {
		// width: width * 0.8,
		height: 50,
		backgroundColor: '#FFF',
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30,
		borderRadius: 20,
		padding: 10,
		paddingLeft: 20,
		// justifyContent: 'center',
		alignItems: 'center',
	},
	bigButton: {
		height: 50,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 30,
		marginRight: 30
	},
	textBigButton: {
		fontWeight: '500',
		color: '#FFF'
	}
});

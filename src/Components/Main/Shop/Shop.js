import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, AsyncStorage } from 'react-native'; //eslint-disable-line
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Header from './Header';

import global from '../../../Components/global';

import initData from '../../Api/initData';
import saveCart from '../../Api/saveCart';
import getCart from '../../Api/getCart';

//import icon
import home from '../../../Media/appIcon/home.png';
import homeActive from '../../../Media/appIcon/home0.png';

import cart from '../../../Media/appIcon/cart.png';
import cartActive from '../../../Media/appIcon/cart0.png';

import search from '../../../Media/appIcon/search.png';
import searchActive from '../../../Media/appIcon/search0.png';

import contact from '../../../Media/appIcon/contact.png';
import contactActive from '../../../Media/appIcon/contact0.png';

const { height, width } = Dimensions.get('window');

export default class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'home',
			types: [],
			topProducts: [],
			cartArray: []
		};

		global.addProducttoCart = this.addProducttoCart.bind(this);
		global.incrQuantity = this.incrQuantity.bind(this);
		global.decrQuantity = this.decrQuantity.bind(this);
		global.removeProductCart = this.removeProductCart.bind(this);
	}

	componentDidMount() {
		// AsyncStorage.clear();
		initData().then(resJSON => {
			const { types, topProducts } = resJSON;
			this.setState({
				types,
				topProducts
			});
		}).catch(error => {
			console.log(error);
		});

		getCart().then(cartArray => this.setState({ cartArray }));
	}

	addProducttoCart(product) {
		const { cartArray } = this.state;
		let newCart;
		if (cartArray.length > 0) {
			const productIndex = cartArray.findIndex((prod) => prod.product.id === product.id);
			if (productIndex >= 0) {
				newCart = cartArray.map(e => {
					if (e.product.id !== product.id) return e;
					return { product, quantity: e.quantity + 1 };
				});
			} else {
				newCart = cartArray.concat({ product, quantity: 1 });
			}
		} else {
			newCart = [{ product, quantity: 1 }];
		}

		this.setState({
			cartArray: newCart
		}, () => {
			saveCart(this.state.cartArray);
		});
	}

	removeProductCart(productID) {
		const { cartArray } = this.state;
		const newCart = cartArray.filter(e => (e.product.id !== productID));

		this.setState({
			cartArray: newCart
		}, () => {
			saveCart(this.state.cartArray);
		});
	}

	incrQuantity(productID) {
		const newCart = this.state.cartArray.map(e => {
			if (e.product.id !== productID) return e;
			return { product: e.product, quantity: e.quantity + 1 };
		});

		this.setState({
			cartArray: newCart
		}, () => {
			saveCart(this.state.cartArray);
		});
	}

	decrQuantity(productID) {
		const newCart = this.state.cartArray.map(e => {
			if (e.product.id !== productID) return e;

			const quantity = (e.quantity - 1) > 0 ? e.quantity - 1 : 0;
			return (quantity !== 0) ? { product: e.product, quantity } : null;
		});

		this.setState({
			cartArray: newCart
		}, () => {
			saveCart(this.state.cartArray);
		});
	}

	render() {
		const { types, selectedTab, topProducts, cartArray } = this.state;
		const { openMenu } = this.props;
		return (
			<View style={{ flex: 1 }}>
				<Header openMenu={openMenu} />
				<TabNavigator tabBarStyle={{ backgroundColor: '#fff', height: height * 0.09 }}>
					<TabNavigator.Item
						selected={selectedTab === 'home'}
						title="Home"
						selectedTitleStyle={{ color: '#34B089' }}
						renderIcon={() => <Image source={homeActive} style={styles.icon} />}
						renderSelectedIcon={() => <Image source={home} style={styles.icon} />}
						onPress={() => this.setState({ selectedTab: 'home' })}>

						<Home types={types} topProducts={topProducts} />

					</TabNavigator.Item>
					<TabNavigator.Item
						selected={selectedTab === 'search'}
						title="Search"
						selectedTitleStyle={{ color: '#34B089' }}
						renderIcon={() => <Image source={searchActive} style={styles.icon} />}
						renderSelectedIcon={() => <Image source={search} style={styles.icon} />}
						onPress={() => this.setState({ selectedTab: 'search' })}>

						<Search />

					</TabNavigator.Item>
					<TabNavigator.Item
						selected={selectedTab === 'cart'}
						title="Cart"
						selectedTitleStyle={{ color: '#34B089' }}
						renderIcon={() => <Image source={cartActive} style={styles.icon} />}
						renderSelectedIcon={() => <Image source={cart} style={styles.icon} />}
						onPress={() => this.setState({ selectedTab: 'cart' })}
						badgeText={cartArray.length}>

						<Cart cartArray={cartArray} />

					</TabNavigator.Item>
					<TabNavigator.Item
						selected={selectedTab === 'contact'}
						title="Contact"
						selectedTitleStyle={{ color: '#34B089' }}
						renderIcon={() => <Image source={contactActive} style={styles.icon} />}
						renderSelectedIcon={() => <Image source={contact} style={styles.icon} />}
						onPress={() => this.setState({ selectedTab: 'contact' })}>

						<Contact />

					</TabNavigator.Item>
				</TabNavigator>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		width: width * 0.08,
		height: height / 21
	}
});

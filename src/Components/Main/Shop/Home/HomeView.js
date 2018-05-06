import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {

	render() {
		const { navigator, types, topProducts } = this.props;
		return (
			<ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
				<Collection navigator={navigator} />
				<Category navigator={navigator} types={types} />
				<TopProduct navigator={navigator} topProducts={topProducts} />
			</ScrollView>
		);
	}
}

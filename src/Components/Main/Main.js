import React, { Component } from 'react';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {

	closeControlPanel = () => {
		this.drawer.close();
	};

	openControlPanel = () => {
		this.drawer.open();
	};

	render() {
		const { navigator } = this.props;
		return (
			<Drawer
				ref={(ref) => { this.drawer = ref; }}
				side={'left'}
				tweenHandler={(ratio) => ({
					main: { opacity: (2 - ratio) / 2 }
				})}
				tapToClose
				openDrawerOffset={0.4}
				content={<Menu navigator={navigator} />}
			>
				<Shop openMenu={this.openControlPanel.bind(this)} />
			</Drawer>

		);
	}
}

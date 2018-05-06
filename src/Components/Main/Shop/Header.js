import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    Dimensions, Image, TextInput,
    StyleSheet
} from 'react-native';

import icLogo from '../../../Media/appIcon/ic_logo.png';
import icMenu from '../../../Media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

class Header extends Component {

    render() {
        const { wrapper, rowOne, icon, textTitle, textInput } = styles;
        const { openMenu } = this.props;

        return (
            <View style={wrapper} >
                <View style={rowOne}>
                    <TouchableOpacity onPress={openMenu}>
                        <Image source={icMenu} style={icon} />
                    </TouchableOpacity>
                    <Text style={textTitle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={icon} />
                </View>
                <TextInput
                    style={textInput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter search..."
                    placeholderTextColor="white"
                />
            </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#34B089',
        justifyContent: 'space-around',
        padding: 10
    },
    textTitle: {
        color: '#FFF',
        fontSize: 20
    },
    rowOne: {
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between'
    },
    textInput: {
        height: height / 20,
        fontFamily: 'Tahoma',
        fontSize: 15,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#40a583',
        color: '#FFF'
    },
    icon: {
        width: 25,
        height: 25
    }
});

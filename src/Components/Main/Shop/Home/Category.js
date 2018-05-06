import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import { IP } from '../../../../constant';

const { width, height } = Dimensions.get('window');

//933 * 465
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

export default class Category extends Component {
    goToListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' });
    }

    render() {
        const { types } = this.props;
        const { text, wrapper, cateTitle, image } = styles;
        const urlImage = `http://${IP}:8080/livecodereactnative/images/type/`;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={text}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 6, justifyContent: 'flex-end' }}>
                    
                    <Swiper width={imageWidth} height={imageHeight}>
                        {types.map(e => (
                            <TouchableOpacity key={e.id} onPress={this.goToListProduct.bind(this)}>
                                <Image source={{ uri: `${urlImage}${e.image}` }} style={image}>
                                    <Text style={cateTitle}>{e.name}</Text>
                                </Image>
                            </TouchableOpacity>
                        ))}
                    </Swiper>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.38,
        backgroundColor: '#fff',
        margin: 10,
        marginBottom: 0,
        padding: 10,
        paddingTop: 0,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    text: {
        fontSize: 18,
        color: '#AFAEAF'
    },
    image: {
        width: imageWidth,
        height: imageHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        color: '#9A9A9A'
    }
});


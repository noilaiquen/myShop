import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import bannerImg from '../../../../Media/temp/banner.jpg';

const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.text}>SPRING COLLECTION</Text>
                </View>
                <View style={{ flex: 6, justifyContent: 'flex-end' }} >
                    <TouchableOpacity>
                        <Image source={bannerImg} style={styles.image} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

//933 * 465
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

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
        height: imageHeight
    }
});


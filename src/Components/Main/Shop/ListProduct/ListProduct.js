import React, { Component } from 'react';
import {
    View, Text, Image,
    TouchableOpacity, StyleSheet, Dimensions,
    ScrollView
} from 'react-native';

import backlist from '../../../../Media/appIcon/backList.png';
import sp1 from '../../../../Media/temp/sp1.jpeg';
import sp2 from '../../../../Media/temp/sp2.jpeg';
import sp3 from '../../../../Media/temp/sp3.jpeg';
import sp4 from '../../../../Media/temp/sp4.jpeg';

const { height, width } = Dimensions.get('window');

export default class ListProduct extends Component {
    backToHome() {
        const { navigator } = this.props;
        navigator.pop();
    }

    goToDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }

    render() {
        const {
            wrapper, header, container,
            backIcon, titleStyle, productContainer,
            productImg, productInfo, pInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.backToHome.bind(this)}>
                            <Image source={backlist} style={backIcon} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <ScrollView>
                        <View style={productContainer}>
                            <Image source={sp1} style={productImg} />
                            <View style={productInfo}>
                                <Text style={txtName}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Material Silk</Text>
                                <View style={pInfo}>
                                    <Text style={txtColor}>Color RoyalBlue</Text>
                                    <View style={{ backgroundColor: 'red', width: 10, height: 10, borderRadius: 5 }} />
                                    <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={productContainer}>
                            <Image source={sp2} style={productImg} />
                            <View style={productInfo}>
                                <Text style={txtName}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Material Silk</Text>
                                <View style={pInfo}>
                                    <Text style={txtColor}>Color RoyalBlue</Text>
                                    <View style={{ backgroundColor: 'blue', width: 10, height: 10, borderRadius: 5 }} />
                                    <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={productContainer}>
                            <Image source={sp3} style={productImg} />
                            <View style={productInfo}>
                                <Text style={txtName}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Material Silk</Text>
                                <View style={pInfo}>
                                    <Text style={txtColor}>Color RoyalBlue</Text>
                                    <View style={{ backgroundColor: 'green', width: 10, height: 10, borderRadius: 5 }} />
                                    <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={productContainer}>
                            <Image source={sp4} style={productImg} />
                            <View style={productInfo}>
                                <Text style={txtName}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Material Silk</Text>
                                <View style={pInfo}>
                                    <Text style={txtColor}>Color RoyalBlue</Text>
                                    <View style={{ backgroundColor: 'pink', width: 10, height: 10, borderRadius: 5 }} />
                                    <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        padding: 10
    },
    wrapper: {
        backgroundColor: '#FFF',
        padding: 10,
        paddingTop: 0,
        marginBottom: 40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: height / 14,
        alignItems: 'center'
    },
    backIcon: {
        width: 30,
        height: 30
    },
    titleStyle: {
        color: '#B10D65',
        fontSize: 20
    },
    productContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderColor: '#eee',
        marginBottom: 10
    },
    productImg: {
        width: width / 4,
        height: ((width / 4) * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        paddingLeft: 10,
        flex: 1
    },
    pInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtColor: {

    },
    txtMaterial: {

    },
    txtPrice: {
        color: '#B10D65',
        fontSize: 18
    },
    txtName: {
        color: '#34B089',
        fontSize: 18
    },
    txtShowDetail: {
        color: '#B10D65',
        fontSize: 12
    }
});


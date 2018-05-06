import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Dimensions, Image, TouchableOpacity,
    ListView
} from 'react-native';

import { IP } from '../../../../constant';

const { width } = Dimensions.get('window');

export default class Collection extends Component {

    goToDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }

    render() {
        const {
            wrapper, titleContainer, textTitle,
            productImage, body, productContainer,
            productName, productPrice
        } = styles;

        const { topProducts } = this.props;
        const urlImage = `http://${IP}:8080/livecodereactnative/images/product/`;
        return (
            <View style={wrapper}>
                <View style={titleContainer}>
                    <Text style={textTitle}>TOP PRODUCT</Text>
                </View>

                <ListView
                    contentContainerStyle={body}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProducts)} //eslint-disable-line
                    renderRow={(product) => (
                        <TouchableOpacity key={product.id} style={productContainer} onPress={this.goToDetail.bind(this, product)}>
                            <Image source={{ uri: `${urlImage}${product.images[0]}` }} style={productImage} />
                            <Text style={productName}>{product.name.toUpperCase()}</Text>
                            <Text style={productPrice}>{product.price}$</Text>
                        </TouchableOpacity>
                    )}
                    renderSeparator={(sectionId, rowId) => {
                        if (rowId % 2 === 1) {
                            return <View style={{ width, height: 10 }} /> //eslint-disable-line
                        }
                        return null;
                    }}
                />

            </View>
        );
    }
}

//933 * 465
const productWidth = (width - 50) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    wrapper: {
        // height: height * 0.38,
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        paddingTop: 0,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 15
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    textTitle: {
        fontSize: 18,
        color: '#AFAEAF'
    },
    productContainer: {
        // backgroundColor: '#f4f4f4',
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        marginBottom: 5
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    productName: {
        paddingLeft: 10,
        color: '#AFAEAF',
        fontWeight: '400'
    },
    productPrice: {
        paddingLeft: 10,
        color: '#662F90'
    }
});

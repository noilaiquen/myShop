import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, TextInput
} from 'react-native';

class SignUp extends Component {

    SignIn() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        const { inputStyle, bigButton, textBigButton } = styles;
        return (
            <View>
                <TextInput 
                    placeholder="Enter your name..." 
                    style={inputStyle} 
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    placeholder="Enter your email..." 
                    style={inputStyle} 
                    underlineColorAndroid="transparent"
                />
                <TextInput 
                    placeholder="Enter your password..." 
                    style={inputStyle} 
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    placeholder="Re-Enter your password..." 
                    style={inputStyle} 
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={bigButton}>
                    <Text style={textBigButton}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default SignUp;

const styles = StyleSheet.create({
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

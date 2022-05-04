import { View, Text } from 'react-native'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native-web'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/insta-logo.png')} />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image source={require('../../assets/plus.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/heart.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>2</Text>
                    </View>
                    <Image source={require('../../assets/messge.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        zIndex: 100,
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
    }
})

export default Header
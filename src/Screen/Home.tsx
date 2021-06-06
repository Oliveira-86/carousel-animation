import React, { useRef } from 'react'
import { FlatList, StyleSheet, Text, View, Animated, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Indicator from '../components/Indicator';
import Backdrop from '../components/Backdrop';
import Square from '../components/Square';

import { DATA } from '../Data/DATA';

const { width, height } = Dimensions.get('screen');

const Home = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <StatusBar hidden />    
            <Backdrop scrollX={scrollX} />
            <Square scrollX={scrollX} />
            <Animated.FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                scrollEventThrottle={32}
                pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX }}}],
                    { useNativeDriver: false }
                )}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listContainer}>
                            <View style={styles.listContent}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.imageList}
                                />
                            </View>
                            <View style={{ flex: 0.3 }}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.description}>
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />

            <Indicator scrollX={scrollX} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    listContainer: {
        width: width,
        alignItems: 'center',
        padding: 20
    },

    listContent: {
        flex: 0.7,
        justifyContent: 'center',
    },

    imageList: {
        width: width / 2,
        height: width / 2,
        resizeMode: 'contain'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 10,
        color: '#FFF'
    },

    description: {
        fontWeight: '300',
        color: '#FFF'
    }
});

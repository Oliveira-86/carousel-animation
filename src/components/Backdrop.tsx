import React from 'react';
import { Animated, StyleSheet, Dimensions, View } from 'react-native';

import { bgs }  from '../Data/BGS'

const {width, height} = Dimensions.get('screen');

const Backdrop = ({ scrollX }: any) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map((bg) => bg)
    })

    return (
        <Animated.View 
            style={[
                StyleSheet.absoluteFillObject,
                {
                    backgroundColor
                }
            ]}
        />
    );
};

export default Backdrop;

const styles = StyleSheet.create({});

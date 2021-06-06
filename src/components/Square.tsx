import React from 'react';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Square = ({ scrollX }: any) => {
    const YOLO = Animated.modulo(
       Animated.divide(
           Animated.modulo(scrollX, width),
           new Animated.Value(width)), 
           1
       );
    
    const rotate = YOLO.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ["35deg", "0deg", "35deg"]
    });

    const translateX = YOLO.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -height, 0]
    });

    return (
        <Animated.View 
            style={[
                styles.container, 
                {
                    transform: [
                        {
                            rotate,
                        },
                        {
                            translateX
                        }
                    ]
                }
            ]}
        />
    );
};

export default Square;

const styles = StyleSheet.create({
    container: {
        width: height,
        height: height,
        backgroundColor: '#FFF',
        position: 'absolute',
        top: -height * 0.67,
        left: -height * 0.3,
        borderRadius: 86,
    }
});

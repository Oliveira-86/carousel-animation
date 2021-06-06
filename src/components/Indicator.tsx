import React from 'react';
import { StyleSheet, Dimensions, View, Animated } from 'react-native';

import { DATA } from '../Data/DATA';

const {width, height} = Dimensions.get('screen');

const Indicator = ({scrollX}: any) => {
    return (
        <View style={styles.container}>
            {DATA.map((_, index) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
                
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp'
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 0.9, 0.6]
                });

                return (
                    <Animated.View 
                        key={`indicator-${index}`}
                        style={[styles.content, {transform: [
                            {
                                scale,
                            }
                        ]}, 
                        {opacity}
                    ]}
                    />
                )
            })}
                   
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 90,
        flexDirection: 'row'
    },

    content: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
        margin: 10, 
    }
});

export default Indicator;



import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, PanResponder, Animated, ImageBackground } from 'react-native';
import { images } from '../../assets/images/AppAssets';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../assets/utils/Colors';

const GetStarted = ({ navigation }) => {
    const iconRef = useRef(null);
    const [iconCoordinates, setIconCoordinates] = useState({ x: '', y: '' });
    const handleLayout = () => {
        iconRef.current.measure((x, y, width, height, pageX, pageY) => {
            setIconCoordinates({ x: pageX, y: pageY });
            console.log('Icon Coordinates:', { x: pageX, y: pageY });
        });
    };
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gesture) => {
                const { width, height } = StyleSheet.flatten(styles.draggableContainer);
                const containerWidth = width - 130; // Adjust this based on the width of the draggable view
                const containerHeight = height - 60; // Adjust this based on the height of the draggable view

                let newX = gesture.dx;
                let newY = gesture.dy;

                // Limit movement within container boundaries
                if (newX < 0) {
                    newX = 0;
                } else if (newX > containerWidth) {
                    newX = containerWidth;
                }
                if (newY < 0) {
                    newY = 0;
                } else if (newY > containerHeight) {
                    newY = containerHeight;
                }

                pan.setValue({ x: newX, y: newY });
            },
            onPanResponderRelease: (e, gesture) => {

                const releaseX = gesture.moveX;
                const releaseY = gesture.moveY;
                if (releaseX >= 260) {

                    console.log('releasex', releaseX)
                    navigation.navigate('socialLogin')
                }
                console.log('coordinates', iconCoordinates)

                Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
            },
        })
    ).current;

    return (
        <ImageBackground source={images.background} style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image source={images.logo} style={{ marginTop: 20, }} />
            </View>
            <View style={{ position: 'absolute', bottom: 0, height: 400, justifyContent: 'center', backgroundColor: '#E6E9FF', width: '100%', borderTopEndRadius: 70, borderTopLeftRadius: 70 }}>
                <View style={{ bottom: 20, alignItems: 'center' }}>
                    <Text style={{ marginTop: 40, fontSize: 14 }}>MEDICAL AND GENERAL CARE</Text>
                    <Text style={{ color: '#181E5B', fontSize: 35, marginTop: 10 }}>Be <Text style={{ color: '#181E5B', fontSize: 35, fontWeight: 'bold' }}> Wealthy</Text></Text>
                    <Text style={{ color: '#181E5B', fontSize: 35, marginTop: 10 }}>By being <Text style={{ color: '#181E5B', fontSize: 35, fontWeight: 'bold' }}> Healthy</Text></Text>
                    <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row',borderRadius:35, justifyContent: 'space-between', alignItems: 'center', height: 65, width: 290, marginTop: 25 }}>

                        <Animated.View
                            {...panResponder.panHandlers}
                            style={[
                                styles.draggableItem,
                                {
                                    transform: [{ translateX: pan.x }, { translateY: pan.y }],
                                    backgroundColor: Colors.buttonBgColor,zIndex:20, width: 140,  height: '100%', borderRadius: 40, alignItems: 'center', justifyContent: 'center'
                                },
                            ]}
                        >
                            <Text style={{ color: 'white', fontSize: 15 }}>GET STARTED</Text>
                        </Animated.View>

                        <TouchableOpacity
                            ref={iconRef}
                            onPress={() => navigation.navigate('socialLogin')}
                            onLayout={handleLayout}
                            style={{ backgroundColor: Colors.buttonBgColor, zIndex: 10, width: 65, height: '100%', alignItems: 'center', justifyContent: 'center',borderRadius:100,left:3 }}
                        >
                            <AntDesign color='white' name='right' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff', // Background color
    },
    // container2: {
    //     transform: [{ translateX: pan.x }, { translateY: pan.y }],
    // },
    image: {
        width: '80%',
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333', // Title text color
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center',
        color: '#666', // Subtitle text color
    },
    button: {
        backgroundColor: '#007bff', // Button background color
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff', // Button text color
    },
    draggableContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 28,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        width: 280,
        marginTop: 20,
    },
    draggableItem: {
        backgroundColor: '#171E5B',
        width: 130,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GetStarted;

import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/utils/Colors'
import Header from '../../component/Header'
import { images } from '../../assets/images/AppAssets'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Workout = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>


            <Header navigation={navigation} isChat={false} text={'Workout for your Days'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, gap: 10, flexGrow: 1 }}>
                <View style={{ backgroundColor: Colors.white, borderRadius: 10, }}>
                    <View style={{ flexDirection: 'row', gap: 20, padding: 15, alignItems: 'center' }}>

                        <View style={{ backgroundColor: Colors.backgroundColor, height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={images.day1} />
                        </View>
                        <Text style={{ fontSize: 22, fontWeight: 600, color: Colors.themeColor }}>Your Day 1 Workout</Text>
                    </View>

                    <View style={{ height: 1, width: '100%', backgroundColor: Colors.themeColor }}></View>
                    <View style={{ padding: 15 }}>
                        <Text style={{ marginVertical: 10, color: Colors.themeColor, fontSize: 18, fontWeight: 600 }}>Work out Name</Text>
                        <View style={{ gap: 10 }}>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: Colors.white, borderRadius: 10, }}>
                    <View style={{ flexDirection: 'row', gap: 20, padding: 15, alignItems: 'center' }}>

                        <View style={{ backgroundColor: Colors.backgroundColor, height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={images.day2} />
                        </View>
                        <Text style={{ fontSize: 22, fontWeight: 600, color: Colors.themeColor }}>Your Day 2 Workout</Text>
                    </View>

                    <View style={{ height: 1, width: '100%', backgroundColor: Colors.themeColor }}></View>
                    <View style={{ padding: 15 }}>
                        <Text style={{ marginVertical: 10, color: Colors.themeColor, fontSize: 18, fontWeight: 600 }}>Work out Name</Text>
                        <View style={{ gap: 10 }}>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: Colors.white, borderRadius: 10, }}>
                    <View style={{ flexDirection: 'row', gap: 20, padding: 15, alignItems: 'center' }}>

                        <View style={{ backgroundColor: Colors.backgroundColor, height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={images.day3} />
                        </View>
                        <Text style={{ fontSize: 22, fontWeight: 600, color: Colors.themeColor }}>Your Day 3 Workout</Text>
                    </View>

                    <View style={{ height: 1, width: '100%', backgroundColor: Colors.themeColor }}></View>
                    <View style={{ padding: 15 }}>
                        <Text style={{ marginVertical: 10, color: Colors.themeColor, fontSize: 18, fontWeight: 600 }}>Work out Name</Text>
                        <View style={{ gap: 10 }}>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Octicons name='dot-fill' color={Colors.themeColor} size={22} />
                                <Text style={[styles.textFont, { fontSize: 16 }]}>Lorem ipsum dolor sit inc.</Text>
                            </View>
                        </View>
                    </View>
                </View>


            </ScrollView>
        </View>
    )
}

export default Workout;

const styles = StyleSheet.create({
    textFont: {
        color: '#000000',
        bottom: 3
    }
});
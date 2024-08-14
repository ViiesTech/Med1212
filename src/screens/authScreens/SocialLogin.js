import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { images } from '../../assets/images/AppAssets'
import { Colors } from '../../assets/utils/Colors'
const SocialLogin = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true)

    return (

       <ImageBackground style={{flex:1}} source={images.background}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
            <View style={{padding: 20,}}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{  alignSelf: 'flex-start',marginTop:5  }}>
                    <AntDesign name='arrowleft' color={Colors.black} size={25} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'flex-end', marginBottom: 10, }}>
                <View style={{}}>
                    <Image source={images.logo} />
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: '#E6E9FF', borderTopLeftRadius: 50, borderTopRightRadius: 50, marginTop: 30 }}>
                <View style={{ width: '100%', padding: 20, alignItems: 'center' }}>
                    <Text style={{ marginTop: 20, fontSize: 14 }}>MEDICAL AND GENERAL CARE</Text>
                    <Text style={{ color: '#181E5B', fontSize: 30, marginTop: 10 }}>Be <Text style={{ color: '#181E5B', fontSize: 30, fontWeight: 'bold' }}> Wealthy</Text></Text>
                    <Text style={{ color: '#181E5B', fontSize: 30, marginTop: 10 }}>By being <Text style={{ color: '#181E5B', fontSize: 30, fontWeight: 'bold' }}> Healthy</Text></Text>
                    <TouchableOpacity onPress={() => navigation.navigate('emailLogin')} style={{ backgroundColor: 'black', flexDirection: 'row', gap: 30, height: 60, width: '100%', borderRadius: 35, justifyContent: 'center', alignItems: 'center', marginTop: 15 }} >
                        <AntDesign name='apple1' color='white' size={25} />
                        <Text style={{ color: 'white', fontSize: 16 }} >Continue With Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('emailLogin')} style={{ backgroundColor: 'white', flexDirection: 'row', gap: 25, height: 60, width: '100%', borderRadius: 35, justifyContent: 'center', alignItems: 'center', marginTop: 15 }} >
                        <Image source={images.googleLogo} />
                        <Text style={{ color: 'black', fontSize: 16 }} >Continue With Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('emailLogin')} style={{ backgroundColor: '#1878F3', flexDirection: 'row', gap: 30, height: 60, width: '100%', borderRadius: 35, justifyContent: 'center', alignItems: 'center', marginTop: 15 }} >
                        <Entypo name='facebook-with-circle' color='white' size={25} />
                        <Text style={{ color: 'white', fontSize: 16 }} >Continue With Facebook</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>
                            By registering, you agree to our &nbsp;
                            <Text style={{ fontWeight: 'bold' }}>Terms of Service, Privacy Policy, and Cookie Policy.</Text>
                        </Text>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 16, fontWeight: 600 }}>
                            Recover My Account
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        </ImageBackground>
    )
}

export default SocialLogin

const styles = StyleSheet.create({

    footerText: {
        color: 'white',
        fontSize: 13
    },
    absolute: {
        position: "absolute",
        height: '100%',
        width: '100%',
        borderTopRightRadius: 200,
        borderTopLeftRadius: 200,
        overflow: 'hidden',
    }
})

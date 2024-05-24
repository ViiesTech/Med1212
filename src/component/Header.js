import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors } from '../assets/utils/Colors'
const Header = ({ navigation, text, margin, padding, isChat }) => {
    return (
        <View style={{}}>
            <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 25, }}>
                        <AntDesign name='arrowleft' size={25} color={Colors.themeColor} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, color: '#07113D', fontWeight: 600 }}>{text}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, }}>
                    {isChat ?
                        (
                            <TouchableOpacity style={{ height: 40, width: 40, borderColor: '#07113D', borderWidth: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 20 }}>
                                <AntDesign name='message1' size={20} />
                            </TouchableOpacity>
                        ) :
                        null
                    }

                    <TouchableOpacity style={{ height: 40, width: 40, borderColor: '#07113D', borderWidth: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 20 }}>
                        <Feather name='user' size={20} />
                    </TouchableOpacity>
                </View>


            </View>
            <View style={{ height: 2, width: '100%', backgroundColor: '#171E5B' }}>

            </View>
        </View>
    )
}

export default Header
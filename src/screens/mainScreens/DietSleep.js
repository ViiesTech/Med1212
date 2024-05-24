import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/utils/Colors'
import Header from '../../component/Header'

const DietSleep = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>


      <Header navigation={navigation}  isChat={false} text={'Diet and Sleep Tracking'} />
      <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
        <Text style={{ color: Colors.themeColor, fontSize: 20, fontWeight: 600 }}>Tell Us About Your Diet and
        </Text>
        <Text style={{ color: Colors.themeColor, fontSize: 20, fontWeight: 600 }}>Sleep Hours
        </Text>


        <View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: Colors.themeColor }}>What Are You Taking In Break Fast?</Text>
            <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Type Here' />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ color: Colors.themeColor }}>What Are You Taking In Lunch?</Text>
            <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Type Here' />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ color: Colors.themeColor }}>What Are You Taking In Dinner?</Text>
            <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Type Here' />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ color: Colors.themeColor }}>Tell Us About Your Sleep Hours?</Text>
            <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Type Here' />
          </View>

          <TouchableOpacity style={{ height: 60, width: '90%', justifyContent: "center", alignSelf: 'center', alignItems: 'center', backgroundColor: Colors.buttonBgColor, marginTop: 20, borderRadius: 15 }} onPress={() => navigation.navigate('workout')} >
            <Text style={{ color: 'white', fontSize: 16, }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default DietSleep
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../component/Header'
import { Colors } from '../../assets/utils/Colors'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

const About = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#E6E9FF', flex: 1 }}>


      <Header navigation={navigation} isChat={false} text={'Hey Brian,'}  />
      {/* <Text>About</Text> */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 20, flexGrow: 1, paddingHorizontal: 20, }}>
        <View style={{}}>
        <Text style={{ color: Colors.themeColor, fontSize: 20, fontWeight: 600 }}>Tell Us About Your Self</Text>
        <Text style={{ color: Colors.themeColor, marginTop: 15 }}>Lorem ipsum dolor sit amet, consetetur sadipscing
        </Text>
        <Text style={{ color: Colors.themeColor }}>elitr, sed diam nonumy eirmod</Text>

        <View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: Colors.themeColor }}>First Name</Text>
            <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Enter Your First Name' />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: Colors.themeColor }}>Last Name</Text>
            <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Enter Your First Name' />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: Colors.themeColor }}>Email Address</Text>
            <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Enter Your First Name' />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: Colors.themeColor }}>Phone No</Text>
            <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Enter Your First Name' />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: Colors.themeColor }}>Home Address</Text>
            <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Enter Your First Name' />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: Colors.themeColor }}>Any Kind Of Medical Report (Optional)</Text>
            <View style={{ justifyContent: 'center' }}>
              <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Enter Your First Name' />
              <View style={{ position: 'absolute', right: 10, bottom: 10, }}>

                <Entypo name='attachment' color={Colors.themeColor} size={20} />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: Colors.themeColor }}>Message</Text>
            <TextInput placeholderTextColor={Colors.themeColor} style={{ width: '100%', height: 45, borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 10, marginTop: 15 }} placeholder='Enter Your First Name' />
          </View>
          <TouchableOpacity style={{ height: 60, width: '100%', justifyContent: "center", alignSelf: 'center', alignItems: 'center', backgroundColor: Colors.buttonBgColor, marginTop: 20, borderRadius: 15 }} onPress={() => navigation.navigate('welcome')} >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>Submit</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default About
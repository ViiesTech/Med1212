import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/utils/Colors'
import Header from '../../component/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Welcome = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: Colors.backgroundColor, flex: 1 }}>
      <Header navigation={navigation} isChat={true} text={'Welcome'} />
      <View style={{ paddingHorizontal: 20, }}>
        <TouchableOpacity onPress={() => navigation.navigate('appointment')} style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 20, borderRadius: 15, }}>
          <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'center', gap: 10, paddingVertical: 20 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E9FF', height: 50, width: 50, borderRadius: 35 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>1</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 14, bottom: 3, color: Colors.themeColor }}>Appointment Booking  </Text>
              <View>
                <Text style={{ color: Colors.black }}>It is a long established fact </Text>
                <Text style={{ color: Colors.black }}>that a reader will be distracted. </Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: Colors.buttonBgColor, width: 40, alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
            <AntDesign color='white' name='right' size={25} />

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('appointment')} style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 20, borderRadius: 15, }}>
          <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'center', paddingVertical: 20, gap: 10 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E9FF', height: 50, width: 50, borderRadius: 35 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>2</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 14, bottom: 3, color: Colors.themeColor }}>Diet and Sleep Tracking</Text>
              <View>
                <Text style={{ color: Colors.black }}>It is a long established fact </Text>
                <Text style={{ color: Colors.black }}>that a reader will be distracted. </Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: Colors.buttonBgColor, width: 40, alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
            <AntDesign color='white' name='right' size={25} />

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('appointment')} style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 20, borderRadius: 15, }}>
          <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', flexGrow: 1, paddingVertical: 20 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E9FF', height: 50, width: 50, borderRadius: 35 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>3</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 14, bottom: 3, color: Colors.themeColor }}>Electronic Medical Records</Text>
              <Text style={{ fontWeight: 600, fontSize: 14, bottom: 3, color: Colors.themeColor }}>(EMR) Integration</Text>
              <View>
                <Text style={{ color: Colors.black }}>It is a long established fact </Text>
                <Text style={{ color: Colors.black }}>that a reader will be distracted. </Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: Colors.buttonBgColor, width: 40, alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
            <AntDesign color='white' name='right' size={25} />

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('appointment')} style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 20, borderRadius: 15, }}>
          <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', flexGrow: 1, paddingVertical: 20 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E9FF', height: 50, width: 50, borderRadius: 35 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>4</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 14, bottom: 3, color: Colors.themeColor }}>Exercise Recommendations  </Text>
              <View >
                <Text style={{ color: Colors.black }}>It is a long established fact </Text>
                <Text style={{ color: Colors.black }}>that a reader will be distracted. </Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: Colors.buttonBgColor, width: 40, alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
            <AntDesign color='white' name='right' size={25} />

          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome
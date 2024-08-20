import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../assets/utils/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { images } from '../../assets/images/AppAssets'
import { useSelector } from 'react-redux'

const Payment = ({ navigation }) => {
  const [selected, setSelected] = useState(false)
  const service = useSelector(state => state.user.timeSlot);
  console.log('service',service)

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: Colors.backgroundColor, flexGrow: 1, padding: 20 }}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 25, marginTop: 5 }}>
        <AntDesign name='arrowleft' size={25} color={Colors.themeColor} />
      </TouchableOpacity>
      <View style={{ marginTop: 20, }}>
        <View style={{ backgroundColor: Colors.white, padding: 20, justifyContent: 'center', borderRadius: 10 }}>
          <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: Colors.buttonBgColor }}>Make Your Payment</Text>
          <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'center' }}>
            <View style={{ width: '50%' }}>
              <Text style={{ marginTop: 30, marginBottom: 10, color: Colors.themeColor }}>Current credit card</Text>
              <TouchableOpacity style={{ height: 130, borderColor: Colors.themeColor, borderWidth: 2, borderRadius: 5, padding: 10 }}>
                <FontAwesome name='cc-visa' size={25} color={Colors.buttonBgColor} />
                <Text style={{ marginTop: 20, color: Colors.themeColor }}>••••   ••••   ••••   394</Text>
                <Text style={{ marginTop: 10, color: Colors.themeColor }}>Howard Pinsky</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ marginTop: 30, marginBottom: 10, color: Colors.themeColor }}>Add new  credit card</Text>

              <TouchableOpacity style={{ height: 130, justifyContent: 'center', alignItems: 'center', borderColor: Colors.themeColor, borderWidth: 1, borderRadius: 5, padding: 10 }}>
                <TouchableOpacity>
                  <AntDesign name='pluscircleo' color={Colors.themeColor} size={35} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={{ marginBottom: 20, }}>
              <Text style={{ color: Colors.themeColor, fontSize: 12, fontWeight: 600 }}>Name of card holder</Text>
              <TextInput placeholder='Howard Pinsky' placeholderTextColor={Colors.themeColor} style={{ height: 45, marginTop: 15, width: '100%', borderRadius: 20, padding: 10, borderColor: Colors.themeColor, borderWidth: 1 }} />
            </View>
            <View style={{ marginBottom: 20, }}>

              <Text style={{ color: Colors.themeColor, fontSize: 12, fontWeight: 600 }}>Credit card number</Text>
              <View style={{ justifyContent: 'center' }}>

                <TextInput placeholder='1234   3924   2394   3294' placeholderTextColor={Colors.themeColor} style={{ height: 45, marginTop: 15, width: '100%', borderRadius: 20, padding: 10, borderColor: Colors.themeColor, borderWidth: 1 }} />
                <View style={{ flexDirection: 'row', position: 'absolute', right: 0, top: 15 }}>
                  <Image source={images.switch1} style={{ left: 45 }} />
                  <Image source={images.switch2} />
                </View>

              </View>
            </View>
            <View style={{ marginBottom: 20, flexDirection: 'row', gap: 10 }}>
              <View style={{ width: '50%' }}>
                <Text style={{ color: Colors.themeColor, fontSize: 12, fontWeight: 600 }}>Expiration</Text>
                <TextInput placeholder='02/25' placeholderTextColor={Colors.themeColor} style={{ height: 45, marginTop: 15, width: '100%', borderRadius: 20, padding: 10, borderColor: Colors.themeColor, borderWidth: 1 }} />
              </View>
              <View style={{ width: '50%' }}>
                <Text style={{ color: Colors.themeColor, fontSize: 12, fontWeight: 600 }}>CVV   <AntDesign name='clockcircle' color={Colors.themeColor} /> </Text>
                <TextInput placeholder='231' placeholderTextColor={Colors.buttonBgColor} style={{ height: 45, marginTop: 15, width: '100%', borderRadius: 20, padding: 10, borderColor: Colors.themeColor, borderWidth: 1 }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text>Total</Text>
              <Text>USD $9.99</Text>
            </View>
            <View style={{ marginBottom: 20, }}>

              <Text style={{ color: Colors.themeColor, fontSize: 12, fontWeight: 600 }}>Apply Discount Code</Text>
              <TextInput placeholder='00000' placeholderTextColor={Colors.themeColor} style={{ height: 45, marginTop: 15, width: '100%', borderRadius: 20, padding: 10, borderColor: Colors.themeColor, borderWidth: 1 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Discount</Text>
              <Text>USD $7.99</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <TouchableOpacity style={{ height: 60, width: '47%', justifyContent: "center", alignSelf: 'center', alignItems: 'center', backgroundColor: Colors.buttonBgColor, marginTop: 30, borderRadius: 10 }} onPress={() => navigation.navigate('dietSleep')} >
            <Text style={{ color: 'white', fontSize: 16 }}>Make Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 60, width: '47%', justifyContent: "center", alignSelf: 'center', alignItems: 'center', borderColor: Colors.themeColor, borderWidth: 1, marginTop: 30, borderRadius: 10 }}  >
            <Text style={{ color: Colors.themeColor, fontSize: 16 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Payment
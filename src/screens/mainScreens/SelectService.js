import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/utils/Colors'
import Header from '../../component/Header'
import { images } from '../../assets/images/AppAssets'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SelectService = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#E6E9FF' }}>

      <Header navigation={navigation} isChat={false} text={'Hey Brian,'}  />
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Proceed </Text>
          <Text style={{ fontSize: 30, }}>With The </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Service</Text>
          <Text style={{ fontSize: 30, }}> You <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Want </Text></Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('about')} style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderRadius: 15, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, height: 100 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E9FF', marginLeft: 10, height: 60, width: 60, borderRadius: 35, padding: 10 }}>
              <Image source={images.hormone} style={{ height: '100%', width: '100%' }} resizeMode='contain' />
            </View>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 16, bottom: 5 }}>Hormone Replacement</Text>
              <View>
                <Text>It is a long established fact </Text>
                <Text>that a reader will be distracted. </Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: '#171E5B', width: 40, alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15, }}>
            <AntDesign color='white' name='right' size={25} />

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('about')} style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderRadius: 15, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, height: 100 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E9FF', height: 60, width: 60, padding: 10, marginLeft: 10, borderRadius: 35 }}>
              <Image source={images.weight} style={{ height: '100%', width: '100%' }} resizeMode='contain' />
            </View>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 16, bottom: 5 }}>Weight Loss</Text>
              <View>
                <Text>It is a long established fact </Text>
                <Text>that a reader will be distracted. </Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: '#171E5B', width: 40, alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
            <AntDesign color='white' name='right' size={25} />

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('about')} style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderRadius: 15, }}>
          <View style={{ flexDirection: 'row', height: 100, alignItems: 'center', gap: 10 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, marginLeft: 10, backgroundColor: '#E6E9FF', height: 60, width: 60, borderRadius: 35 }}>
              <Image source={images.health} style={{ height: '100%', width: '100%' }} resizeMode='contain' />
            </View>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 16, bottom: 5 }}>Health Optimization</Text>
              <View>
                <Text>It is a long established fact </Text>
                <Text>that a reader will be distracted. </Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: '#171E5B', width: 40, alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
            <AntDesign color='white' name='right' size={25} />

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('about')} style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderRadius: 15, }}>
          <View style={{ flexDirection: 'row', height:100, alignItems: 'center', gap: 10 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E9FF', height: 60, width: 60, borderRadius: 35,padding:10 ,marginLeft:10}}>
              <Image source={images.antiaging} style={{height:'100%',width:'100%'}} resizeMode='contain' />
            </View>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 16, bottom: 5 }}>Antiaging  </Text>
              <View>
                <Text>It is a long established fact </Text>
                <Text>that a reader will be distracted. </Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: '#171E5B', width: 40, alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
            <AntDesign color='white' name='right' size={25} />

          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SelectService
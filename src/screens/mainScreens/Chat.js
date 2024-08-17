import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import React from 'react';
import {ShowToast} from '../../GlobalFunctions/ShowToast';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../assets/utils/Colors';
const Chat = ({navigation}) => {
  const msgs = [
    {
      id: 1,
      text: 'Hey! Just wanted to say I hope youre having an awesome day! 😊',
      myText: true,
    },
    {
      id: 2,
      text: 'Guess what? Something exciting just happened! Cant wait to tell you! 😄',
      myText: false,
    },
    {
      id: 3,
      text: 'You wont believe what just happened! Cant wait to share it with you',
      myText: true,
    },
    {
      id: 4,
      text: 'You’ve got to hear this! Something amazing just happened, and I had to tell you right away',
      myText: false,
    },
    // {
    //   id: 5,
    //   text: 'You wont believe the news I have for you! Lets chat soon!',
    //   myText: true,
    // },
    // {
    //   id: 6,
    //   text: 'You wont believe the news I have for you! Lets chat soon!',
    //   myText: false,
    // },
    // {
    //   id: 7,
    //   text: 'You wont believe the news I have for you! Lets chat soon!',
    //   myText: true,
    // },
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        <View
          style={{
            maxWidth: 200,
            alignSelf: item.myText ? 'flex-end' : 'flex-start',
            backgroundColor: item.myText ? '#181B5F' : '#fff',
            padding: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 0,
          }}>
          <Text style={{color: item.myText ? '#fff' : '#000', fontSize: 15}}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#E6E9FF'}}>
      <View
        style={{
          backgroundColor: '#181B5F',
          paddingVertical: 20,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" color={Colors.white} size={25} />
          </TouchableOpacity>
          <FontAwesome name="user-circle-o" color={Colors.white} size={28} />
          <Text style={{color: Colors.white, fontSize: 18, fontWeight: 'bold'}}>
            Michael
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
          <TouchableOpacity>
            <Ionicons name="videocam" color={Colors.white} size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" color={Colors.white} size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color={Colors.white} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 15}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{gap: 15}}
          renderItem={renderItem}
          data={msgs}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          flex: 1,
          width: '100%',
          padding: 20,
          flexDirection:'row',
          alignItems:'center',
          // gap:15
        }}>
            
           
            <View style={{flexDirection:'row', width: '90%',}}>

        <TextInput
          placeholder="Type a message"
          style={{        
            padding: 10,
            width: '100%',
            backgroundColor: Colors.white,
            borderRadius: 20,
          }}
          />
          <View style={{height:'100%',gap:10,alignItems:'center',flexDirection:'row',position:'absolute',right:10}}>

          <TouchableOpacity>
            <Entypo name='attachment' size={22}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='camera' size={22}/>
          </TouchableOpacity>
          </View>
          
          </View>
      <TouchableOpacity style={{height:40,width:40,position:'absolute',right:10,borderRadius:20,justifyContent:'center',alignItems:'center',backgroundColor:Colors.buttonBgColor,flexGrow:1}}>
          <MaterialIcons name='keyboard-voice' color={Colors.white} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;

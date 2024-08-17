import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../assets/utils/Colors'
import Header from '../../component/Header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Appointment = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(21);
  const [morningTime, setMorningTime] = useState(1);
  const [eveningTime, setEveningTime] = useState(1);

  const handleDaySelection = (day) => {
    setSelectedDay(day);
  };
  const handleMorningTimeSelection = (time) => {
    setMorningTime(time);
  };
  const handleEveningTimeSelection = (time) => {
    setEveningTime(time);
  };

  const renderDayButton = (day, label) => (
    <TouchableOpacity
      onPress={() => handleDaySelection(day)}
      style={{
        backgroundColor: selectedDay === day ? Colors.buttonBgColor : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexBasis: 0,
        // paddingHorizontal: 15,
        paddingVertical: 20,
        gap: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: selectedDay === day ? 'white' : '#363636', fontWeight: 'bold' }}>{label}</Text>
      <Text style={{ color: selectedDay === day ? 'white' : '#363636', fontWeight: 600 }}>{day}</Text>
    </TouchableOpacity>
  );

  const renderMorningAppointment = (time, label) => (
    <TouchableOpacity
      onPress={() => handleMorningTimeSelection(time)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        flexGrow: 1,
        flexBasis: 0,
        backgroundColor: morningTime === time ? Colors.buttonBgColor : 'white',
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Ionicons name='time-outline' color={morningTime === time ? 'white' : '#363636'} size={15} />
      <Text style={{ color: morningTime === time ? 'white' : '#363636' }}>{label}</Text>
    </TouchableOpacity>
  );

  const renderEveningAppointment = (time, label) => (
    <TouchableOpacity
      onPress={() => handleEveningTimeSelection(time)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        flexBasis: 0,
        flexGrow: 1,
        backgroundColor: eveningTime === time ? Colors.buttonBgColor : 'white',
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Ionicons name='time-outline' color={eveningTime === time ? 'white' : '#363636'} size={15} />
      <Text style={{ color: eveningTime === time ? 'white' : '#363636' }}>{label}</Text>
    </TouchableOpacity>
  );




  return (
    <View style={{ backgroundColor: Colors.backgroundColor, flex: 1 }}>

      <Header navigation={navigation} isChat={true} text={'Make Appointment'} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20 }}>
        <Text style={{ color: '#363636', fontSize: 18, fontWeight: 'bold' }}>April 2020</Text>
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
          {renderDayButton(21, 'Mon')}
          {renderDayButton(22, 'Tue')}
          {renderDayButton(23, 'Wed')}
          {renderDayButton(24, 'Thu')}
          {renderDayButton(25, 'Fri')}
        </View>

        <Text style={{ color: '#363636', fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Morning</Text>
        <View style={{ flexDirection: 'row', marginTop: 20, flexWrap: 'wrap', gap: 10 }}>
          {renderMorningAppointment(1, '08:30 AM')}
          {renderMorningAppointment(2, '09:00 AM')}
          {renderMorningAppointment(3, '09:30 AM')}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, flexWrap: 'wrap', gap: 10 }}>
          {renderMorningAppointment(4, '10:00 AM')}
          {renderMorningAppointment(5, '10:30 AM')}
          {renderMorningAppointment(6, '11:00 AM')}
        </View>


        <Text style={{ color: '#363636', fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Evening</Text>
        <View style={{ flexDirection: 'row', marginTop: 20, flexWrap: 'wrap', gap: 10 }}>
          {renderEveningAppointment(1, '05:30 PM')}
          {renderEveningAppointment(2, '06:00 PM')}
          {renderEveningAppointment(3, '06:30 PM')}

        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, flexWrap: 'wrap', gap: 10 }}>
          {renderEveningAppointment(4, '07:00 PM')}
          {renderEveningAppointment(5, '08:00 PM')}
          {renderEveningAppointment(6, '08:30 PM')}
        </View>
        <TouchableOpacity style={{ height: 60, width: 290, justifyContent: "center", alignSelf: 'center', alignItems: 'center', backgroundColor: Colors.buttonBgColor, marginTop: 30, borderRadius: 15 }} onPress={() => navigation.navigate('payment')} >
          <Text style={{ color: 'white', fontSize: 18 }}>Make an Appointment</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Appointment
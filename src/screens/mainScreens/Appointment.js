import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../assets/utils/Colors';
import Header from '../../component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {setAppointmentDetails, setTimeSlot} from '../../redux/Slices';
import {BookAppointment} from '../../GlobalFunctions/BookAppointment';

const Appointment = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const globalState = useSelector(state => state.user);
  const {appointmentDetails} = globalState;

  const {firstName, lastName, email, medicalReport, address, message, phone} =
    appointmentDetails;
  console.log(
    'details',
    firstName,
    lastName,
    email,
    medicalReport,
    address,
    message,
    phone,
    globalState.purpose,
    globalState.service,
  );
  const dispatch = useDispatch();
  const [selectedDay, setSelectedDay] = useState('21 Mon');
  const [morningTime, setMorningTime] = useState('08:30 AM');
  const [eveningTime, setEveningTime] = useState('05:30 PM');
  console.log(selectedDay);
  console.log(morningTime);
  console.log(eveningTime);
  const handleDaySelection = (day, label) => {
    setSelectedDay(day + ' ' + label);
  };
  const handleMorningTimeSelection = label => {
    setMorningTime(label);
  };
  const handleEveningTimeSelection = label => {
    setEveningTime(label);
  };

  const renderDayButton = (day, label) => (
    <TouchableOpacity
      onPress={() => handleDaySelection(day, label)}
      style={{
        backgroundColor:
          selectedDay === day + ' ' + label ? Colors.buttonBgColor : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexBasis: 0,
        // paddingHorizontal: 15,
        paddingVertical: 20,
        gap: 10,
        borderRadius: 5,
      }}>
      <Text
        style={{
          color: selectedDay === day + ' ' + label ? 'white' : '#363636',
          fontWeight: 'bold',
        }}>
        {label}
      </Text>
      <Text
        style={{
          color: selectedDay === day + ' ' + label ? 'white' : '#363636',
          fontWeight: 600,
        }}>
        {day}
      </Text>
    </TouchableOpacity>
  );

  const renderMorningAppointment = label => (
    <TouchableOpacity
      onPress={() => handleMorningTimeSelection(label)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        flexGrow: 1,
        flexBasis: 0,
        backgroundColor: morningTime === label ? Colors.buttonBgColor : 'white',
        padding: 10,
        borderRadius: 5,
      }}>
      <Ionicons
        name="time-outline"
        color={morningTime === label ? 'white' : '#363636'}
        size={15}
      />
      <Text style={{color: morningTime === label ? 'white' : '#363636'}}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderEveningAppointment = label => (
    <TouchableOpacity
      onPress={() => handleEveningTimeSelection(label)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        flexBasis: 0,
        flexGrow: 1,
        backgroundColor: eveningTime === label ? Colors.buttonBgColor : 'white',
        padding: 10,
        borderRadius: 5,
      }}>
      <Ionicons
        name="time-outline"
        color={eveningTime === label ? 'white' : '#363636'}
        size={15}
      />
      <Text style={{color: eveningTime === label ? 'white' : '#363636'}}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const handleAppointment = async () => {
    try {
      setIsLoading(true);
      const res = await BookAppointment(
        globalState.service,
        firstName,
        lastName,
        email,
        phone,
        address,
        medicalReport,
        message,
        globalState.purpose,
        selectedDay,
        morningTime,
        eveningTime,
      );
      setIsLoading(false);
      navigation.navigate('payment');
    } catch (error) {
      setIsLoading(false);

      console.log('error', error);
    }
  };

  return (
    <View style={{backgroundColor: Colors.backgroundColor, flex: 1}}>
      <Header navigation={navigation} isChat={true} text={'Make Appointment'} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20}}>
        <Text style={{color: '#363636', fontSize: 18, fontWeight: 'bold'}}>
          April 2020
        </Text>
        <View style={{flexDirection: 'row', gap: 10, marginTop: 20}}>
          {renderDayButton(21, 'Mon')}
          {renderDayButton(22, 'Tue')}
          {renderDayButton(23, 'Wed')}
          {renderDayButton(24, 'Thu')}
          {renderDayButton(25, 'Fri')}
        </View>

        <Text
          style={{
            color: '#363636',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Morning
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            flexWrap: 'wrap',
            gap: 10,
          }}>
          {renderMorningAppointment('08:30 AM')}
          {renderMorningAppointment('09:00 AM')}
          {renderMorningAppointment('09:30 AM')}
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            flexWrap: 'wrap',
            gap: 10,
          }}>
          {renderMorningAppointment('10:00 AM')}
          {renderMorningAppointment('10:30 AM')}
          {renderMorningAppointment('11:00 AM')}
        </View>

        <Text
          style={{
            color: '#363636',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Evening
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            flexWrap: 'wrap',
            gap: 10,
          }}>
          {renderEveningAppointment('05:30 PM')}
          {renderEveningAppointment('06:00 PM')}
          {renderEveningAppointment('06:30 PM')}
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            flexWrap: 'wrap',
            gap: 10,
          }}>
          {renderEveningAppointment('07:00 PM')}
          {renderEveningAppointment('08:00 PM')}
          {renderEveningAppointment('08:30 PM')}
        </View>
        <TouchableOpacity
          style={{
            height: 60,
            width: 290,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: Colors.buttonBgColor,
            marginTop: 30,
            borderRadius: 15,
          }}
          onPress={() => handleAppointment()}>
          <Text style={{color: 'white', fontSize: 18}}>
            {isLoading ? (
              <ActivityIndicator size={'large'} color={'white'} />
            ) : (
              'Make an Appointment'
            )}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Appointment;

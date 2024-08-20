import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../component/Header';
import {Colors} from '../../assets/utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {setAppointmentDetails} from '../../redux/Slices';

const About = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    medicalReport: '',
  });
  const {firstName, lastName, email, phone, address, message, medicalReport} =
    form;
  const onChangeText = (changedText, key) => {
    setForm(oldForm => {
      return {...oldForm, [key]: changedText};
    });
  };
  console.log(
    'all fields .....',
    firstName,
    lastName,
    email,
    phone,
    address,
    message,
    medicalReport,
  );
  const handleSubmit = () => {
    // Dispatch form data and merge it with the existing service
    dispatch(
      setAppointmentDetails({
        firstName,
        lastName,
        email,
        phone,
        address,
        message,
        medicalReport,
      }),
    );
    navigation.navigate('welcome')
  };

  return (
    <View style={{backgroundColor: '#E6E9FF', flex: 1}}>
      <Header navigation={navigation} isChat={false} text={'Hey Brian,'} />
      {/* <Text>About</Text> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 20,
          flexGrow: 1,
          paddingHorizontal: 20,
        }}>
        <View style={{}}>
          <Text
            style={{color: Colors.themeColor, fontSize: 20, fontWeight: 600}}>
            Tell Us About Your Self
          </Text>
          <Text style={{color: Colors.black, marginTop: 15}}>
            Lorem ipsum dolor sit amet, consetetur sadipscing
          </Text>
          <Text style={{color: Colors.black}}>
            elitr, sed diam nonumy eirmod
          </Text>

          <View>
            <View style={{marginTop: 20}}>
              <Text style={{color: Colors.black}}>First Name</Text>
              <TextInput
                onChangeText={changedText =>
                  onChangeText(changedText, 'firstName')
                }
                placeholderTextColor={Colors.black}
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  marginTop: 15,
                }}
                placeholder="Enter Your First Name"
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: Colors.black}}>Last Name</Text>
              <TextInput
                onChangeText={changedText =>
                  onChangeText(changedText, 'lastName')
                }
                placeholderTextColor={Colors.black}
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  marginTop: 15,
                }}
                placeholder="Enter Your Last Name"
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: Colors.black}}>Email Address</Text>
              <TextInput
                onChangeText={changedText => onChangeText(changedText, 'email')}
                placeholderTextColor={Colors.black}
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  marginTop: 15,
                }}
                placeholder="@Youremailaddress"
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: Colors.black}}>Phone No</Text>
              <TextInput
                onChangeText={changedText => onChangeText(changedText, 'phone')}
                placeholderTextColor={Colors.black}
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  marginTop: 15,
                }}
                placeholder="000 000 0000"
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: Colors.black}}>Home Address</Text>
              <TextInput
                onChangeText={changedText =>
                  onChangeText(changedText, 'address')
                }
                placeholderTextColor={Colors.black}
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  marginTop: 15,
                }}
                placeholder="Enter Your Address Here"
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: Colors.black}}>
                Any Kind Of Medical Report (Optional)
              </Text>
              <View style={{justifyContent: 'center'}}>
                <TextInput
                  onChangeText={changedText =>
                    onChangeText(changedText, 'medicalReport')
                  }
                  placeholderTextColor={Colors.black}
                  style={{
                    width: '100%',
                    height: 45,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    marginTop: 15,
                  }}
                  placeholder="Attached Here"
                />
                <View style={{position: 'absolute', right: 10, bottom: 10}}>
                  <Entypo
                    name="attachment"
                    color={Colors.themeColor}
                    size={20}
                  />
                </View>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: Colors.black}}>Message</Text>
              <TextInput
                onChangeText={changedText =>
                  onChangeText(changedText, 'message')
                }
                placeholderTextColor={Colors.black}
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  marginTop: 15,
                }}
                placeholder="Type Here"
              />
            </View>
            <TouchableOpacity
              style={{
                height: 60,
                width: '100%',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                backgroundColor: Colors.buttonBgColor,
                marginTop: 20,
                borderRadius: 15,
              }}
              onPress={() => handleSubmit()}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: 600}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

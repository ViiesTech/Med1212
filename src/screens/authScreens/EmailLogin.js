import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {images} from '../../assets/images/AppAssets';
import {Colors} from '../../assets/utils/Colors';
import {emailAuthentication} from '../../GlobalFunctions/Auth';
import {useDispatch, useSelector} from 'react-redux';

const EmailLogin = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const loading = useSelector(state => state.user.isLoading);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  console.log(form.email, form.password);
  const onChangeText = (changedText, key) => {
    setForm(oldForm => {
      return {...oldForm, [key]: changedText};
    });
  };

  const handleLogin = async () => {
    navigation.navigate('mainStack');
    // try {
    //   const response = await emailAuthentication(form.email, form.password,dispatch);
    // } catch (error) {
    //   console.log('errorss', error);
    // }
  };
  return (
    <ImageBackground style={{flex: 1}} source={images.background}>
      <View style={{flex: 1}}>
        <View style={{padding: 20}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignSelf: 'flex-start', marginTop: 5}}>
            <AntDesign name="arrowleft" color={Colors.black} size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 10,
          }}>
          <View style={{}}>
            <Image source={images.logo} />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#E6E9FF',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            marginTop: 30,
            paddingTop:10
          }}>
            
            <ScrollView contentContainerStyle={{paddingBottom: 10,}} showsVerticalScrollIndicator={false}>
            <View style={{width: '100%', padding: 20, alignItems: 'center'}}>
              <Text style={{marginTop: 20, fontSize: 14}}>
                MEDICAL AND GENERAL CARE
              </Text>
              <Text style={{color: '#181E5B', fontSize: 30, marginTop: 10}}>
                Be{' '}
                <Text
                  style={{color: '#181E5B', fontSize: 30, fontWeight: 'bold'}}>
                  {' '}
                  Wealthy
                </Text>
              </Text>
              <Text style={{color: '#181E5B', fontSize: 30, marginTop: 10}}>
                By being{' '}
                <Text
                  style={{color: '#181E5B', fontSize: 30, fontWeight: 'bold'}}>
                  {' '}
                  Healthy
                </Text>
              </Text>
            </View>
            <View style={{padding: 20}}>
              <TextInput
                onChangeText={changedText => onChangeText(changedText, 'email')}
                keyboardType="email-address"
                placeholderTextColor={Colors.black}
                placeholder="username or email"
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: 'black',
                }}
              />
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  marginTop: 10,
                  marginBottom: 15,
                }}>
                <Text style={{color: '#000'}}>forgot password?</Text>
              </TouchableOpacity>
              <View>
                <TextInput
                  onChangeText={changedText =>
                    onChangeText(changedText, 'password')
                  }
                  secureTextEntry={showPassword}
                  placeholderTextColor={Colors.black}
                  placeholder="password"
                  style={{
                    height: 50,
                    width: '100%',
                    borderRadius: 5,
                    padding: 10,
                    borderWidth: 1,
                    borderColor: 'black',
                  }}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: 10,
                    height: '100%',
                    justifyContent: 'center',
                  }}>
                  <Entypo
                    name={showPassword ? 'eye-with-line' : 'eye'}
                    size={25}
                    color={Colors.black}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleLogin()}
              style={{
                height: 60,
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.buttonBgColor,
                borderRadius: 10,
                alignSelf: 'center',
              }}>
              {loading ? (
                <ActivityIndicator color={Colors.white} size={'large'} />
              ) : (
                <Text style={{color: 'white', fontSize: 16}}>Sign In</Text>
              )}
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Text style={{color: '#181E5B', fontSize: 14}}>
                Don't have an account?{' '}
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                <Text
                  style={{color: '#181E5B', fontSize: 14, fontWeight: 'bold'}}>
                  {' '}
                  Register Now
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default EmailLogin;

const styles = StyleSheet.create({
  footerText: {
    color: 'white',
    fontSize: 13,
  },
  absolute: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    overflow: 'hidden',
  },
});

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

const Signup = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [loading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onChangeText = (changedText, key) => {
    setForm(oldForm => {
      return {...oldForm, [key]: changedText};
    });
  };
  console.log(form.name, form.email, form.password, form.confirmPassword);

  const handleRegisteration = async () => {
    navigation.navigate('mainStack')
    // setIsLoading(true)
    // try {
    //   const response = await emailAuthentication(form.email, form.password);
    // setIsLoading(false)
    // } catch (error) {
    // setIsLoading(false)
    //   console.log('errorss', error);
    // }
  };
  return (
    <ImageBackground style={{flex: 1}} source={images.background}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
          }}>
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
          <View style={{padding: 20, gap: 10}}>
            <TextInput
              placeholderTextColor={Colors.black}
              onChangeText={changedText => onChangeText(changedText, 'name')}
              placeholder="Full Name"
              style={{
                height: 50,
                width: '100%',
                borderRadius: 5,
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
              }}
            />
            <TextInput
              placeholderTextColor={Colors.black}
              placeholder="Email Address"
              onChangeText={changedText => onChangeText(changedText, 'email')}
              keyboardType="email-address"
              style={{
                height: 50,
                width: '100%',
                borderRadius: 5,
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
              }}
            />

            <View>
              <TextInput
                secureTextEntry={showPassword}
                placeholderTextColor={Colors.black}
                onChangeText={changedText =>
                  onChangeText(changedText, 'password')
                }
                placeholder="Password"
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
            <View>
              <TextInput
                secureTextEntry={showConfirmPassword}
                placeholderTextColor={Colors.black}
                onChangeText={changedText =>
                  onChangeText(changedText, 'confirmPassword')
                }
                placeholder="Confirm Password"
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
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: 10,
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Entypo
                  name={showConfirmPassword ? 'eye-with-line' : 'eye'}
                  size={25}
                  color={Colors.black}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => handleRegisteration()}
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
              <Text style={{color: 'white', fontSize: 16}}>Sign Up</Text>
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
              Already have an account?{' '}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('emailLogin')}>
              <Text
                style={{color: '#181E5B', fontSize: 14, fontWeight: 'bold'}}>
                {' '}
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;

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

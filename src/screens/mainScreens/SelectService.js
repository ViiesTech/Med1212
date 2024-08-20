import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../assets/utils/Colors';
import Header from '../../component/Header';
import {images} from '../../assets/images/AppAssets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import { setService } from '../../redux/Slices';

const SelectService = ({navigation}) => {
  const dispatch = useDispatch();
  const handleSelectService = selectedService => {
    dispatch(setService(selectedService));

    // Navigate to the 'about' screen
    navigation.navigate('about');
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#E6E9FF',
        paddingBottom: 20,
      }}
      showsVerticalScrollIndicator={false}>
      <Header navigation={navigation} isChat={false} text={'Hey Brian,'} />
      <View style={{alignItems: 'center', marginTop: 40}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{fontSize: 30, fontWeight: 'bold', color: Colors.textColor}}>
            Proceed{' '}
          </Text>
          <Text style={{fontSize: 30, color: Colors.textColor}}>With The </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{fontSize: 30, fontWeight: 'bold', color: Colors.textColor}}>
            Service
          </Text>
          <Text style={{fontSize: 30, color: Colors.textColor}}>
            {' '}
            You{' '}
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: Colors.textColor,
              }}>
              Want!{' '}
            </Text>
          </Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <TouchableOpacity
          onPress={() => handleSelectService('Hormone Replacement')}
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            justifyContent: 'space-between',
            borderRadius: 5,
          }}>
          <Image
            source={images.image1}
            style={{
              width: '100%',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 12,
              paddingVertical: 20,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  bottom: 5,
                  color: Colors.themeColor,
                }}>
                Hormone Replacement
              </Text>
              <View>
                <Text style={{color: '#000000'}}>
                  It is a long established fact{' '}
                </Text>
                <Text style={{color: '#000000'}}>
                  that a reader will be distracted.{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#171E5B',
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
              }}>
              <AntDesign color="white" name="right" size={25} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSelectService('Weight Loss')}
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            justifyContent: 'space-between',
            borderRadius: 5,
          }}>
          <Image
            source={images.image2}
            style={{
              width: '100%',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 12,
              paddingVertical: 20,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  bottom: 5,
                  color: Colors.themeColor,
                }}>
                Weight Loss
              </Text>
              <View>
                <Text style={{color: '#000000'}}>
                  It is a long established fact{' '}
                </Text>
                <Text style={{color: '#000000'}}>
                  that a reader will be distracted.{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#171E5B',
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
              }}>
              <AntDesign color="white" name="right" size={25} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSelectService('Health Optimization')}
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            justifyContent: 'space-between',
            borderRadius: 5,
          }}>
          <Image
            source={images.image3}
            style={{
              width: '100%',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 12,
              paddingVertical: 20,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  bottom: 5,
                  color: Colors.themeColor,
                }}>
                Health Optimization{' '}
              </Text>
              <View>
                <Text style={{color: '#000000'}}>
                  It is a long established fact{' '}
                </Text>
                <Text style={{color: '#000000'}}>
                  that a reader will be distracted.{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#171E5B',
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
              }}>
              <AntDesign color="white" name="right" size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SelectService;

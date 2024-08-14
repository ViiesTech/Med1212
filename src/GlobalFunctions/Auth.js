import axios from 'axios';
import {UserLogin} from '../redux/Slices';
import { BaseUrl } from '../BaseUrl';

const emailAuthentication = async (email, password, dispatch) => {
  let data = JSON.stringify({
    email: email,
    password: password,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/...`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  dispatch(UserLogin(config));
  // try {
  //   const response = await axios.request(config);
  //   console.log('res', response.data);
  //   return response.data;
  // } catch (error) {
  //   console.log('error', error);
  //   throw error;
  // }
};

const signUpApiIntegration = async (name, email, password, confirmPassword) => {
  let data = JSON.stringify({
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BaseUrl}/...`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    console.log('res', response.data);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};
export {emailAuthentication, signUpApiIntegration};

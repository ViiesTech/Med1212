import axios from 'axios';

export const BookAppointment = (
  service,
  firstName,
  lastName,
  email,
  phone,
  address,
  medicalReport,
  message,
  purpose,
  date,
  morningTime,
  eveningTime,
) => {
  let data = JSON.stringify({
    service: service,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    address: address,
    medicalReport: medicalReport,
    message: message,
    purpose: purpose,
    date: date,
    morningTime: morningTime,
    eveningTime: eveningTime,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3028/add-appointment',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  try {
    const res = axios.request(config);
    console.log('res',res.data)
    return res.data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, TextInput} from '../../components/atom';
import {showMessage, useForm} from '../../utils';
import SelectCountry from '../../components/atom/Select/SelectCountry';
import SelectOrganization from '../../components/atom/Select/SelectOrganization';
import Axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import SelectGender from '../../components/atom/Select/SelectGender';
import DatePicker from 'react-native-datepicker';
import {Dimensions} from 'react-native';
import {setLoading} from '../../redux/action';
import {useDispatch} from 'react-redux';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const RegisParticipant = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    country: 'INDONESIA',
    organization: 'Amura (Karate-Do Indonesia)',
    name: '',
    email: '',
    password: '',
    birthdate: '2000-09-16',
    idcard: '',
    gender: 'laki-laki',
    phone: '',
    address: '',
    city: '',
  });

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const onSubmit = () => {
    console.log('form: ', form);
    // Axios.post('http://foodmarket-backend.buildwithangga.id/api/login', form)
    //   .then(res => {
    //     console.log('success', res);
    //   })
    //   .catch(err => {
    //     console.log('error', err);
    //   });
    if (
      form.country &&
      form.organization &&
      form.password &&
      form.name &&
      form.birthdate &&
      form.email &&
      form.idcard &&
      form.gender &&
      form.phone &&
      form.address &&
      form.city
    ) {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(form.email) === false) {
        console.log('Email tidak benar');
        // setForm('email', form.email);
        showMessage('Email tidak benar');
        return false;
      } else {
        dispatch(setLoading(true));
        console.log(form);
        Axios.post('https:/oshevent.herokuapp.com/api/participant_create', form)
          .then(res => {
            setForm({
              country: 'INDONESIA',
              organization: 'Amura (Karate-Do Indonesia)',
              name: '',
              email: '',
              password: '',
              birthdate: '2000-09-16',
              idcard: '',
              gender: 'laki-laki',
              phone: '',
              address: '',
              city: '',
            });
            dispatch(setLoading(false));
            showMessage('Berhasil Registrasi', 'success');
            navigation.navigate('MainDrawer', {
              screen: 'Home',
            });
          })
          .catch(err => {
            console.log('error', err);
            showMessage('Gagal Registrasi');
            dispatch(setLoading(false));
          });
      }
    } else {
      showMessage('Isi semua form');
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Register Participant</Text>
        <SelectCountry
          label="Country"
          placeholder="Type your country"
          value={form.country}
          onSelectChange={value => setForm('country', value)}
        />
        <Gap height={16} />
        <SelectOrganization
          label="Organization"
          placeholder="Type your organization"
          value={form.organization}
          onSelectChange={value => setForm('organization', value)}
        />
        <Gap height={24} />
        <TextInput
          label="Name"
          placeholder="Type your name"
          value={form.name}
          onChangeText={value => setForm('name', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Email"
          placeholder="Type your email"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={16} />
        <SelectGender
          label="Gender"
          placeholder="Type your gender"
          value={form.gender}
          onSelectChange={value => setForm('gender', value)}
        />
        <Gap height={16} />
        <Text style={styles.label}>Birtdate</Text>
        <DatePicker
          style={{width: width, paddingRight: 32}}
          date={form.birthdate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor: 'gray',
              alignItems: 'flex-start',
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: 'gray',
            },
            dateText: {
              fontSize: 17,
            },
          }}
          onDateChange={date => {
            setForm({...form, birthdate: date});
          }}
        />
        <Gap height={16} />
        <TextInput
          label="Idcard"
          placeholder="Type your idcard"
          keyboardType="numeric"
          value={form.idcard}
          onChangeText={value => setForm('idcard', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Phone"
          placeholder="Type your phone"
          keyboardType="numeric"
          value={form.phone}
          onChangeText={value => setForm('phone', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Address"
          placeholder="Type your address"
          value={form.address}
          onChangeText={value => setForm('address', value)}
        />
        <Gap height={16} />
        <TextInput
          label="City"
          placeholder="Type your city"
          value={form.city}
          onChangeText={value => setForm('city', value)}
        />
        <Gap height={16} />
        <Button
          text="Register"
          color="red"
          textColor="white"
          onPress={() => {
            onSubmit();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default RegisParticipant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
  },
});

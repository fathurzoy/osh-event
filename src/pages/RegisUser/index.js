import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, TextInput} from '../../components/atom';
import {showMessage, useForm} from '../../utils';
import SelectCountry from '../../components/atom/Select/SelectCountry';
import SelectOrganization from '../../components/atom/Select/SelectOrganization';
import Axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../redux/action';

const RegisUser = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [form, setForm] = useForm({
    country: 'INDONESIA',
    organization: 'Amura (Karate-Do Indonesia)',
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });

  const validate = value => {
    // console.log(value);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(value) === false) {
      console.log('Email tidak benar');
      setForm('email', value);
      return false;
    } else {
      setForm('email', value);
    }
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
      form.username &&
      form.country &&
      form.organization &&
      form.username &&
      form.password &&
      form.name &&
      form.email &&
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
        Axios.post('https:/oshevent.herokuapp.com/api/user_create', form)
          .then(res => {
            console.log('success', res);
            setForm({
              country: 'INDONESIA',
              organization: 'Amura (Karate-Do Indonesia)',
              username: '',
              password: '',
              name: '',
              email: '',
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
            dispatch(setLoading(false));
            showMessage('Gagal Registrasi');
            console.log('error', err);
          });
      }
    } else {
      showMessage('Isi semua form');
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Team Registration</Text>
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
          label="Username"
          placeholder="Type your username"
          value={form.username}
          onChangeText={value => setForm('username', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
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

export default RegisUser;

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
});

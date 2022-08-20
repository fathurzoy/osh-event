import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getData, showMessage, useForm} from '../../utils';
import {Button, Gap, TextInput} from '../../components/atom';
import {useDispatch} from 'react-redux';
import {signInAction} from '../../redux/action';
import {useNavigation} from '@react-navigation/native';

const SignIn = ({}) => {
  const [username, setUsername] = useState();
  const [user, setUser] = useState();
  const [tokenx, setTokenx] = useState();
  const [form, setForm] = useForm({
    username: '',
    password: '',
  });
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    getData('username').then(res => {
      setUsername(res.value);
    });
    getData('user').then(res => {
      setUser(res.value);
    });
    getData('token_tel').then(res => {
      setTokenx(res.value);
    });
  }, [username, user]);

  const onSubmit = () => {
    console.log('form: ', form);
    // Axios.post('http://foodmarket-backend.buildwithangga.id/api/login', form)
    //   .then(res => {
    //     console.log('success', res);
    //   })
    //   .catch(err => {
    //     console.log('error', err);
    //   });
    if (form.username && form.password) {
      dispatch(signInAction(form, navigation));
    } else {
      showMessage('Isi form terlebih dahulu');
    }
  };

  return (
    <ScrollView>
      <View style={styles.page}>
        <Image
          source={require('./../../assets/Ilustration/logo.png')}
          style={{width: 320, height: 80, marginBottom: 30, marginTop: 30}}
        />
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Login</Text>
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
          <Button
            text="Login"
            color="red"
            textColor="white"
            onPress={() => {
              onSubmit();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 22,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 40,
    width: 300,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 20,
  },
});

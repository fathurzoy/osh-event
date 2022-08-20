import Axios from 'axios';
import {setLoading} from '.';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import jwt_decode from 'jwt-decode';

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/user_login`, form)
    .then(res => {
      if (res.data.success) {
        const token = `${res.data.token}`;

        dispatch(setLoading(false));
        const decoded = jwt_decode(token);

        storeData('token_tel', {value: token});
        storeData('user', {value: decoded});
        storeData('username', {value: form.username});
        console.log(decoded);
        showMessage('Berhasil Login', 'success');
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        // console.log('success', res);
        dispatch(setLoading(false));
      } else {
        console.log('error', res);
        showMessage('Username atau Password Salah');
        dispatch(setLoading(false));
      }
    })
    .catch(err => {
      console.log('error', err);
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.message);
    });
};

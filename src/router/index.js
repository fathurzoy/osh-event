import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {Dashboard, SignIn, SplashScreen} from '../pages';

// import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Image} from 'react-native';
import Profile from '../pages/Profile';
import {getData} from '../utils';
import CustomDrawerContent from './CustomDrawerContent.js';
import CustomHeader from './CustomHeader';
import {
  drawerItemsMain,
  drawerItemsMainAdmin,
  drawerItemsMainUser,
} from './drawerItemsMain';
import News from '../pages/News';
import DetailNews from '../pages/DetailNews';
import RegisUser from '../pages/RegisUser';
import RegisParticipant from '../pages/RegisParticipant';
import ManageAdmin from '../pages/ManageAdmin';
import ManageEvent from '../pages/ManageEvent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainDrawerNavigation() {
  const [username, setUsername] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    getData('username').then(res => {
      setUsername(res.value);
    });
    getData('user').then(res => {
      setUser(res.value);
    });
    setTimeout(() => {
      console.log(user);
    }, 1000);
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props =>
        user?.role === 'admin' ? (
          <CustomDrawerContent drawerItems={drawerItemsMainAdmin} {...props} />
        ) : user?.role === 'user' ? (
          <CustomDrawerContent drawerItems={drawerItemsMainUser} {...props} />
        ) : (
          <CustomDrawerContent
            drawerItems={drawerItemsMain}
            login={false}
            {...props}
          />
        )
      }>
      {!user && (
        <Drawer.Screen name="Login" component={() => <SignIn />} options={{}} />
      )}
      <Drawer.Screen
        name="Profile"
        component={() => <Profile />}
        options={{}}
      />
      <Drawer.Screen name="News" component={() => <News />} options={{}} />
      <Drawer.Screen
        name="DetailNews"
        component={() => <DetailNews />}
        options={{}}
      />
      <Drawer.Screen
        name="RegisUser"
        component={() => <RegisUser />}
        options={{}}
      />
      <Drawer.Screen
        name="RegisParticipant"
        component={() => <RegisParticipant />}
        options={{}}
      />
      <Drawer.Screen
        name="ManageAdmin"
        component={() => <ManageAdmin />}
        options={{}}
      />
      <Drawer.Screen
        name="ManageEvent"
        component={() => <ManageEvent />}
        options={{}}
      />
      <Drawer.Screen
        name="Home"
        component={() => <Dashboard />}
        options={{
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('./../assets/Icon/ic-order-on.svg')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />

      {/* <Drawer.Screen name="Settings1" component={Settings1Screen} /> */}
    </Drawer.Navigator>
  );
}

const MainApp = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    getData('username').then(res => {
      setUsername(res.value);
    });
  }, [username]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#404554',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        header: props => {
          return <CustomHeader {...props} username={username} />;
        },
      }}>
      <Stack.Screen name="MainDrawer" component={MainDrawerNavigation} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

// function MainDrawerNavigation() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Dashboard"
//       drawerContent={props => <CustomSidebarMenu {...props} />}>
//       <Drawer.Screen
//         name="Dashboard"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'Dashboard',
//           // Section/Group Name
//           activeTintColor: '#e91e63',
//           drawerIcon: ({focused, size}) => (
//             <Image
//               source={require('./../assets/Icon/ic-order-on.svg')}
//               style={{}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Proker"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'SEMUA',
//           // Section/Group Name
//           groupName: 'Proker',
//           activeTintColor: '#e91e63',
//           drawerIcon: ({focused, size}) => (
//             <Image
//               source={require('./../assets/Icon/bars-solid.svg')}
//               style={{width: 20, height20}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="CME"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'CME',
//           // Section/Group Name
//           groupName: 'Proker',
//           activeTintColor: '#e91e63',
//           drawerIcon: ({focused, size}) => (
//             <Image
//               source={require('./../assets/Icon/ic-order-on.svg')}
//               style={{}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="TRANSPORT"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'TRANSPORT',
//           // Section/Group Name
//           groupName: 'Proker',
//           activeTintColor: '#e91e63',
//           drawerIcon: ({focused, size}) => (
//             <Image
//               source={require('./../assets/Icon/ic-order-on.svg')}
//               style={{}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="IPN"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'IPN',
//           // Section/Group Name
//           groupName: 'Proker',
//           activeTintColor: '#e91e63',
//           drawerIcon: ({focused, size}) => (
//             <Image
//               source={require('./../assets/Icon/ic-order-on.svg')}
//               style={{}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="ADMIN"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'ADMIN',
//           // Section/Group Name
//           groupName: 'Proker',
//           activeTintColor: '#e91e63',
//           drawerIcon: ({focused, size}) => (
//             <Image
//               source={require('./../assets/Icon/ic-order-on.svg')}
//               style={{}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="IS"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'IS',
//           // Section/Group Name
//           groupName: 'Proker',
//           activeTintColor: '#e91e63',
//           drawerIcon: ({focused, size}) => (
//             <Image
//               source={require('./../assets/Icon/ic-order-on.svg')}
//               style={{}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Staff"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'Staff',
//           // Section/Group Name
//           groupName: 'Proker',
//           activeTintColor: '#e91e63',
//           drawerIcon: ({focused, size}) => (
//             <Image
//               source={require('./../assets/Icon/ic-order-on.svg')}
//               style={{}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Setting"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'Setting',
//           // Section/Group Name
//           activeTintColor: '#e91e63',
//           drawerIcon: ({focused, size}) => (
//             <Image
//               source={require('./../assets/Icon/ic-order-on.svg')}
//               style={{}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Logout"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'Logout',
//           // Section/Group Name
//           activeTintColor: '#e91e63',
//           drawerIcon: ({focused, size}) => (
//             <Image
//               source={require('./../assets/Icon/ic-order-on.svg')}
//               style={{}}
//             />
//           ),
//         }}
//       />
//       {/* <Drawer.Screen name="Settings1" component={Settings1Screen} />
//       <Drawer.Screen name="Settings2" component={Settings2Screen} /> */}
//     </Drawer.Navigator>
//   );
// }

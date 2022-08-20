import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import {BarSolid, IcBack} from '../assets';
import {showMessage} from '../utils';

function CustomDrawerContent(props) {
  const [mainDrawer, setMainDrawer] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);

  const toggleMainDrawer = () => {
    setMainDrawer(true);
    setFilteredItems([]);
  };

  const onItemParentPress = key => {
    const filteredMainDrawerRoutes = props.drawerItems.find(e => {
      return e.key === key;
    });
    if (filteredMainDrawerRoutes.routes.length === 1) {
      const selectedRoute = filteredMainDrawerRoutes.routes[0];
      props.navigation.toggleDrawer();
      props.navigation.navigate(selectedRoute.nav, {
        screen: selectedRoute.routeName,
      });
    } else {
      setMainDrawer(false);
      setFilteredItems(filteredMainDrawerRoutes);
    }
  };

  const signOut = () => {
    return Alert.alert('Yakin?', 'Apakah anda yakin ingin logout?', [
      // The "Yes" button
      {
        text: 'Yes',
        onPress: () => {
          AsyncStorage.multiRemove(['username', 'token_tel', 'user']).then(
            () => {
              props.navigation.push('MainDrawer', {
                screen: 'Home',
              });
            },
          );
          showMessage('Anda Telah Logout', 'success');
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: 'No',
      },
    ]);
  };

  const logOut = async () => console.log('log out');

  function renderMainDrawer() {
    return (
      <View>
        {props.drawerItems.map(parent => (
          <View key={parent.key}>
            <TouchableOpacity
              key={parent.key}
              testID={parent.key}
              onPress={() => {
                onItemParentPress(parent.key);
              }}>
              <View style={styles.parentItem}>
                <Text style={[styles.icon, styles.title]}>{parent.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}

        {props.login !== false && renderLogoutBtn()}
      </View>
    );
  }

  function renderFilteredItemsDrawer() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => toggleMainDrawer()}
          style={styles.backButtonRow}>
          <IcBack />
          <Text style={[styles.backButtonText, styles.title]}>{'BACK'}</Text>
        </TouchableOpacity>
        {filteredItems.routes.map(route => {
          return (
            <TouchableOpacity
              key={route.routeName}
              testID={route.routeName}
              onPress={() =>
                props.navigation.navigate(route.nav, {
                  screen: route.routeName,
                })
              }
              style={styles.item}>
              {/* <View style={styles.parentItem}> */}
              <Text style={styles.title}>{route.title}</Text>
              {/* </View> */}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  function renderLogoutBtn() {
    return (
      <View>
        <TouchableOpacity onPress={signOut} testID="customDrawer-logout">
          <View style={styles.parentItem}>
            <Text style={styles.title}>{'Log out'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.drawerContainer}>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={styles.centered}>
          <Image
            source={require('./../assets/Ilustration/logo.png')}
            style={styles.logo}
          />
        </View>
        {mainDrawer ? renderMainDrawer() : renderFilteredItemsDrawer()}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flexDirection: 'row',
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 50,
  },
  drawerContainer: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
  container: {
    flex: 1,
    zIndex: 1000,
  },
  centered: {
    paddingBottom: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#000',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  parentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    paddingTop: 4,
    paddingBottom: 4,
  },
  title: {
    margin: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  backButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 17,
    paddingLeft: 3,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    marginLeft: 10,
  },
  backButtonText: {
    marginLeft: 10,
    color: 'red',
  },
});

export default CustomDrawerContent;

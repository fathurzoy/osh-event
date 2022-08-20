import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ManageEvent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Manage Event</Text>
    </View>
  );
};

export default ManageEvent;

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

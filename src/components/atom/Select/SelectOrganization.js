import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const SelectOrganization = ({
  label,
  value = 'Amura (Karate-Do Indonesia)',
  onSelectChange,
}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}>
          <Picker.Item
            label="Amura (Karate-Do Indonesia)"
            value="Amura (Karate-Do Indonesia)"
          />
          <Picker.Item
            label="BKC (Bandung Karate Club)"
            value="BKC (Bandung Karate Club)"
          />
          <Picker.Item
            label="BLACK PATHER KARATE INDONESIA"
            value="BLACK PATHER KARATE INDONESIA"
          />
          <Picker.Item
            label="GABDIKA SHITORYU INDONESIA (Gabungan Beladiri Karate-DO Shitoryu"
            value="GABDIKA SHITORYU INDONESIA (Gabungan Beladiri Karate-DO Shitoryu"
          />
          <Picker.Item
            label="GAJUKAI Gojuryu Karate-Do Indonesia"
            value="GAJUKAI Gojuryu Karate-Do Indonesia"
          />
          <Picker.Item
            label="GOJU RYU ASS (Gojuryu Association)"
            value="GOJU RYU ASS (Gojuryu Association)"
          />
          <Picker.Item
            label="GOKASI (Gojuryu Karate-DO Shibukan Seluruh Indonesia)"
            value="GOKASI (Gojuryu Karate-DO Shibukan Seluruh Indonesia)"
          />
          <Picker.Item
            label="INKADO (Indonesia Karate-DO)"
            value="INKADO (Indonesia Karate-DO)"
          />
          <Picker.Item
            label="INKAI (Institut Karate-DO Indonesia)"
            value="INKAI (Institut Karate-DO Indonesia)"
          />
          <Picker.Item label="KALA HITAM" value="KALA HITAM" />
          <Picker.Item label="KANDAGA PRANA" value="KANDAGA PRANA" />
          <Picker.Item label="KEI SHIN KAN" value="KEI SHIN KAN" />
          <Picker.Item
            label="KKI (Kushin Ryu M. Karate-Do Indonesia)"
            value="KKI (Kushin Ryu M. Karate-Do Indonesia)"
          />
          <Picker.Item
            label="KYOKUSHINKAY (Kyokushinkay Karate-Do Indonesia)"
            value="KYOKUSHINKAY (Kyokushinkay Karate-Do Indonesia)"
          />
          <Picker.Item
            label="LEMKARI (Lembaga Karate-Do Indonesia)"
            value="LEMKARI (Lembaga Karate-Do Indonesia)"
          />
          <Picker.Item label="NON KARATE" value="NON KARATE" />
          <Picker.Item label="PORBIKAWA" value="PORBIKAWA" />
          <Picker.Item label="PORDIBYA" value="PORDIBYA" />
          <Picker.Item
            label="SHINDOKA (Shinto-ryu Karate-Do Indonesia)"
            value="SHINDOKA (Shinto-ryu Karate-Do Indonesia)"
          />
          <Picker.Item
            label="SHIN ROI TE (SHINROITE Karatedo)"
            value="SHIN ROI TE (SHINROITE Karatedo)"
          />
          <Picker.Item label="SHOTOKAI" value="SHOTOKAI" />
          <Picker.Item
            label="TOKO INDONESIA (Karate-Do TOKO Indonesia)"
            value="TOKO INDONESIA (Karate-Do TOKO Indonesia)"
          />
          <Picker.Item
            label="WADOKAI (Wadoryu Karate-Do Indonesia)"
            value="WADOKAI (Wadoryu Karate-Do Indonesia)"
          />
        </Picker>
      </View>
    </View>
  );
};

export default SelectOrganization;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});

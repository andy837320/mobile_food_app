import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

const IconLabel = ({ name, label, color }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={name}
        type="ionicon"
        size={14}
        color={color}
        style={styles.iconstyle}
      />
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

export default IconLabel;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
  },
  container: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  iconstyle: {
    marginRight: 2,
    marginTop: 6,
  },
});

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

// const Header = (props) => {
const Header = ({ label }) => {
  //   console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 90,
    backgroundColor: '#a29bfe',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Header;

import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';
import IconLabel from '../components/IconLabel';

const RestaurantCard = ({ info }) => {
  const { name, categories, deliveryTime, distance, image } = info;
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={image} />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}> {name}</Text>
          <Text style={styles.categoryStyle}>{categories}</Text>
          <View style={styles.iconLabelStyle}>
            <IconLabel name="md-time" label={deliveryTime} color="#fff" />
            <IconLabel name="md-location" label={distance} color="#6c5ce7" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const offset = 25;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  cardContainer: {
    width: deviceWidth - 25,
    backgroundColor: '#a29bfe',
    height: 260,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    elevation: 9,
    shadowRadius: 5,
    marginTop: 10,
  },
  imageStyle: {
    height: 140,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '500',
    padding: 1,
  },
  categoryStyle: {
    fontWeight: '400',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
  },
});

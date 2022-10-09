import React from "react";
import { View, StyleSheet } from "react-native";

const Dots = ({ index, activeIndex }) => {
  const customStyle =
    index === activeIndex ? styles.primaryBullet : styles.grayBullet;
  return <View style={[customStyle, styles.mainDotContainer]} />;
};

export default Dots;

const styles = StyleSheet.create({
  mainDotContainer: {
    marginHorizontal: 2,
    borderRadius: 15 / 2,
    alignSelf: "center",
  },
  primaryBullet: {
    height: 15,
    width: 15,
    backgroundColor:'#7380A1',
  },
  grayBullet: {
    height: 10,
    width: 10,
    backgroundColor: '#A2AFCE',
  },
});

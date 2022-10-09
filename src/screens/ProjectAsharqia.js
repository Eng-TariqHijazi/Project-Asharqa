import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useWindowDimensions } from "react-native";
import Dots from "../components/Dots/Dots";

const Data = [
  {
    id: 1,
    item: () => {
      return (
        <View style={styles.childContainer}>
          <Image
            source={require("../../assets/1-removebg-preview.png")}
          ></Image>
          <Text style={styles.textStyle}>CONTRACTING</Text>
        </View>
      );
    },
  },

  {
    id: 2,
    item: () => {
      return (
        <View style={styles.childContainer}>
          <Image source={require("../../assets/card1.png")}></Image>
        </View>
      );
    },
  },
  {
    id: 3,
    item: () => {
      return (
        <View style={styles.childContainer}>
          <Image source={require("../../assets/12.png")}></Image>
        </View>
      );
    },
  },
  {
    id: 4,
    item: () => {
      return (
        <View style={styles.childContainer}>
          <Image source={require("../../assets/imag/scan2.png")}></Image>
        </View>
      );
    },
  },
  {
    id: 5,
    item: () => {
      return (
        <View style={styles.childContainer}>
          <Image
            source={require("../../assets/1-removebg-preview.png")}
          ></Image>
          <Text style={styles.textStyle}>CONTRACTING</Text>
        </View>
      );
    },
  },
];
export default function ProjectAsharqia({ navigation }) {
  const { height, width } = useWindowDimensions();
  // const [point, setpoint] = useState(true);
  // const onScroll = (value) => {
  //   value.nativeEvent.contentOffset.x < width / 2
  //     ? setpoint(true)
  //     : setpoint(false);
  // };
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnScroll = (event) => {
    const leftSpace = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(leftSpace / width);
    setActiveIndex(currentIndex);
  };
  // search about expo fonts and how to use it
  return (
    <View style={{ alignItems: "center", height }}>
      <ScrollView
        onScroll={handleOnScroll}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {Data.map((myItem) => {
          return (
            <View key={myItem.id} style={[styles.container, { width }]}>
              {myItem.item()}
            </View>
          );
        })}
      </ScrollView>
      {/* <View style={{ flexDirection: "row", bottom: 200 }}>
        <View
          style={[
            styles.point,
            {
              backgroundColor: point ? "black" : "#AEAEAE",
              marginHorizontal: 8,
            },
          ]}
        />
        <View
          style={[
            styles.point,
            { backgroundColor: point ? "#AEAEAE" : "black" },
          ]}
        />
      </View> */}
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({ index }) => (
          <Dots index={index} activeIndex={activeIndex} />
        )}
      />
      {activeIndex == Data.length - 1 ? (
        <TouchableOpacity
          style={styles.next}
          onPress={() => {
            navigation.navigate("list");
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>التالي</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    top: 150,
    alignItems: "center",
  },
  childContainer: {
    flexDirection: "row",
    height: 208.66,
    alignItems: "flex-end",
  },
  textStyle: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: -60,
    marginBottom: 10,
  },
  point: {
    width: 14,
    height: 14,
    borderRadius: 1000,
  },
  next: {
    width: 120,
    height: 50,
    position: "absolute",
    backgroundColor: "#AEAEAE",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    bottom: 90,
    right: 50,
  },
});

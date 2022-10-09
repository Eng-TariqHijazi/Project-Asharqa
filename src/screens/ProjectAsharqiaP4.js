import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
} from "react-native";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function ProjectAsharqiaP4() {
  const Header = () => {
    return (
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/image.png")}
        style={styles.header}
      >
        <StatusBar style="auto" />
        <Text style={styles.headerText}>تواصل معنا </Text>
      </ImageBackground>
    );
  };
  const [cairo] = useFonts({
    Cairo: require("../../assets/fonts/Cairo-VariableFont_wght.ttf"),
    CairoBold: require("../../assets/fonts/static/Cairo-Bold.ttf"),
    CairoSBold: require("../../assets/fonts/static/Cairo-SemiBold.ttf"),
    CairoMeadiam: require("../../assets/fonts/static/Cairo-Medium.ttf"),
    CairoRegular: require("../../assets/fonts/static/Cairo-Regular.ttf"),
  });
  if (!cairo) return null;
  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        source={require("../../assets/imag/scan1.png")}
        style={styles.scan}
      >
        <Image source={require("../../assets/imag/scan2.png")} />
        <Image
          source={require("../../assets/imag/Scan3.png")}
          style={{ position: "absolute", top: 197 }}
        />
      </ImageBackground>
      <View style={styles.txt}>
        <Text style={styles.txt1}>تواصل معنا على:  </Text>
        <Text style={styles.txt2}>
          infa@afaa8.com{"\n"}0096652709005
          {" \n"}العنوان : المملكة العربية السعودية
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    flex:1
  },
  header: {
    height: 112,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "CairoSBold",
    color: "#FFFFFF",
    marginTop: 40,
  },
  scan: {
    width: 257,
    height: 257,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin:70
  },
  txt1: {
    fontSize: 22,
    fontFamily: "CairoBold",
    marginBottom:30,
    color:'#262626'
  },
  txt2: {
    fontSize: 22,
    fontFamily: "CairoRegular",
    textAlign: "right",
    color:'#262626'
  },
  txt: {
    width: 300,
    alignItems: "flex-end",
    left:40
  },
});

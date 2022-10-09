import { View, StyleSheet, Image, Text } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
export default function ProjectAsharqiaP3() {
  const [cairo] = useFonts({
    Cairo: require("../../assets/fonts/Cairo-VariableFont_wght.ttf"),
    CairoBold: require("../../assets/fonts/static/Cairo-Bold.ttf"),
    CairoSBold: require("../../assets/fonts/static/Cairo-SemiBold.ttf"),
    CairoMeadiam: require("../../assets/fonts/static/Cairo-Medium.ttf"),
  });
  if (!cairo) return null;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.image}>
        <Image source={require("../../assets/imag/imageT.png")} />
      </View>
      <View>
        <Text style={styles.titel}>من نحن</Text>
      </View>
      <View style={{ width: "87%" }}>
        <Text style={styles.text}>
          نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من اعمال
          الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب الكهرباء والسباكة
          والنجارة واعمال السيراميك والرخام والواجهات والدهانات.
          {"   \n\n"}
          نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب العقارات
          والوحدات السكنية والشركات والهيئات والمؤسسات الحكومية وغيرها من
          الوحدات وتركيب كافة الخدمات واعمال التشطيبات الكاملة.
          {"   \n\n"}
          نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب المتطورة
          والاشكال العصرية
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    flex: 1,
  },
  image: {
    marginTop: 95,
  },
  titel: {
    fontSize: 29,
    fontFamily: "CairoSBold",
    color: "#848698",
    marginVertical: 60,
  },
  text: {
    fontFamily: "Cairo",
    fontSize: 12,
  },
});


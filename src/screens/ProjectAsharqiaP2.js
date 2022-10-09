import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
const DATA = [
  {
    id: "1",
    title: "متطلبات تأسيس   منشاة مقاولات",
    image: require("../../assets/imag/2.png"),
  },
  {
    id: "2",
    title: "التعريف بقطاع المقاولات ",
    image: require("../../assets/imag/3.png"),
  },
  {
    id: "3",
    title: " قواعد وإجراءات أساسية بشأن التعاقد ",
    image: require("../../assets/imag/4.png"),
  },
  {
    id: "4",
    title: "تراخيص مزاولة نشاط المقاولات",
    image: require("../../assets/imag/5.png"),
  },
  {
    id: "5",
    title: " منصات الكترونية في خدمة المقاول ",
    image: require("../../assets/imag/6.png"),
  },
  {
    id: "6",
    title: "الجهات\n ذات العلاقة   ",
    image: require("../../assets/imag/7.png"),
  },
  {
    id: "7",
    title: " آليات تسليم مشاريع المقاولات ",
    image: require("../../assets/imag/8.png"),
  },
  {
    id: "8",
    title: "خطة عمل المشروعات وتدفقاتها المالية",
    image: require("../../assets/imag/9.png"),
  },
  {
    id: "9",
    title: "علاقة المقاول مع مكاتب ",
    image: require("../../assets/imag/10.png"),
  },
  {
    id: "10",
    title: "أنظمة\n عقود المقاولات ",
    image: require("../../assets/imag/11.png"),
  },
  {
    id: "11",
    title: " لجنة المقاولات :",
    image: require("../../assets/imag/12.png"),
    extratitle:"رسالتها- أهدافها – إنجازاتها"
  },
  {
    id: "12",
    title:"الجانب\n الاجتماعي والوطني ",
    image: require("../../assets/imag/13.png"),
  },
];
export default function ProjectAsharqiaP2({navigation}) {
  const Header = () => {
    return (
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/image.png")}
        style={[styles.header, { width ,position:'absolute',zIndex:1}]}
      >
        <StatusBar style="auto" />
        <Text style={styles.headerText}>المقاولات</Text>
      </ImageBackground>
    );
  };
  const Footer = () => {
    return (
      <View style={[styles.footer, { width }]}>
        <Pressable onPress={() => {navigation.navigate('Call')}}>
          <Image source={require("../../assets/imag/phone-call.png")} />
          <Text style={styles.textFooter}>اتصل بنا</Text>
        </Pressable>
        <Pressable onPress={() => {navigation.navigate('About')}}>
          <Image source={require("../../assets/imag/.png")} />
          <Text style={styles.textFooter}> من نحن</Text>
        </Pressable>
        <Pressable onPress={() => {navigation.navigate('list')}}>
          <Image source={require("../../assets/imag/house.png")} />
          <Text style={styles.textFooter}>الرئيسية</Text>
        </Pressable>
      </View>
    );
  };

  const { width, height } = useWindowDimensions();

  const [cairo] = useFonts({
    Cairo: require("../../assets/fonts/Cairo-VariableFont_wght.ttf"),
    CairoBold: require("../../assets/fonts/static/Cairo-Bold.ttf"),
    CairoSBold: require("../../assets/fonts/static/Cairo-SemiBold.ttf"),
    CairoMeadiam: require("../../assets/fonts/static/Cairo-Medium.ttf"),
  });
  if (!cairo) return null;
  const Item = ({ title, image,extratitle }) => (
    <View style={styles.boxContainer}>
      <View style={styles.boxImage}>
        <Image source={image} />
      </View>
      <Text style={styles.boxTitle}>{title}</Text>
      <Text style={[styles.boxTitle, { fontSize:11 }]}>{extratitle}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} extratitle={item.extratitle} />
  );
  return (
    <View style={[styles.container, { width, height }]}>
      <Header />

      <SafeAreaView style={{ height: height * 0.83, left: 8,marginTop:95 }}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.body}>
              <Text style={[styles.boxTitle, { textAlign: "right",color:'#000000' }]}>
                الفهرس
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </SafeAreaView>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "space-between",
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
  boxContainer: {
    width: "43%",
    height: 136,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    shadowColor: "#D4D4D4",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 5,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  boxTitle: {
    fontSize: 16,
    color: "#2D2D2D",
    textAlign: "center",
    fontFamily: "CairoSBold",
  },
  boxImage: {
    backgroundColor: "#F8F8FF",
    borderColor: "#A2AFCE",
    borderWidth: 1,
    borderRadius: 1000,
    width: 49,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    backgroundColor: "#FFFFFF",
    paddingVertical: 30,
  },
  textFooter: { fontSize: 8, fontFamily: "CairoSBold", marginTop: 8 },
  body: {
    marginTop:40,
    width: "93.5%",
    height: 50,
  },
});


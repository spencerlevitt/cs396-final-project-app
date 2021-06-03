import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NavBar from "../../components/NavBar";
import fonts from "../../res/fonts";

let nflArray = [
  {
    name: "San Francisco 49ers",
    image:
      "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/49ers/ktz5vdmoklfk7fe0e1tj",
  },
  {
    name: "Chicago Bears",
    image:
      "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fdawindycity.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F16090824-850x560.jpeg",
  },
  {
    name: "Cincinnati Bengals",
    image:
      "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2133,w_3200/https%3A%2F%2Fnflmocks.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1279665737.jpeg",
  },
  {
    name: "Buffalo Bills",
    image:
      "https://lh3.googleusercontent.com/proxy/94RG2mBbYijCNen_Vc_oC10-T9XOsrsWp5VPBehZdlHxzYd_uYpUnqs96EpbDNj9uoRpUKXZKVa45ZtXM71fogvWrzXcAzuwMHc9p7kigxQkuk8OEGtUoJ7YEz03sm5SLdZch64R7qCtQbkxyCGsBP897Tpoj0T3A7alz2KaDWfgsG94gjO3wz4jFRZ1KlX1WID-u_EtUwr2cEC-xYTSE9qgda_H8J9sSLnwZ8ERcHVN",
  },
  {
    name: "Denver Broncos",
    image:
      "https://cdn.vox-cdn.com/thumbor/BVYKE6zWx8z9Sy996f-j7M4X5CE=/0x0:3474x2315/1200x800/filters:focal(1931x370:2485x924)/cdn.vox-cdn.com/uploads/chorus_image/image/69287526/usa_today_15225358.0.jpg",
  },
  {
    name: "Cleveland Browns",
    image:
      "https://brownswire.usatoday.com/wp-content/uploads/sites/48/2019/11/usatsi_13707749.jpg?w=1000&h=600&crop=1",
  },
  {
    name: "Arizona Cardinals",
    image:
      "https://arizonasports.com/wp-content/uploads/2019/09/Cardinals-d.jpg",
  },
  {
    name: "Los Angeles Chargers",
    image:
      "https://www.si.com/.image/t_share/MTc3NTkyOTY0MzA0ODczMDY0/los-angeles-chargers-offseason-outlook.jpg",
  },
  {
    name: "Kansas City Chiefs",
    image:
      "https://chiefswire.usatoday.com/wp-content/uploads/sites/70/2021/05/2399740c3d2e47d0a05984cef8a19665.jpg?w=1000&h=600&crop=1",
  },
  {
    name: "Indianapolis Colts",
    image:
      "https://fox59.com/wp-content/uploads/sites/21/2019/10/gettyimages-1178485532-e1572308618622.jpg?w=2560&h=1440&crop=1",
  },
  {
    name: "Dallas Cowboys",
    image:
      "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fthelandryhat.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F15366138-850x560.jpeg",
  },
  {
    name: "Miami Dolphins",
    image:
      "https://dolphinswire.usatoday.com/wp-content/uploads/sites/53/2017/04/helmet.jpg?w=1000&h=600&crop=1",
  },
  {
    name: "Philadelphia Eagles",
    image:
      "https://cdn.vox-cdn.com/thumbor/XrXsFrHYp-3NfI7t0R3rehwdGwk=/0x0:4500x3000/1200x800/filters:focal(1922x710:2642x1430)/cdn.vox-cdn.com/uploads/chorus_image/image/66484778/1196977526.jpg.0.jpg",
  },
  {
    name: "Atlanta Falcons",
    image:
      "https://cdn-media.theathletic.com/cdn-cgi/image/fit=cover,width=700,height=466/GejLQcwxT3CZ_iyxMj2EqoUJb_1440x.1005.jpg",
  },
  {
    name: "New York Giants",
    image:
      "https://elitesportsny.com/wp-content/uploads/2018/08/new_york_giants.jpg",
  },
  {
    name: "Jacksonville Jaguars",
    image:
      "https://clutchpoints.com/wp-content/uploads/2021/04/Jaguars-news-Trevor-Lawrence-already-getting-familiar-with-Jacksonville_s-playbook-Thumbnail.jpg",
  },
  {
    name: "New York Jets",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/New-York-Jets-v-Los-Angeles-Rams-11e636d56a248245d2505de32dffb198.jpg",
  },
  {
    name: "Detroit Lions",
    image:
      "https://media.pff.com/2021/03/USATSI_15022126_168392742_lowres.jpg?w=956&h=538",
  },
  {
    name: "Green Bay Packers",
    image:
      "https://packerswire.usatoday.com/wp-content/uploads/sites/57/2018/08/usatsi_11092166.jpg?w=1000&h=600&crop=1",
  },
  {
    name: "Carolina Panthers",
    image:
      "https://cdn.theathletic.com/app/uploads/2021/05/31220706/GettyImages-1190111377-1024x683.jpg",
  },
  {
    name: "New England Patriots",
    image:
      "https://media.pff.com/2021/02/USATSI_15247772_168392742_lowres.jpg?w=956&h=538",
  },
  {
    name: "Oakland Raiders",
    image: "https://images.wsj.net/im-42000?width=620&size=1.5",
  },
  {
    name: "Los Angeles Rams",
    image:
      "https://ramblinfan.com/wp-content/uploads/imagn-images/2017/07/15415867.jpeg",
  },
  {
    name: "Baltimore Ravens",
    image:
      "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Febonybird.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F02%2F1198933094-850x560.jpeg",
  },
  {
    name: "Washington Football Team",
    image:
      "https://washingtonmonthly.com/wp-content/uploads/2019/10/20463320891_8d234e846e_k-e1572125024158.jpg",
  },
  {
    name: "New Orleans Saints",
    image:
      "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fnflspinzone.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1183820278.jpeg",
  },
  {
    name: "Seattle Seahawks",
    image:
      "https://cdn.vox-cdn.com/thumbor/C1Zx-k5EIRWxl3Q2swhetF5oRHk=/0x0:2842x1895/1200x800/filters:focal(1194x721:1648x1175)/cdn.vox-cdn.com/uploads/chorus_image/image/69371811/usa_today_15414429.0.jpg",
  },
  {
    name: "Pittsburgh Steelers",
    image:
      "https://cdn.vox-cdn.com/thumbor/25WLZCEROF7ZgEjD1ia2Q4q43pA=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/69145572/1289082493.0.jpg",
  },
  {
    name: "Tampa Bay Buccaneers",
    image:
      "https://image.cnbcfm.com/api/v1/image/106836806-1612755015155-gettyimages-1300924499-a53i8043_20210207102111424.jpeg?v=1612755075",
  },
  {
    name: "Houston Texans",
    image:
      "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2133,w_3200/https%3A%2F%2Fhouseofhouston.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1067714544-1.jpeg",
  },
  {
    name: "Tennessee Titans",
    image:
      "https://sportshub.cbsistatic.com/i/r/2020/10/13/caf8c88f-0c2c-432a-a066-585f438200b7/thumbnail/1200x675/6aedae05f3e7f8fd7f6fc4881b866e1b/derrick-henry.jpg",
  },
  {
    name: "Minnesota Vikings",
    image:
      "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2171,w_3200/https%3A%2F%2Fnflspinzone.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1175601552.jpeg",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <NavBar />
      <View style={styles.container}>
        {nflArray.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ChatRoom", { room: item.name })}
          >
            <ImageBackground
              key={item.name}
              style={styles.teamContainer}
              source={{ uri: item.image }}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={styles.overLay} />
              <Text style={styles.teamName}>{item.name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: "10%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  teamContainer: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.1,
    shadowRadius: 14.78,
    elevation: 22,
    backgroundColor: "white",
  },
  overLay: {
    position: "absolute",
    width: 250,
    height: 150,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "black",
    borderRadius: 10,
    opacity: 0.5,
    zIndex: -1,
  },
  teamName: {
    fontFamily: fonts.bold,
    color: "white",
    padding: 20,
    fontSize: 25,
  },
});

export default HomeScreen;

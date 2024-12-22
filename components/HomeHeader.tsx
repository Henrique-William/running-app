import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function HomeHeader() {
  return (
    <View style={styles.profileImage}>
      <Image
        source={require("@/assets/images/image/profile.png")}
        width={80}
        height={80}
      />
      <View style={styles.title}>
        <Text style={{ fontFamily: 'PoppinsBold', fontSize: 32, fontWeight: 700 }}>Hello Beatriz!</Text>
        <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: "#999999" }}>
          Let’s do some workout today!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  title: {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default HomeHeader;

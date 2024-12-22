import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

interface DayInfo {
  calories: number;
  distance: number;
}

function DayInfo({ calories, distance }: DayInfo) {
  return (
    <View style={styles.dayContainer}>
      <View style={styles.info}>
        <View style={{ alignItems: "center", flexDirection: "row", gap: 8 }}>
          <Image
            source={require("@/assets/images/image/calories-light.png")}
            width={24}
            height={24}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{ fontFamily: "Poppins", fontSize: 12, color: "#999999" }}
            >
              Total Calories
            </Text>
            <Text style={{ fontFamily: 'PoppinsBold', fontSize: 22 }}>
              {calories} kcal
            </Text>
          </View>
        </View>

        <View style={{ borderRightWidth: 1, borderColor: "#d9d9d9" }} />

        <View style={{ alignItems: "center", flexDirection: "row", gap: 8 }}>
          <Image
            source={require("@/assets/images/image/routing.png")}
            width={24}
            height={24}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{ fontFamily: "Poppins", fontSize: 12, color: "#999999" }}
            >
              Total Distance
            </Text>
            <Text style={{ fontFamily: 'PoppinsBold', fontSize: 22 }}>
              {distance} km
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 24,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DayInfo;

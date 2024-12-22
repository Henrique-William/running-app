import DayInfo from "@/components/DayInfo";
import HomeHeader from "@/components/HomeHeader";
import WeekStepsChart from "@/components/WeekStepsChart";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const totalCalories: number = 546;
  const totalDistance: number = 3.5;

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <HomeHeader />
        <DayInfo calories={totalCalories} distance={totalDistance}/>

        {/* Card Week steps */}
        {/* <View style={styles.steps}>
          <Text style={{color: "#fff",fontFamily: 'PoppinsBold', fontSize: 18}}>Steps</Text>
        </View> */}
        <WeekStepsChart/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 24,
    marginTop: 32,
    marginHorizontal: 20,
  },
  //Card week steps
  steps: {
    width: "100%",
    height: 219,
    backgroundColor: "#171817",
    borderRadius: 20,
    padding: 24,
  },
});

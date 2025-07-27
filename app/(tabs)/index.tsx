import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return(

   <View
   style={styles.container}
   >
     <Text style={styles.content}>Hello World</Text>
     <Link href={"/About"}>visit About h Screen</Link>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    gap: 10
  },
  content: {
    fontSize: 52,
  }
});
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>About Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    gap: 10
  },
  content: {
    fontSize: 52,
  }
});

export default About
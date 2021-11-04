import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 30 }}> App </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3944F7",
  },
});

export default App;

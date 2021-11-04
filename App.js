import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";

const curencyPerCndDollar = {
  AUSDOLLAR: 1.07,
  REAL: 4.54,
  RENMINBI: 5.18,
  EURO: 0.69,
  RUPEE: 60.57,
  YEN: 91.91,
  RUBLE: 56.82,
  RAND: 12.25,
  WON: 946.07,
  FRANC: 0.74,
  POUND: 0.59,
  USDOLLAR: 0.81,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0",
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenView}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{this.state.resultValue}</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            selectionColor="#FFF"
            keyboardType="numeric"
            placeholder="Enter Value"
            value={this.state.inputValue}
            onChangeText={(inputValue) => this.setState({ inputValue })}
          />
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
  screenview: {
    flex: 1,
  },
  resultContainer: {
    height: 70,
    marginTop: 22,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#E03B8B",
    borderWidth: 2,
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#c1c1c1",
  },
  input: {
    color: "#FFF",
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
  },
});

export default App;

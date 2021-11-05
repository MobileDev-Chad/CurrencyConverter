import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

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

  buttonPressed = (currency) => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter some Value");
    }
    let result = parseFloat(this.state.inputValue) * curencyPerCndDollar[currency];

    this.setState({resultValue: result.toFixed(2)})
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress= {Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screenView}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{this.state.resultValue}</Text>
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

          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
              onPress={() => this.buttonPressed("AUSDOLLAR")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>AUS $</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("REAL")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>REAL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("RENMINBI")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>RENMINBI</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("EURO")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>EURO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("RUPEE")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>RUPEE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("YEN")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>YEN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("RUBLE")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>RUBLE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("RAND")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>RAND</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("WON")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>WON</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("FRANC")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>FRANC</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("POUND")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>POUND</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("USDOLLAR")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>US $</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3944F7",
  },
  screenView: {
    flex: 1,
  },
  resultContainer: {
    height: 70,
    marginTop: 100,
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
    backgroundColor: "#E03B8B",
  },
  input: {
    color: "#FFF",
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
  },
  converterButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2,
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E03B8B",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
  },
  converterButtonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;

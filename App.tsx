import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface State {
  displayValue: string;
}

class CalculatorApp extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      displayValue: '0',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.displayValue}</Text>
        <View style={styles.buttonRow}>
          <Button title="1" onPress={() => this.handleInput('1')} />
          <Button title="2" onPress={() => this.handleInput('2')} />
          <Button title="3" onPress={() => this.handleInput('3')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="4" onPress={() => this.handleInput('4')} />
          <Button title="5" onPress={() => this.handleInput('5')} />
          <Button title="6" onPress={() => this.handleInput('6')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="7" onPress={() => this.handleInput('7')} />
          <Button title="8" onPress={() => this.handleInput('8')} />
          <Button title="9" onPress={() => this.handleInput('9')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="C" onPress={() => this.clearDisplay()} />
          <Button title="0" onPress={() => this.handleInput('0')} />
          <Button title="=" onPress={() => this.calculateResult()} />
        </View>
      </View>
    );
  }

  handleInput = (input: string) => {
    const newDisplayValue =
      this.state.displayValue === '0' ? input : this.state.displayValue + input;
    this.setState({ displayValue: newDisplayValue });
  };

  clearDisplay = () => {
    this.setState({ displayValue: '0' });
  };

  calculateResult = () => {
    try {
      const result = eval(this.state.displayValue);
      this.setState({ displayValue: result.toString() });
    } catch (error) {
      this.setState({ displayValue: 'Error' });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    fontSize: 36,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default CalculatorApp;

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableHighlight, Text, View, Dimensions } from 'react-native';
import { button } from './constants';
import { styles } from './stylesheet'
import { Button } from './interfaces/buttonInterface';

const windowWidth = Dimensions.get('window').width;

type displayProp = 'flex' | 'none' | undefined;

export default function App() {
  const [displayedValue, setDisplayedValue] = useState('0');
  const [expression, setExpression] = useState('');
  const [memoryValue, setMemoryValue] = useState('0');
  const [operator, setOperator] = useState('');

  function handleButtonPress(buttonLabel: string) {
    switch (buttonLabel) {
      case 'm+': {
        setMemoryValue((+memoryValue + +displayedValue).toString());
        break;
      }
      case 'm-': {
        setMemoryValue((+memoryValue - +displayedValue).toString());
        break;
      }
      case 'mc': {
        setMemoryValue('0');
        break;
      }
      case 'mr': {
        setDisplayedValue(memoryValue);
        break;
      }
      case '%': {
        setDisplayedValue((+displayedValue / 100).toString());
        break;
      }
      case '+/-': {
        setDisplayedValue((+displayedValue * -1).toString());
        break;
      }
      case ',': {
        setDisplayedValue(displayedValue + '.');
        break;
      }
      case 'C': {
        setDisplayedValue('0');
        setOperator('');
        setExpression('');
        break;
      }
      case 'AC': {
        setDisplayedValue('0');
        setOperator('');
        setExpression('');
        setMemoryValue('0');
        break;
      }
      case '=': {
        setDisplayedValue(Number(eval(expression + displayedValue).toFixed(4)).toString());
        setExpression('');
        break;
      }
      case '/':
      case '*':
      case '-':
      case '+': {
        setOperator(buttonLabel);
        break;
      }
      default: {
        if (operator.length) {
          setExpression(expression + displayedValue + operator);
          setDisplayedValue(buttonLabel);
          setOperator('');
          break;
        }
        setDisplayedValue(Number(displayedValue + buttonLabel).toString());
      }
    }
  }

  let displayAC: displayProp = 'flex';
  let displayC: displayProp = 'none';

  if (displayedValue !== '0' || expression.length) {
    displayAC = 'none';
    displayC = 'flex';
  }

  return (
    <View style={styles.container}>

      <View style={styles.resultPanel}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.resultPanelText}
        >
          {displayedValue}
        </Text>
      </View>

      <View>
        {button.map((buttonRow: Array<any>, index) => (

          <View
            key={index}
            style={styles.buttonRow}
          >
            {buttonRow.map((button: Button, index) => (
              <TouchableHighlight
                underlayColor={'white'}
                key={index}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  backgroundColor: operator === button.label ? 'white' : button.color,
                  height: windowWidth / 5,
                  width: button.label === '0' ? (windowWidth / 5) * 2.22 : windowWidth / 5,
                  paddingRight: button.label === '0' ? 100 : 0,
                  display: button.label === 'C'
                    ? displayC
                    : button.label === 'AC'
                      ? displayAC
                      : 'flex'
                }}
                onPress={() => handleButtonPress(button.label)}
              >
                <Text style={styles.buttonLabel}>
                  {button.label}
                </Text>
              </TouchableHighlight>
            ))
            }
          </View>

        ))}
      </View>

      <StatusBar style="auto" />
    </View >
  );
}
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import App from '../App';

const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '+/-', '%', '*', '=', 'm+', 'm-', 'mc', 'mr', 'C', 'AC'];
const buttons: Record<string, any> = {};

test('the user summarizes the numbers', () => {
    const { getByText, getAllByText } = render(
        <App />
    );

    labels.forEach(label => (
        buttons[label] = label !== '0' ? getByText(label) : getAllByText(label)[1]
    ));

    fireEvent.press(buttons['8']);
    fireEvent.press(buttons['+']);
    fireEvent.press(buttons['2']);
    fireEvent.press(buttons['5']);
    fireEvent.press(buttons['=']);
    fireEvent.press(buttons['+']);
    fireEvent.press(buttons['3']);
    fireEvent.press(buttons['=']);

    const result = getAllByText('36');
    expect(result).toHaveLength(1);
});

test('the user subtracts the numbers', () => {
    const { getByText, getAllByText } = render(
        <App />
    );

    labels.forEach(label => (
        buttons[label] = label !== '0' ? getByText(label) : getAllByText(label)[1]
    ));

    fireEvent.press(buttons['3']);
    fireEvent.press(buttons['-']);
    fireEvent.press(buttons['5']);
    fireEvent.press(buttons['=']);

    const result = getAllByText('-2');
    expect(result).toHaveLength(1);
});

test('the user sums up the numbers and gets a percentage of the number', () => {
    const { getByText, getAllByText } = render(
        <App />
    );

    labels.forEach(label => (
        buttons[label] = label !== '0' ? getByText(label) : getAllByText(label)[1]
    ));

    fireEvent.press(buttons['1']);
    fireEvent.press(buttons['+']);
    fireEvent.press(buttons['4']);
    fireEvent.press(buttons['8']);
    fireEvent.press(buttons['0']);
    fireEvent.press(buttons['=']);
    fireEvent.press(buttons['%']);

    const result = getAllByText('4.81');
    expect(result).toHaveLength(1);
});

test('the user multiplies two numbers and divides by the third', () => {
    const { getByText, getAllByText } = render(
        <App />
    );

    labels.forEach(label => (
        buttons[label] = label !== '0' ? getByText(label) : getAllByText(label)[1]
    ));

    fireEvent.press(buttons['1']);
    fireEvent.press(buttons['0']);
    fireEvent.press(buttons['4']);
    fireEvent.press(buttons['/']);
    fireEvent.press(buttons['2']);
    fireEvent.press(buttons['0']);
    fireEvent.press(buttons['*']);
    fireEvent.press(buttons['3']);
    fireEvent.press(buttons['=']);

    const result = getAllByText('15.6');
    expect(result).toHaveLength(1);
});


test('the user change the sign', () => {
    const { getByText, getAllByText } = render(
        <App />
    );

    labels.forEach(label => (
        buttons[label] = label !== '0' ? getByText(label) : getAllByText(label)[1]
    ));

    fireEvent.press(buttons['1']);
    fireEvent.press(buttons['0']);
    fireEvent.press(buttons['4']);
    fireEvent.press(buttons['+/-']);
    fireEvent.press(buttons['=']);

    const result = getAllByText('-104');
    expect(result).toHaveLength(1);
});

test('the user enters a number into memory and displays it on the screen', () => {
    const { getByText, getAllByText } = render(
        <App />
    );

    labels.forEach(label => (
        buttons[label] = label !== '0' ? getByText(label) : getAllByText(label)[1]
    ));

    fireEvent.press(buttons['1']);
    fireEvent.press(buttons['0']);
    fireEvent.press(buttons['4']);
    fireEvent.press(buttons['m+']);
    fireEvent.press(buttons['*']);
    fireEvent.press(buttons['7']);
    fireEvent.press(buttons['=']);
    fireEvent.press(buttons['mr']);

    const result = getAllByText('104');
    expect(result).toHaveLength(1);
});

test('the user increases and decreases the number in memory then displays', () => {
    const { getByText, getAllByText } = render(
        <App />
    );

    labels.forEach(label => (
        buttons[label] = label !== '0' ? getByText(label) : getAllByText(label)[1]
    ));

    fireEvent.press(buttons['5']);
    fireEvent.press(buttons['m+']);
    fireEvent.press(buttons['m+']);
    fireEvent.press(buttons['m+']);
    fireEvent.press(buttons['m-']);
    fireEvent.press(buttons['mr']);

    const result = getAllByText('10');
    expect(result).toHaveLength(1);
});


test('the user increases then clears the memory', () => {
    const { getByText, getAllByText } = render(
        <App />
    );

    labels.forEach(label => (
        buttons[label] = label !== '0' ? getByText(label) : getAllByText(label)[1]
    ));

    fireEvent.press(buttons['2']);
    fireEvent.press(buttons['m+']);
    fireEvent.press(buttons['mc']);
    fireEvent.press(buttons['mr']);

    const result = getAllByText('0');
    expect(result).toHaveLength(2);
});
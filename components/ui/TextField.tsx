import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export type TextFieldProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
  style?: object;
  inputStyle?: object;
};

/**
 * A reusable React Native text input component with native styling.
 * It includes a label and handles basic input properties.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.label - The label text for the input field.
 * @param {string} [props.placeholder=''] - The placeholder text for the input field.
 * @param {string} [props.value=''] - The current value of the input field.
 * @param {function} props.onChangeText - Callback function to handle text changes.
 * @param {boolean} [props.secureTextEntry=false] - If true, the text input obscures the text entered.
 * @param {string} [props.keyboardType='default'] - Determines which keyboard to open, e.g., 'numeric', 'email-address'.
 * @param {object} [props.style={}] - Additional styles to apply to the container view.
 * @param {object} [props.inputStyle={}] - Additional styles to apply directly to the TextInput.
 */
const TextField = ({
  label,
  placeholder = '',
  value = '',
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  style = {},
  inputStyle = {},
}: TextFieldProps) => {
  return (
    // The main container view for the label and text input.
    <View style={[styles.container, style]}>
      {/* Label for the text input */}
      <Text style={styles.label}>{label}</Text>

      {/* The actual TextInput component */}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="#888" // Customize placeholder color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    fontFamily: 'DMSans',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f4f4f5',
    color: '#333',
  },
});

export default TextField;

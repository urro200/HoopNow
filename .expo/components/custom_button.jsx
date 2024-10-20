import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.button,
        containerStyles,
        isLoading && styles.loadingButton,
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF9C01",
    borderRadius: 10,
    minHeight: 62,
    padding: 10,
    margin: 20,
    width: '95%',
    justifyContent: "center",
    alignItems: "center",
  },
  loadingButton: {
    opacity: 0.5,
  },
  text: {
    color: "#161622",
    fontFamily: "psemibold",
    fontSize: 18,
  },
});

export default CustomButton;

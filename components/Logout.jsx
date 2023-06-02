import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuthentication from "../hooks/useAuthentication";

const MyHeader = (params) => {
  const { title, style } = params;
  const { logoutUser } = useAuthentication();
  return (
    <View style={[styles.headerContainer, style]}>
      <Text style={styles.titleText}>{title}</Text>
      <Pressable onPress={logoutUser}>
        <Text style={styles.logoutText}>LOG OUT</Text>
      </Pressable>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: 700,
  },
  logoutContainer: {
    backgroundColor: "red",
    zIndex: 99,
    borderColor: "#fff",
  },
  logoutText: {
    color: "#fff",
    fontSize: 12,
    position: "absolute",
    left: 12,
    bottom: -14,
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});

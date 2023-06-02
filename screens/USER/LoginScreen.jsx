import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import useAuthentication from "../../hooks/useAuthentication";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { verifyUserLoggedIn, loginUser } = useAuthentication();
  const navigation = useNavigation();

  useEffect(() => {
    verifyUserLoggedIn();
  }, []);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/images/pokeball.png")}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.headerText}>TRAINER LOGIN</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => loginUser(email, password)}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
        <View style={styles.otherLoginContainer}>
          <Text style={styles.otherLoginHeader}>OTHER SIGN IN METHOD</Text>
          <View style={styles.iconContainer}>
            <Pressable>
              <Image
                style={styles.icons}
                source={require("../../assets/images/pokeball.png")}
              />
            </Pressable>

            <Pressable>
              <Image
                style={styles.icons}
                source={require("../../assets/images/pokeball.png")}
              />
            </Pressable>

            <Pressable>
              <Image
                style={styles.icons}
                source={require("../../assets/images/pokeball.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.toRegisterContainer}>
          <Text style={styles.toRegisterText}>Dont have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.linkText}>Register here</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  logoContainer: {
    flex: 2,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    maxHeight: 250,
    maxWidth: 250,
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    flex: 3,
    backgroundColor: "red",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: 2,
    color: "#fff",
    paddingTop: 30,
  },
  textInputContainer: {
    width: "80%",
  },
  textInput: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 15,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: 2,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  otherLoginContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: 40,
  },
  otherLoginHeader: {
    color: "#fff",
  },
  iconContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  icons: {
    width: 38,
    height: 38,
    backgroundColor: "#fff",
    padding: 1,
    borderRadius: 19,
  },
  toRegisterContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  toRegisterText: {
    color: "#fff",
  },
  linkText: {
    textDecorationLine: "underline",
    color: "#fff",
    fontWeight: 600,
  },
});

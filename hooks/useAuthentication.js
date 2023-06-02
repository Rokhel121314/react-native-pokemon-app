import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";

const useAuthentication = () => {
  const navigation = useNavigation();

  // FIREBASE EMAIL PASSWORD AUTHENTICATION
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`${user.email} has Signed In!`);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`${user.email} has Logged In!`);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const verifyUserLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("bottomTab");
        const uid = user.uid;
        const currentUser = auth.currentUser;
        console.log("uid", uid, "user", currentUser);
      } else {
        navigation.navigate("Login");
        console.log("No user");
      }
    });
  };

  return {
    registerUser,
    loginUser,
    verifyUserLoggedIn,
    logoutUser,
  };
};

export default useAuthentication;

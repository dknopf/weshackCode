import React from "react";
import { Text, View } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const dbh = firebase.firestore();

async function TestFirestore(props) {
  // Initialize Firebase

  // firebase.firestore().collection("test").add({ hello: "world" });

  console.log("hello");
  const usersCollection = await dbh.doc("test/test1").get();
  console.log("ahhh");

  // const testData = usersCollection.data();
  // console.log("testdata is:", testData);
  console.log("USERS COLLECTION IS:", usersCollection.data());
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default TestFirestore;

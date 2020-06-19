import React, { useEffect } from "react";
import Header from "./Header";
import firebase from "../firebase/clientApp";

const App = ({ children }) => {
  useEffect(() => {
    console.log(`[App.tsx:8] process.env: `, process.env);
    const db = firebase.firestore();
    const practices = db
      .collection("practices")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });
  }, []);

  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default App;

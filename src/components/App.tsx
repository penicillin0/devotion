import React, { useEffect } from "react";
import Header from "./Header";
import firebase from "../firebase/clientApp";

const App = ({ children }) => {
  useEffect(() => {
    console.log(`[App.tsx:8] process.env: `, process.env);
    // const practiceRef = firebase.database().ref("/practices");
    // console.log(`[App.tsx:8] practiceRef: `, practiceRef);
  }, []);

  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default App;

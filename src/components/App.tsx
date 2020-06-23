import React, { useEffect } from "react";
import Header from "./Header";
import firebase from "../firebase/clientApp";
import { atom, useSetRecoilState, RecoilRoot } from "recoil";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`

export const practicesState = atom<
  {
    title: string;
    url: string;
  }[]
>({
  key: "practicesState",
  default: [],
});

const App: React.FC = ({ children }) => {
  const setPractices = useSetRecoilState(practicesState);

  useEffect(() => {
    const db = firebase.firestore();
    const fetch = async () => {
      const querySnapshot = await db.collection("practices").get();
      const arr = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().title}`);
        arr.push({
          title: doc.data().title,
          url: doc.data().url,
        });
      });
      console.log(arr);
      setPractices(arr);
    };
    fetch();
  }, []);

  return (
    <main>
      <GlobalStyle></GlobalStyle>
      <Header />
      {children}
    </main>
  );
};

export default App;
